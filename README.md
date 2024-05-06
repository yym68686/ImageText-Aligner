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

### Setup Instructions
1. **Clone the Repository**
   ```bash
   git clone https://github.com/yym68686/ImageText-Aligner.git
   cd [project folder]
   ```

2. **Start the Translation Service**
   Launch the translation service in a Docker container with the following command:
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