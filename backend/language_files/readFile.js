const fs = require('fs')

const ReadFile = () => {
    fs.readFile(__dirname + '/english_language.json', (err,data)=> {
        if(err){
         console.log(err);   
        }else{
            console.log(JSON.parse(data));
        }
    })
    fs.readFile(__dirname + '/hindi_language.json', (err,data)=> {
        if(err){
         console.log(err);   
        }else{
            console.log(JSON.parse(data));
        }
    })
}

ReadFile()