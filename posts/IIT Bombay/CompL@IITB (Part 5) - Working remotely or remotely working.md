<!-- CompL@IITB (Part 5) - Working remotely or remotely working -->
<!-- IIT Bombay -->
<!-- compl-server -->
<!-- Guides regarding compl server at IITB. -->
<!-- 13-10-2024 -->

Once you have a remote docker container setup, next task is connecting to it and working on it remotely. For this guide we will focus mainly on VSCode.
#### 1. Create a Config

Instead of typing the entire server IP address every time you login it is more convenient to setup a config.
To do this you can add the following to your *~/.ssh/config* file to look as follows.
```
Host me
	HostName 10.10.7.7
	User meetesh
```
Now you can connect by simply typing
```
ssh me
```

#### 2. Install Remote Development Extension

![compl_guide_p5_2.png](/compl_guide_p5_2.png)

#### 3. Connecting to the server
After installing the remote development extension you should see a "Remote Explorer" tab on the left side. When you open it, select Removes (Tunnels/SSH) on the top.

![compl_guide_p5_3_1.png](/compl_guide_p5_3_1.png)

Selecting "Connect in Current Window" will connect the VSCode session to the remote server. 

![compl_guide_p5_3_2.png](/compl_guide_p5_3_2.png)

**Notice the SSH:me on the left bottom corner**

#### 4. Install Remote Development Extension (inside the server)

#### 5. Goto Remote Development and Select Dev Containers

![compl_guide_p5_5.png](/compl_guide_p5_5.png)

#### 6. Attach VSCode to your dev container 

![compl_guide_p5_6.png](/compl_guide_p5_6.png)

#### 7. Open Your Working Directory

![compl_guide_p5_7_1.png](/compl_guide_p5_7_1.png)

![compl_guide_p5_7_2.png](/compl_guide_p5_7_2.png)

Congratulations, this is your remote working directory.