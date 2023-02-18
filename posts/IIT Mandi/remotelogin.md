<!-- Logging into proxy over the terminal -->
<!-- IIT Mandi -->
<!-- Proxy around campus -->
<!-- In situations where a login system is used to restrict internet access, remote work can be challenging because it may require periodic logins to the gateway. -->
<!-- 24-01-2023 -->

## Uses of a terminal based web browser

In situations where a login system is used to restrict internet access, remote work can be challenging because it may require periodic logins to the gateway. Fortunately, in most cases, remote access to these systems can be achieved via SSH. However, remote desktop access over SSH may not always be possible or practical. In such cases, a quick and simple alternative is to use a terminal-based browser that can be used to log in to the gateway remotely over SSH.

By using a terminal-based browser, such as Lynx or w3m, users can access web-based login pages and other web content without the need for a graphical user interface or remote desktop software. This approach can be particularly useful for remote work or accessing web content on systems that are not accessible via a graphical interface.

Overall, using a terminal-based browser to access web content remotely over SSH is a simple and effective way to overcome login restrictions and perform remote work more efficiently.

​
1. Install [w3m](https://manpages.ubuntu.com/manpages/trusty/man1/w3m.1.html)
```
> sudo apt install w3m
```

2. Visit some page using the browser, you will be redirected to the gateway login page.
```
> w3m google.com


[logo]

INTERNET ACCESS

(Hostel Area)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
❇ | WING ℹ | INSITE

IIT Mandi LDAP Login

[                    ]
[                    ]
[Submit] [Reset]
Copyright © - All Rights Reserved - IIT Mandi

```    

3. Login and then do ctrl+z this will keep the session active in the background for that bash session until exit.
