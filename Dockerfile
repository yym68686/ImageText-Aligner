FROM node:22.1.0-bullseye-slim

# 设置工作目录
WORKDIR /app

# 将 package.json 和 package-lock.json 复制到工作目录
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 将当前目录下的所有文件复制到工作目录
COPY . .

# 暴露容器内部的 3000 端口
EXPOSE 3000

# 启动 Node.js 应用
CMD ["node", "server.js"]