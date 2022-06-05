//require modules
const express = require('express')

const app = express();
const PORT = 8000;

const lotrCharacters = {
    'frodo baggins':{
        'race': 'Hobbit'
    },
    'gandalf':{
        'race': 'Maia'
    },
    'legolas':{
        'race': 'Elf'
    },
    'unknown':{
        'race':'unknown'
    }
}

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
});

app.get('/api/:name',(req,res)=>{
    const name = req.params.name.toLowerCase()
    if (lotrCharacters[name]){
        res.json(lotrCharacters[name])
    } else {
        res.json(lotrCharacters['unknown'])
    }
})

app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`)
}); 