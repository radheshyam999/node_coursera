const express = require('express')
const app = express();

app.get('/', (req, res) => {
    //write("hey ladies and gentelman  where are you from?")
    
    res.send('Hello World! </br> How are you doing? </br>  Where are belong from?')
});
//this comment added on remote 
app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
    console.log('Hello this is console log!')
});
