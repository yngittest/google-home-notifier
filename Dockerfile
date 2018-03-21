FROM node

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y git-core libnss-mdns libavahi-compat-libdnssd-dev
RUN apt-get install -y avahi-daemon avahi-discover
RUN apt-get install -y vim

COPY package.json /usr/src/app
RUN npm install

COPY . /usr/src/app

CMD service dbus start && service avahi-daemon start && node index.js
