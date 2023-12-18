const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '..', '../data.json', 'data.json');

function readData() {
    try {
        const rawData = fs.readFileSync(dataFilePath);
        return JSON.parse(rawData);
    } catch (error) {
        // Dosya yoksa veya başka bir hata oluşursa boş bir dizi döndür
        return [];
    }
}

function writeData(data) {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}

module.exports = {
    readData,
    writeData,
};
