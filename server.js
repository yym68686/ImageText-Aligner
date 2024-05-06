const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

const imagesDir = '/Users/yanyuming/Desktop/yym_9169-10227/JPEGImages_RGB';
const textsDir = '/Users/yanyuming/Desktop/yym_9169-10227/description';

app.use(express.static('public'));
app.use(express.text());


// API to get image and text file names
app.get('/files', (req, res) => {
    const images = fs.readdirSync(imagesDir).filter(file => file.endsWith('.jpg'));
    const texts = fs.readdirSync(textsDir).filter(file => file.endsWith('.txt'));

    // Assuming filenames without extensions are the same for images and texts
    const files = images.map(image => {
        const baseName = path.basename(image, '.jpg');
        return {
            imageName: image,
            textName: `${baseName}.txt`
        };
    });

    res.json(files);
});

app.put('/update-text/:textName', (req, res) => {
    const textName = req.params.textName;
    const newText = req.body;
    const filePath = path.join(textsDir, textName);

    fs.writeFile(filePath, newText, (err) => {
        if (err) {
            console.error('文件写入失败:', err);
            res.status(500).send('文件写入失败');
        } else {
            res.send('文件更新成功');
        }
    });
});

// API to get an image
app.get('/image/:imageName', (req, res) => {
    const filePath = path.join(imagesDir, req.params.imageName);
    res.sendFile(filePath);
});

// API to get a text file
app.get('/text/:textName', (req, res) => {
    const filePath = path.join(textsDir, req.params.textName);
    res.sendFile(filePath);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});