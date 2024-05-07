# Image and Text Alignment Editing Tool

[中文](./README-zh.md)

## Project Overview
This project is a tool designed specifically for deep learning data cleaning, facilitating the side-by-side display of paired images and text files on a web interface. It is primarily used for proofreading and editing text to ensure that the text content aligns accurately with the corresponding image content. Additionally, to accelerate the text-image alignment process, the project integrates a translation feature that automatically translates English text into Chinese.

## Key Features
- **Side-by-side Display of Images and Text**: Displays paired images and text side by side on a web page, allowing for visual comparison and editing.
- **Real-time Text Editing and Synchronization**: Users can edit text directly on the web page, and the edited content is immediately synchronized and updated on the local files for persistence.
- **Automatic Translation**: Integrated translation service automatically translates text from English to Chinese, aiding users in quickly adjusting and proofreading content.
- **Navigation Controls**: Users can navigate through different images and texts using buttons on the webpage or keyboard shortcuts.

## Technology Stack
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Translation Service**: Custom translation service running in a Docker container

## Installation and Running Guide

### Prerequisites
- Node.js
- Docker

### Docker Deployment Guide

This section provides detailed steps on how to deploy the imagetext-aligner service using Docker. You can choose to build the Docker image yourself or pull a pre-built image directly from Docker Hub.

### Building Docker Image

If you wish to build the Docker image from source code, you can use the following command:

```bash
docker build --no-cache -t imagetext-aligner .
```

This command will create a new Docker image labeled as imagetext-aligner and ensures that no cache is used during the build, which helps in fetching the latest dependencies.

### Running Docker Container

#### Using Locally Built Image

Run the following command to start the imagetext-aligner service:

```bash
docker run --network="host" --name imagetext-aligner -dit \
  -v /local/path/images:/app/images \
  -v /local/path/texts:/app/texts \
  imagetext-aligner:latest
```

This command will start a container named imagetext-aligner using the host's network settings and mounts local directories to specified locations within the container, allowing the container to access necessary data.

#### Using Image from Docker Hub

If you prefer not to build the image yourself, you can directly pull a pre-built image from Docker Hub and run it:

```bash
docker run --network="host" --name imagetext-aligner -dit \
  -v /local/path/images:/app/images \
  -v /local/path/texts:/app/texts \
  yym68686/imagetext-aligner:latest
```

### Translation Service

If you also need a translation service, you can run a Docker container for the translation service using the following command:

```bash
docker run -dit -p 1188:1188 --name deeplx yym68686/deeplx:latest
```

This command will start the translation service and map the container's 1188 port to the same port on the host, allowing external access.

Make sure you have Docker installed and the Docker service running before executing these commands. If you encounter any issues, refer to the official Docker documentation or seek help from the community.

### Local Setup Instructions
1. **Clone the Repository**
   ```bash
   git clone https://github.com/yym68686/ImageText-Aligner.git
   cd [project folder]
   ```

2. **Start the Translation Service**
   Launch the [translation service](https://github.com/yym68686/DeepLX.git) in a Docker container with the following command:
   ```bash
   docker run -dit -p 1188:1188 --name deeplx yym68686/deeplx:latest
   ```

3. **Install Node.js Dependencies**
   Run the following command in the project directory:
   ```bash
   npm install
   ```
4. **Modify the image and text paths in server.js**
   Run the following in the project directory:
   ```bash
    const imagesDir = 'imagedirpath';
    const textsDir = 'textdirpath';
   ```

5. **Start the Server**
   ```bash
   node server.js
   ```

6. **Access the Web Page**
   Open a browser and navigate to `http://localhost:3000` to start using the tool.

## License
This project is released under the MIT License. For more details, please refer to the `LICENSE` file in the project.

## Contributions
Contributions are welcome! Please feel free to submit Pull Requests or open Issues to suggest improvements or report problems.