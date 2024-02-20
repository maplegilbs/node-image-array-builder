const fs = require('fs');
const sharp = require('sharp');


const dirPath = '' //Put directory of desired output here:


async function parseFileInfo(file) {
    const filePath = `${dirPath}${file}`
    const fileInfo = await sharp(filePath).metadata()
    return { 
        src: file, 
        width: fileInfo.width, 
        height: fileInfo.height,
        alt: 'Picture of racers participating in the Peavine Whitewater Race on the White River, Vermont', 
        description: 'Photo credit Kay McCabe'
    }
}

async function getInfo() {
    let fileData = [];
    fs.readdir(dirPath, async (err, files) => {
        let i = 0;
        while (i < files.length) {
            let tempInfo = await parseFileInfo(files[i])
            fileData.push(tempInfo)
            i++;
        }
        console.log(fileData)
    })

}

getInfo()