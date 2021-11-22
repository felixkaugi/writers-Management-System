var express = require('express')
var app = express()
app.use(express.static('public'))
//set ejs as the view engine
app.set('view engine', 'ejs')
app.listen(3032, ()=>{
    console.log('server lerning at p')
    app.get('/home', (req,res) =>{
        res.render('pages/index')
    })
    app.get('/about', (req,res)=>{
        res.render('pages/about')
    })
   app.get('/services', (req,res)=>{
       res.render('pages/services')
   })
   app.get('/samples', (req,res)=>{
       res.render('pages/samples')
   })
   app.get('/tools', (req,res)=>{
       res.render('pages/tools')
   })
})