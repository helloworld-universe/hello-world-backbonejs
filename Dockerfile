FROM ubuntu:15.04
MAINTAINER Yonas Yanfa

EXPOSE 8888
WORKDIR /root
RUN apt-get update && apt-get install vim-tiny nginx-light -y && rm -rf /var/www/html/*
ADD index.html /var/www/html/
ADD js /var/www/html/js/
ADD run.sh /root/
CMD bash -C '/root/run.sh';cd '/var/www/html';'bash'
