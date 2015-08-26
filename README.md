# Hello World in Backbone.js

## Install
- Install Docker
```
apt-get install docker
```
- Download this repository
```
wget https://github.com/helloworld-universe/hello-world-backbonejs/archive/master.zip
unzip master.zip
cd hello-world-backbonejs-master
```
- Build the docker image
```
docker build -t hello-world/backbonejs .
```
- Run the docker container
```
docker run --rm -it -p 8888:80 hello-world/backbonejs
