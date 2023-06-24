console.log("kya");

function downloadFile(path){
    return new Promise((resolve,reject)=>{
        console.log('file start to download from path:',path);
        setTimeout(()=>{
            let file=path.split('/').pop();
            //let file
            if(!file){
                //throw an error('cannot read file');
                reject('cannot read file');
            }
            resolve(file);
        },3000);
    })
}
 console.log("haal");
function compressFile(file){
    return new Promise((resolve,reject)=>{
        console.log('file start to compress');

        setTimeout(()=>{
            let compressedFile = file.split('.')[0] + '.zip';
            resolve(compressedFile);
        },2000);
    })
}
console.log("hai");
function uploadFile(compressedFile){
    return new Promise((resolve,reject)=>{
        console.log(`file started to upload at http://facrbookCloud.com/${compressedFile}`);
        setTimeout(()=>{
            resolve();
        },3000);
    })
}
console.log("bhai");
downloadFile('https://facebook.com/profile.jpg')
    .then(compressFile)
    .then(uploadFile)
    .then(()=>{
        console.log('all done')
    })
    .catch((err)=>{
        console.log(err);
    })

console.log("sahab");


// downloadFile('https://facebook.com/profile.jpg')
//     .then((file)=>{
//         console.log("file download suceesfully as",file);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })



