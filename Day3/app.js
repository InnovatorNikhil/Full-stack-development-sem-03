async function test(){
    console.log("2:message");
    console.log("3:message");
    await console.log("4:message");
      console.log("1:message");
    
}
console.log("1:message");

test()
console.log("5:message");

//create Promiese that resolve with assignment submitted 
// and p0rint using then (),reject with submission failed

 const promise=new Promise((resolve,reject)=>{
   console.log("submitted");
   resolve("resolve");
});

promise.then((result)=>{
    console.log(sumitted);


 }).catch((error)=>{
    console.log("failed");

 })
