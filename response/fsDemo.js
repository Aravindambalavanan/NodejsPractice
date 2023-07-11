const fs=require('fs');
const path=require('path');


//Create a folder inside current directory
fs.mkdir(path.join(__dirname,'/test'),{},err=>{
    if(err) throw err;
    console.log("folder successfully created");
})

//write file 
fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello World',err=>{
    if(err) throw err;
    console.log("File created successfully");
})

fs.writeFile(path.join(__dirname,'./test','hello.txt'),'I love React',err=>{
    if(err) throw err;
    console.log('write done...')
    //file write and append at same time while passing appendFile as callback
    fs.appendFile(path.join(__dirname,'/test','hello.txt'),'I love Nodejs',err=>{
        if(err) throw err;
        console.log('append done...') 
    })
})

//readFile
fs.readFile(path.join(__dirname,'./test','hello.txt'),'utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);
})

//rename file
fs.rename(path.join(__dirname,'./test','hello.txt'),path.join(__dirname,'./test','Hello.txt'),err=>{
    if(err) throw err;
    console.log('file rename done..')
})