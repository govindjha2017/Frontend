const fs = require('fs');
const path = require('path');
const data ='this is temp string data';
// console.log(path);
const loc=path.join(__dirname,'data','file1.txt');
 
// console.log(__dirname);

fs.writeFile(loc,data,(err)=>{
    if(err){
        return console.log(err);
    }

    console.log('File writeen sucessfully');
})

fs.readFile(loc,{encoding:'utf-8'},(err,data)=>{
    if(err){
        console.log(err);
    }
    //console.log(data.toString());
    console.log(data);
})