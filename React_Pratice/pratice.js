// praticising array methods in javascript


//------------- concat() function in an array---------------------- 

// let obj1 = [{name:"vaibhav",age:24},{name:"rahul",age:23}];
// let obj2 = [{name:"sachin",age:25},{name:"rohit",age:26}];
// obj3 =obj1.concat(obj2);
// console.log(obj3); 

//------------------- every() function in an array------------------------
//  let arr=[2,4,6,8,10];
//  let result=arr.every((value)=>
//     value%2==0 )
//  console.log(result); // true 

// let arr=["ayush","akshit","atmaram"];
// let result=arr.every((value)=>value.toLowerCase()[0]=='a')
// console.log(result); // true

//------------------ filter() function in an array------------------------
// let arr=[1,2,3,4,5,6,7,8,9,10];
// let result=arr.filter((value)=>value%2==0);
// console.log(result); // [ 2, 4, 6, 8, 10 ]

// //------------------ find() function in an array------------------------
// let arr=[1,2,3,4,5,6,7,8,9,10];
// let result=arr.find((value)=>value>5);
// console.log(result); // 6 -- just gives the first value which satisfies the condition

//------------------array.from() function in an array------------------------
// let str="vaibhav";
// let arr=Array.from(str);
// console.log(arr); // [ 'v', 'a', 'i', 'b', 'h', 'a', 'v' ]

//------------------indexof() function in an array------------------------
// let arr=[1,2,3,4,5,6,7,8,9,10];
// let result=arr.indexOf(5);
// console.log(result); // 4 -- gives the index of the element

// let arr=[1,2,3,4,5,6,7,8,9,10,1];
// let result=arr.indexOf(1,5);
// console.log(result); // 10 -- gives the index of the element find after the 5th index

//------------------map() function in an array------------------------
// let arr=[1,2,3,4,5];
// let result=arr.map((value)=>value*2);
// console.log(result); // [ 2, 4, 6, 8, 10 ]

// let arr=["vaibhav","rahul","sachin"];
// let result=arr.map((value)=>value.toUpperCase());
// console.log(result); // [ 'VAIBHAV', 'RAHUL', 'SACHIN' ]


//------------------reduce() function in an array------------------------

// let arr=[1,2,3,4,5]; 
// let result=arr.reduce((a,b)=> a+b);
// console.log(result); // 15 

// ---------------destructuring in array------------------
// destructuring is a way to unpack value from an array or object
// and assign them to a variables
// let arr=[2,4,6,8,10];
// let [a,b,c,d,e]=arr;
// console.log(a);

// let obj ={name:"vaibhav",age:24,city:"pune"};
// let {name,age,city}=obj;
// console.log(name); // vaibhav

//------------------spread operator in array------------------------
// it is used to expand an array or object into individual elements

// let arr1=[1,2,3];
// let arr2=[4,5,6];
// let arr3=[...arr1,...arr2];
// console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]

//---------------------rest operator in array------------------------
// it is used to collect multiple elements and condense them into a single array

// function sum(...args){
//     return args.reduce((a,b)=>a+b);
// }
// console.log(sum(1,2,3,4,5)); // 15