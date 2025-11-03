//learning about how to use promise 

// const getData= new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("data received"),2000);
// })
// getData.then(msg => console.log(msg));

const myPromise = new Promise((resolve,reject)=>{
    let success = true;
    if(success){
        resolve("Process is success");
    }
    else{
        reject("Process is not success");
    }
})

myPromise.then(result=>console.log(result));
myPromise.catch(result=>console.error(error));
