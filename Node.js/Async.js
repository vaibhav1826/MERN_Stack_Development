// learning the concept about Async function

async function fetchdata(){
    const result= await new Promise(resolve =>{
        setTimeout(()=>resolve("data loaded"),2000);
    })
    console.log(result);
}

fetchdata();