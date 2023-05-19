const express = require('express');  
const puppeteer = require ('puppeteer');        
const engine = require ('express-handlebars').engine;       
const app = express();             
app.use(express.static('public'))     
app.engine('handlebars',engine());     
app.set('view engine' , 'handlebars');            
app.set('views','./views');


app.get('/', (req, res) =>
{
    res.render ('home');
});
app.get ('/search',(req, res)=>
{
    let searchQuery= req.query.q;
    let searwikiURL = 'https://www.wiki.tn/c/' + searchQuery ;
    console.log (searchQuery);

    res.render ('search');
});

app.listen(3000);
