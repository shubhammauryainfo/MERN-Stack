async nature of js
console.log("1");
 setTimeout(()=>{
    console.log("hiii");
} , 5000); 
console.log("3")

CALL BACK
function sum(a,b){
    console.log(a+b);
   
}
function cal(a,b,sumCallback){
    sumCallback(a,b);
}
cal(5,22,sum);

///promises 
// const getPromise = () =>{
//     return new Promise((resolve,reject)=>{
//     console.log(" I am promise");
//         resolve("success")
// });
// };
// let promise = getPromise();
// promise.then((res)=>{
//     console.log("promisesfulfilled", res);
//   });



// promise.catch((err)=>{
//     console.log("rejected", err);
//   });


function asyncfunction9(){

}