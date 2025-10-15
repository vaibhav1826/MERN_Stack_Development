function greet(name,callback){
    console.log("Hello world "+name);
    callback(); // callback function
}


// function SayGoodbye(){
//     console.log("Goodbye");
// }

// greet("John",SayGoodbye);

// using anonymous function as callback
greet("John",()=>{
    console.log("Goodbye");
});