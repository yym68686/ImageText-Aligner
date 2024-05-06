let currentIndex = 0;
let files;

document.getElementById('textDisplay').addEventListener('input', function() {
    const newText = this.value;
    const textName = files[currentIndex].textName;

    // 发送 PUT 请求更新文本文件
    fetch(`/update-text/${textName}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'text/plain'
        },
        body: newText
    }).then(response => {
        if (response.ok) {
            console.log('文本更新成功');
        } else {
            console.error('文本更新失败');
        }
    });
});

function fetchTranslation(text) {
    document.getElementById('translationDisplay').textContent = '翻译中...';
    fetch('http://localhost:1188/translate?token=your_access_token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: text,
            source_lang: "EN",
            target_lang: "ZH"
        })
    }).then(response => response.json()).then(data => {
        document.getElementById('translationDisplay').textContent = data.data;
    }).catch(error => {
        console.error('翻译请求失败', error);
    });
}

function displayContent(index) {
    const imageElement = document.getElementById('imageDisplay');
    const textElement = document.getElementById('textDisplay');
    const translationDisplay = document.getElementById('translationDisplay');
    const captionElement = document.getElementById('imageCaption');

    // 使用新的API路由获取图片
    fetch(`/image/${files[index].imageName}`).then(response => response.blob()).then(imageBlob => {
        const imageUrl = URL.createObjectURL(imageBlob);
        imageElement.src = imageUrl;
        captionElement.textContent = files[index].imageName;
    });

    // 使用新的API路由获取文本
    fetch(`/text/${files[index].textName}`).then(response => response.text()).then(text => {
        textElement.value = text;
        fetchTranslation(text);
    });
}

function previous() {
    if (currentIndex > 0) {
        currentIndex--;
        displayContent(currentIndex);
    }
}

function next() {
    if (currentIndex < files.length - 1) {
        currentIndex++;
        displayContent(currentIndex);
    }
}

document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowLeft':  // 左箭头键
            previous();
            break;
        case 'ArrowRight':  // 右箭头键
            next();
            break;
    }
});


// 初始化加载文件
function loadFiles() {
    fetch('/files').then(response => response.json()).then(data => {
        files = data;
        displayContent(currentIndex);
    });
}

loadFiles();