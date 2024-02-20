const fs = require('fs')
const sharp = require('sharp')


const dirPath = '' //Put directory of desired output here

//will rename file from 'myfile.jpg to myfile-sizeOfLargestDimension.jpg'
async function renameFiles() {
    let myfiles = fs.readdirSync(dirPath)
    myfiles.sort()
    myfiles.forEach(async (file, index) => {
        let fileInfo = await sharp(`${dirPath}/${file}`).metadata()
        let maxSize = fileInfo.height > fileInfo.width ? fileInfo.height : fileInfo.width;
        fs.renameSync(`${dirPath}/${file}`, `${dirPath}/${file.replace('.jpg','')}-${maxSize}.jpg`, () => console.log('Renamed'))
    })
}

renameFiles();