// function result (kalMilneAunga){
//     return new Promise((resolve, reject) => {
//         if(kalMilneAunga){
//             resolve();
//         }
//         else{
//             reject();
//         }
//     })   
// }

// result(true)
//     .then(()=>{
//         console.log("han! milne aayega!")
//     })
//     .catch((err)=>{
//         console.log('nhi milne aaya',err);
//     })

function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            let data = [{id:1,name:'laptop',price:200},{id:2,name:'mobile',price:100},{id:3,name:'watch',price:50}];
            resolve(data);
        },3000);
    })
}
fetchData()
    .then((data)=>{
        let finalData = data.filter((item)=>{
            return item.price >=100;
        })
        return finalData;
    })
    .then((finalData)=>{
        console.log(finalData);
    })