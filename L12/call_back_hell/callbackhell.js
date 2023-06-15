function downloadfile(path,downloaded){
    console.log('file started to download from path',path);
    setTimeout(()=>{
        let file = path.split('/').pop();
        downloaded(file);
    },3000);
}


function compressFile(file,compressed){
    consolelog('file started to compress');

    setTimeout(()=>{
        uploaded();
    },2000)
}

//callback hell

downloadfile('https://facebook.com/profile.jpg',)