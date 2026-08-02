//Event
//event loop sequence 

const f1=()=>{

};

const f2=()=>{
console.log(f2);
};


const f3=function main(){
    console.log("hello");

    setTimeout(f1,1000);
    setTimeout(f2,2000);
    new Promise((resolve,reject)=>{
        resolve("i m promise");

    }).then((result)=>{
       console.log(result);
    })


    
}


f2();
main();





