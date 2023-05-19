const express = require('express');  //appel d'express
const puppeteer = require ('puppeteer');        //appel du puppeteer
const engine = require ('express-handlebars').engine;       //appel module engine de l'exress
const app = express();             //declaration de variable
app.use(express.static('public'))       //appel de dossier public
app.engine('handlebars',engine());      //
app.set('view engine' , 'handlebars');            // 
app.set('views','./views');


app.get('/', (req, res) =>
{
    res.render ('home');
});
app.get ('/search',(req, res)=>
{
    let searchQuery= req.query.q;
    let searchamazonURL = 'https://www.wiki.tn/c/' + searchQuery ;
    console.log (searchQuery);

    res.render ('search');
});

app.listen(3000);