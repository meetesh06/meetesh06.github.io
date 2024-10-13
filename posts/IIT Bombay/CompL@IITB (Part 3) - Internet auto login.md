<!-- CompL@IITB (Part 3) - Internet auto login -->
<!-- IIT Bombay -->
<!-- compl-server -->
<!-- Guides regarding compl server at IITB. -->
<!-- 13-10-2024 -->

You may need internet access on your server account, logging in again and again might be tedious. You can setup a script and periodically call it to keep you logged in forever on the server.
The scripts used in this post can be found here [Server-Scripts](https://github.com/meetesh06/Server-Scripts/tree/main).
#### 1. Login to the server
```
ssh me@server-ip
```

#### 2. Get the Server Scripts from github
```
git clone git@github.com:meetesh06/Server-Scripts.git
```

## Usage

1. Copy the *internet.sh* (from *Server-Scripts/user-related/internet-auto-login/internet.sh*) file into your home directory.

2. Update the *username* and *ssoToken* variables in the *internet.sh*.

```bash
#!/bin/bash
date

username="your_ldap_id"
ssoToken="your_SSO_token"
...
```

3. Add *internet.sh* to cron tab to run every 30 minutes. The following command can be used to access the cron tab.

```bash
crontab -e
```

Inside the crontab, we will add a new job which runs every 30 minutes (see the last line). 
Also, make sure you replace *YOUR_USERNAME* with your actual username.

```bash
*/30 * * * * /home/YOUR_USERNAME/internet.sh | tee -a /home/YOUR_USERNAME/internetLogin.log
```


### Notes

Logs will be saved to */home/YOUR_USERNAME/internetLogin.log*.