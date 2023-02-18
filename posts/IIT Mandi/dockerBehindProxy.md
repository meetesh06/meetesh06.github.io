<!-- Working with docker behind proxy -->
<!-- IIT Mandi -->
<!-- Proxy around campus -->
<!-- Small guide on setting up docker behind IIT Mandi proxy. -->
<!-- 12-10-2022 -->

## Why is docker under a proxy a pain?

Docker containers are designed to be isolated from the host system, which can create complications when trying to configure a proxy. This means that if you want to use a proxy server within a Docker container, you need to set it up specifically for that container. Depending on your setup, this may involve configuring the proxy server to forward requests to the container, or setting up the container to use a proxy on its own.

Docker containers often have their own network configuration, which can make it difficult to connect to external resources through a proxy. This is because the proxy server needs to be able to route traffic between the container and the external resource, which can require some additional configuration.

Proxy servers often rely on authentication and other security measures, which can be difficult to implement within a Docker container. This is because the container may not have access to the necessary credentials or certificates to authenticate with the proxy server.

## The setup

Setting up Docker can be a daunting task for beginners, and even experienced users may encounter unexpected issues during installation and configuration. It often requires a good understanding of networking and system administration concepts, as well as familiarity with the Docker ecosystem and related tools.

(Fortunately, in this case, I must thank Arjun who had already figured this out :)).


1. The first step is installation.
```bash
sudo apt install docker.io 
```
2. Set user group to docker (so that we can used docker without sudo)
```bash
sudo groupadd docker
sudo usermod -aG docker $USER 
```
​
3. Restart the computer for the user group changes to take place
```bash
groups
```
​
This should now list the groups the user belongs to, docker should be one of them.
​
4. Setting up proxy, using systemd
​
```bash
# create the directory for docker systemd service
sudo mkdir -p /etc/systemd/system/docker.service.d
sudo touch /etc/systemd/system/docker.service.d/http-proxy.conf
```
​
5. Edit the http-proxy.conf
​
```bash
sudo gedit /etc/systemd/system/docker.service.d/http-proxy.conf
```
​
Paste the following into the file, make sure to fill in the username and password.
​
```bash
[Service]
Environment="HTTP_PROXY=http://<username>:<password>@gateway.iitmandi.ac.in:8080"
Environment="HTTPS_PROXY=http://<username>:<password>@gateway.iitmandi.ac.in:8080"
Environment="NO_PROXY=localhost,127.0.0.1"
```
​
6. Restart the docker daemon
​
```bash
sudo systemctl daemon-reload
sudo systemctl restart docker
```
​
7. Verify that proxy is working by pulling some image
​
```bash
docker pull ubuntu:20.04
```
