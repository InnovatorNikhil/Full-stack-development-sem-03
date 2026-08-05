//file module:fs module in node js
//crud operations : create ,read,update,delete
//create a file:writefile() and readfile()

const fs=require('fs');

//to create file 
//fs.writefile(filename,content,)
fs.writeFile('myfile.txt','hello world',(err)=>{
    if(err) throw err;
    console.log("file created succesfully");
        
});


//read a file
fs.readFile('myfile.txt','utf8',(err,data)=>{
    if(err){
        console.log(err);
    
    }

      console.log(data);
});

console.log("reading a file");

