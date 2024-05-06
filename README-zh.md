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

### 安装步骤
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