const express = require ('express');
const path = require ('path');

const app = express();
const publicPaht= path.resolve(__dirname, './public') ;
app.use(express.static(publicPaht));
//const port = process.env.PORT || 3000;
const port = 3001
app.listen(port, (error) => {
    if(error) {
        return console.log(error)
    }
    console.log('server UUUUP')
});
app.use(express.static('public')); // Carpeta publica 'public'


app.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname, './views/index.html'))
});

app.get('/english', function(req,res){
    res.sendFile(path.resolve(__dirname, './views/english.html'))
})

