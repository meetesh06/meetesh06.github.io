<!-- CompL@IITB (Part 1) - Whats inside our server -->
<!-- IIT Bombay -->
<!-- compl-server -->
<!-- Guides regarding compl server at IITB. -->
<!-- 13-10-2024 -->

First of all, congratulations on joining CompL! Secondly, you will likely be working on projects that may take hours to compile and run on your laptop or lab system. To save time, it's a good idea to hit the ground running. We have set up a powerful server to support your work and aid your journey.

```
Operating System : Ubuntu 22.04.4 LTS
memory           : 1026GiB System memory
socket 1         : AMD EPYC 7713 64-Core Processor
socket 2         : AMD EPYC 7713 64-Core Processor
Storage          : Crucial P3 Plus 2TB PCIe M.2 2280 SSD
N/W Controller.  : Ethernet Controller 10G X550T (x2)
GPU              : GA102GL [RTX A5000]
```

The server is all well and good, but it's useless if you don't know how to utilize it properly. This series of posts will give you all the information you need to get started.

Before we begin, here are some general things to know about our setup:

1. Nobody gets *sudo*, ever.
2. All users work inside their own Docker containers (we allow Docker-in-Docker).
3. If you don't want to use Docker, please reconsider.
5. As we add new compute nodes dedicated specifically for benchmarking, they will function as headless runners.

## The lay of the land

Servers are computers that are a lot more expensive, so I like to call them _very_ expensive computers. It’s no secret that setting up a server for research purposes is slightly more nuanced—we do performance testing and aim for repeatable, reliable results.

The general idea behind our setup is the following:

> If a set of CPU cores are dedicated to running my process and my process only, the performance characteristics will be more or less similar (you still need to run it around 10-15 times to observe the real variance; a good setup will give you low variance).

The following sections discuss how the server itself was set up. This information might be useful if you plan to set up your own server or benchmarking machine in the future.

## Using cpuset to isolate the CPUs

We have *256* logical cores (64 cores × 4 sockets × 2 threads/core), out of which we would like to reserve *64* for general system processes while the remaining cores are split up based on a specific scheme. To achieve this, we use *cpuset*.

#### 1. Installing cpuset (Ubuntu 22.04.4)
```bash
#
# 1. Install cpuset
#
sudo apt install cpuset

#
# 2. Disable the unified cgroup hierarchy and update GRUB
#
sudo su
echo 'GRUB_CMDLINE_LINUX="systemd.unified_cgroup_hierarchy=false"' > /etc/default/grub.d/cgroup.cfg

#
# 3. Update GRUB and reboot
#
update-grub
sudo reboot now
```


Once *cpuset* is installed, you can verify its functionality by typing *cset set*, which will list all the current CPU sets on the system.

#### 2. Checking Core Groups Using cset set

```bash
admin@server: $ cset set
cset: 

         Name       CPUs-X    MEMs-X Tasks Subs Path

 ------------ ---------- - ------- - ----- ---- ----------
         root      0-255 y     0-1 y  2223   12 /
```

**Reference: https://github.com/SUSE/cpuset/blob/master/doc/tutorial.txt**

In summary, we want to allocate different CPU cores for various users and tasks. Here's our core allocation scheme:

1. **Cores 0-63**: Reserved for system processes
2. **Cores 64-95**: Reserved for Ash's working directory
3. **Cores 96-127**: Reserved for GitLab build runners
4. **Cores 128-143**: Reserved for Meetesh's working directory
5. ... And so on
#### 3. Creating Different Core Groups Using cset set
```bash
# Separate the CPU cores into groups
sudo cset set -c 0-63 -s system
sudo cset set -c 64-95 -s c32_1
sudo cset set -c 96-127 -s c32_2
sudo cset set -c 128-143 -s c16_1
sudo cset set -c 144-159 -s c16_2
sudo cset set -c 160-175 -s c16_3
sudo cset set -c 176-191 -s c16_4
sudo cset set -c 192-207 -s c16_5
sudo cset set -c 208-223 -s c16_6
sudo cset set -c 224-239 -s c16_7
sudo cset set -c 240-255 -s c16_8
sudo cset set -c 0-63 -s docker
```
Now that we’ve created the core groups, we need to instruct the operating system to utilize only the system CPU set for its own processes.

4. Moving all active processes to the system core group.
```bash
sudo cset proc -m -k -f root -t system
```

## Creating a startup script

Manually setting up the server every time it restarts can become tedious. Fortunately, it's straightforward to automate the process with a startup script.
#### 1. Creating startup.sh
```bash
#!/bin/bash

LOGPATH="/home/admin/startup.log"

echo "[startup.sh] Starting Cron..." &>> $LOGPATH
date &>> $LOGPATH

# 1. Disable address space randomization (https://llvm.org/docs/Benchmarking.html)
sudo sh -c "echo 0 > /proc/sys/kernel/randomize_va_space"

# 2. Log in to Internet
# curl --location-trusted ...

# 3. Create the sets (run every time from here post a reboot)
sudo cset set -c 0-63 -s system
sudo cset set -c 64-95 -s c32_1
sudo cset set -c 96-127 -s c32_2
sudo cset set -c 128-143 -s c16_1
sudo cset set -c 144-159 -s c16_2
sudo cset set -c 160-175 -s c16_3
sudo cset set -c 176-191 -s c16_4
sudo cset set -c 192-207 -s c16_5
sudo cset set -c 208-223 -s c16_6
sudo cset set -c 224-239 -s c16_7
sudo cset set -c 240-255 -s c16_8
sudo cset set -c 0-63 -s docker

# 5. Move system processes to the "system" set
sudo cset proc -m -k -f root -t system

# 6. List all the sets
sudo cset set &>> $LOGPATH
cat /proc/sys/kernel/randomize_va_space &>> $LOGPATH
```
#### 2. Setting Up the Crontab
1. Open the root crontab:
```bash
sudo crontab -e
```

2. Add the following line to execute the script after each reboot:
```bash
@reboot  /home/admin/startup.sh
```

## Reboot and check the startup log

A *startup.log* gets created every time the system is booted up, we can look at the output as follows.

```bash
admin@server:~$ cat startup.log 
[startup.sh] Starting Cron...
Tue Jul 16 07:16:57 PM UTC 2024
cset: 
         Name       CPUs-X    MEMs-X Tasks Subs Path
 ------------ ---------- - ------- - ----- ---- ----------
         root      0-255 y     0-1 y  2430   12 /
        c16_3    160-175 n       0 n     0    0 /c16_3
        c32_2     96-127 n       0 n     0    0 /c32_2
        c16_1    128-143 n       0 n     0    0 /c16_1
        c16_8    240-255 n       0 n     0    0 /c16_8
       docker       0-63 n       0 n     0    0 /docker
        c16_6    208-223 n       0 n     0    0 /c16_6
       system       0-63 n       0 n   203    0 /system
        c16_4    176-191 n       0 n     0    0 /c16_4
        c16_2    144-159 n       0 n     0    0 /c16_2
        c32_1      64-95 n       0 n     0    0 /c32_1
        c16_7    224-239 n       0 n     0    0 /c16_7
        c16_5    192-207 n       0 n     0    0 /c16_5
0
```



