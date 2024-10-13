<!-- CompL@IITB (Part 2) - Setting up keys -->
<!-- IIT Bombay -->
<!-- compl-server -->
<!-- Guides regarding compl server at IITB. -->
<!-- 13-10-2024 -->

For this guide let us assume that our server is located at 
```10.10.7.7``` 
(for safety reasons I wont be posting any real IP addresses, you can get the IP address from our slack group).
## 1) Password-less access

Every time you login to the server via *ssh* is will ask you for your password.

```bash
mee@localcomputer:$ ssh testuser@10.10.7.7
testuser@10.10.7.7's password: 
```

When working remotely, you may be asked for the password many times and this will quickly get annoying. One of the first things you will want to setup is password-less access. To do this we will simply copy our public key to the server's *~/.ssh/known_hosts* file, this will alleviate the need for a password.
#### 1. Check if you have a key pair (id_XXX.pub file)

```bash
mee@localcomputer:~$ cd ~/.ssh
mee@localcomputer:~/.ssh$ ls
known_hosts  known_hosts.old
```

If you do not see a *id_XXX.pub* file, you can generate a new one by running *ssh-keygen* otherwise skip to **STEP 1.2**.

```bash
mee@localcomputer:~$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/users/rs/meeteshmehta/.ssh/id_rsa): 
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /users/rs/meeteshmehta/.ssh/id_rsa.
Your public key has been saved in /users/rs/meeteshmehta/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:fCdbGkHwDOIUNyPujcsQ2xn5M/YerLOnLwe79MA+QEw meeteshmehta@cse.iitb.ac.in
The key's randomart image is:
+---[RSA 2048]----+
|      =.*..      |
|     +E= B       |
|    .o=   +      |
|     =oB   .     |
|    o.= S + o    |
|     o.+.* B     |
|      o.+o*      |
|       o==o.     |
|        *@+      |
+----[SHA256]-----+
```

Now you should have a *id_XXX.pub* file inside your *.ssh* folder.
```bash
mee@localcomputer:~$ cd
mee@localcomputer:~$ cd .ssh
mee@localcomputer:~/.ssh$ ls
id_rsa	id_rsa.pub  known_hosts  known_hosts.old
```

#### 2: Copy your public key to the server

**On Linux** you can use the *ssh-copy-id username@serverip* command to do this in one shot.
```bash
mee@localcomputer:~/.ssh$ ssh-copy-id testuser@10.10.7.7
/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: "/users/rs/mee/.ssh/id_rsa.pub"
The authenticity of host '10.10.7.7 (10.10.7.7)' can't be established.
ED25519 key fingerprint is SHA256:Vg2VnfQZYo1OiLWXNoso4m8YG7/WXzRRjixrighfbCo.
This key is not known by any other names
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys
mee@10.10.7.7's password: 

Number of key(s) added: 1

Now try logging into the machine, with:   "ssh 'testuser@10.10.7.7'"
and check to make sure that only the key(s) you wanted were added.
```

**On Windows** you can directly copy the contents of your local *~/.ssh/id_XXX.pub* into your server accounts *~/.ssh/known_hosts*. If the folder/file does not exist create it. If *known_hosts* already exists then append your key at the end. 

***~/.ssh/id_XXX.pub* on the local system**
```bash
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCvyRAn7hR8bOduhZ8AaXtlP9qIXHOA7Dj/0KjKGyfpzhqlXVEtarKWmtpAKqD8jdkx10xichuX9KKuT/1IAcxRByZsKdcYyMIndha7672+IWzjsTH1ID+AAAAB3NzaC1yc2EAAAADAQABAAABAQCvyRAn7hR8bOduhZ8AaXtlP9qIXHOA7Dj/rVRTiMHmEW3zCQPGlLMiYUBhhhE9ZerhZPtfQESOBGistKZc6b6ItSYZBAKViWd6+OUwD0tibzmEXR meeteshmehta@cse.iitb.ac.in
```

## 2) GitHub Access

1. Login to the server.
```bash
meeteshmehta@Meeteshs-MacBook-Air ~ % ssh meeteshmehta@10.10.7.7
```
2. Generate a key-kair **inside the server**.
```bash
meetesh@server:~$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/users/rs/meeteshmehta/.ssh/id_rsa): 
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /users/rs/meeteshmehta/.ssh/id_rsa.
Your public key has been saved in /users/rs/meeteshmehta/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:fCdbGkHwDOIUNyPujcsQ2xn5M/YerLOnLwe79MA+QEw meeteshmehta@cse.iitb.ac.in
The key's randomart image is:
+---[RSA 2048]----+
|      =.*..      |
|     +E= B       |
|    .o=   +      |
|     =oB   .     |
|    o.= S + o    |
|     o.+.* B     |
|      o.+o*      |
|       o==o.     |
|        *@+      |
+----[SHA256]-----+
```
3. Get your key using the *cat* command.
```
meetesh@server:~$ cat ~/.ssh/id_*.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCvyRAn7hR8bOduhZ8AaXtlP9qIXHOA7Dj/0KjKGyfpzhqlXVEtarKWmtpAKqD8jdkx10xichuX9KKuT/1IAcxRByZsKdcYyMIndha7672+IWzjsTH1ID+AAAAB3NzaC1yc2EAAAADAQABAAABAQCvyRAn7hR8bOduhZ8AaXtlP9qIXHOA7Dj/rVRTiMHmEW3zCQPGlLMiYUBhhhE9ZerhZPtfQESOBGistKZc6b6ItSYZBAKViWd6+OUwD0tibzmEXR meeteshmehta@cse.iitb.ac.in
```
4. Copy this key into your Github Account > Settings > SSH and GPG Keys > New SSH Key
