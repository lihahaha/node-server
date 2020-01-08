# /usr/src/nodejs/hello-docker/Dockerfile
FROM node:10.16.0

# 在容器中创建一个目录
RUN mkdir -p /usr/src/node-server/

# 定位到容器的工作目录
WORKDIR /usr/src/node-server/

# RUN/COPY 是分层的，package.json 提前，只要没修改，就不会重新安装包
COPY package.json /usr/src/node-server/package.json
RUN cd /usr/src/node-server/
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install cnpm -g --registry=https://registry.npm.taobao.org
RUN cnpm i

# 把当前目录下的所有文件拷贝到 Image 的 /usr/src/node-server/ 目录下
COPY . /usr/src/node-server/


EXPOSE 3000
CMD node app.js