# 图片与文本对齐编辑工具

## 项目简介
本项目是一个专为深度学习数据清洗设计的工具，它能够在网页上并列展示成对的图片和文本文件。该工具主要用于校对和编辑文本，确保文本内容与相应的图片内容一致。此外，为了加快文本与图片的对齐过程，本项目还集成了中文翻译功能，自动将英文文本翻译成中文。

## 主要功能
- **并列展示图片和文本**：在网页上并行展示成对的图片和文本，便于视觉对比和编辑。
- **实时文本编辑与同步**：用户可以直接在网页上编辑文本，编辑后的内容会即时同步更新到本地文件，以便持久化存储。
- **自动翻译**：通过集成的翻译服务，自动将文本从英文翻译成中文，帮助用户快速进行内容校对和调整。
- **导航控制**：用户可以通过网页上的按钮或键盘操作在不同的图片和文本之间切换。

## 技术栈
- **前端**：HTML, CSS, JavaScript
- **后端**：Node.js, Express.js
- **翻译服务**：通过 Docker 运行的自定义翻译服务

## 安装与运行指南

### 环境要求
- Node.js
- Docker

### Docker 部署指南

本部分提供了如何通过 Docker 来部署 `imagetext-aligner` 服务的详细步骤。您可以选择自行构建 Docker 镜像，或者直接从 Docker Hub 拉取预构建的镜像。

#### 构建 Docker 镜像

如果您希望从源代码构建 Docker 镜像，可以使用以下命令：

```bash
docker build --no-cache -t imagetext-aligner .
```

此命令将创建一个新的 Docker 镜像，标签为 `imagetext-aligner`，并确保每次构建都不使用缓存，这有助于获取最新的依赖。

#### 运行 Docker 容器

##### 使用本地构建的镜像

运行以下命令以启动 `imagetext-aligner` 服务：

```bash
docker run --network="host" --name imagetext-aligner -dit \
  -v /local/path/images:/app/images \
  -v /local/path/texts:/app/texts \
  imagetext-aligner:latest
```

此命令将使用主机网络配置启动一个名为 `imagetext-aligner` 的容器，并将本地目录挂载到容器内的指定位置，以便容器可以访问必要的数据。

##### 使用 Docker Hub 的镜像

如果您不希望自行构建镜像，可以直接从 Docker Hub 拉取预构建的镜像并运行：

```bash
docker run --network="host" --name imagetext-aligner -dit \
  -v /local/path/images:/app/images \
  -v /local/path/texts:/app/texts \
  yym68686/imagetext-aligner:latest
```

#### 翻译服务

如果您还需要翻译服务，可以通过以下命令运行翻译服务的 Docker 容器：

```bash
docker run -dit -p 1188:1188 --name deeplx yym68686/deeplx:latest
```

此命令将启动翻译服务，并将容器的 1188 端口映射到主机的同一端口上，以便外部访问。

确保在执行这些命令之前，您已经安装了 Docker 并且 Docker 服务正在运行。如果您遇到任何问题，可以查阅 Docker 的官方文档或者寻求社区的帮助。

### 本地安装步骤
1. **克隆项目仓库**
   ```bash
   git clone https://github.com/yym68686/ImageText-Aligner.git
   cd [项目文件夹]
   ```

2. **启动翻译服务**
   使用以下命令启动Docker容器中的[翻译服务](https://github.com/yym68686/DeepLX.git)：
   ```bash
   docker run -dit -p 1188:1188 --name deeplx yym68686/deeplx:latest
   ```

3. **安装Node.js依赖**
   在项目目录下运行：
   ```bash
   npm install
   ```
4. **修改 server.js 图片文本路径**
   在项目目录下运行：
   ```bash
    const imagesDir = 'imagedirpath';
    const textsDir = 'textdirpath';
   ```

5. **启动服务器**
   ```bash
   node server.js
   ```

6. **访问网页**
   在浏览器中访问 `http://localhost:3000` 来开始使用工具。

## 许可证
本项目采用 MIT 许可证发布。详情请参阅项目中的 `LICENSE` 文件。

## 贡献
欢迎通过提交 Pull Requests 或开设 Issues 来贡献您的想法或报告问题。