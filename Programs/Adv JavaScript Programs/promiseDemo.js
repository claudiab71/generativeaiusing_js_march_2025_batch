function promiseDemoUsingES5() {
    // promise provided... server application to provide promise
    let promise = new Promise((resolve,reject)=> {
        //resolve("success");
        reject("failed");
    });

    // client application to consume promise
 
 // if promise resolve then get called if promise reject then catch called
 // handling promise using ES5 style 
promise.then(result=>console.log("Then called "+result)).catch(error=>console.log("catch called "+error));     // asynchronous operation
console.log("Other work1");  // synchronous operation
console.log("Other work2");  // synchronous operation
console.log("Other work3");  // synchronous operation
console.log("Other work4");  // synchronous operation

}
async function promiseDemoUsingES6() {
    // promise provided... server application to provide promise
    let promise = new Promise((resolve,reject)=> {
        //resolve("success");
        reject("failed");
    });
    // client application to consume promise
 
 // if promise resolve then get called if promise reject then catch called
 // handling promise using ES6 style 
try{
let result  = await promise;        // synchronous operation then is replaced by await
console.log("Then called "+result);
}catch(error){
    console.log(error)
}



console.log("Other work1");  // synchronous operation
console.log("Other work2");  // synchronous operation
console.log("Other work3");  // synchronous operation
console.log("Other work4");  // synchronous operation

}