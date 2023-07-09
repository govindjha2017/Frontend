const fs = require('fs');
const path = require('path');
// console.log(__dirname);
const loc=path.join(__dirname,'input1.txt');

 function getdata1(){
    return new Promise((resolve, reject) => {
        fs.readFile(loc,{encoding:'utf-8'},(err,data)=>{
            if(err){
                console.log(err);
            }
            //console.log(data.toString());
            // console.log(data);
            resolve(data);
        })
    })

 }
const loc2=path.join(__dirname,'input2.txt');
const loc3= path.join(__dirname,'output.txt');

function getdata2(){
    return new Promise((resolve, reject) => {
        fs.readFile(loc2,{encoding:'utf-8'},(err,data)=>{
            if(err){
                console.log(err);
            }
            //console.log(data.toString());
            // console.log(data);
           resolve(data);
        })
    })
}

let data1,data2;
getdata1()
    .then((data)=>{
        // console.log(data);
        data1=data.split('\r\n');
        getdata2()
            .then((data)=>{
                // console.log(data);
                data2=data.split('\r\n');

                let finaldata =[...data1 , ...data2];
                // finaldata.sort();
                finaldata.sort((a,b)=>b-a)
                console.log(finaldata);
                 finaldata = finaldata.join('\r\n')

                fs.writeFile(loc3,finaldata,(err)=>{
                    if(err){
                        return console.log(err);
                    }
                
                    console.log('File writeen sucessfully');
                })
    })
    })
    



 