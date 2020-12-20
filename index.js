const express = require('express');
const app = express();
const PORT = 2700
app.use(express.static('public'))
app.set('view engine', 'ejs')
const myNews=require('./news.json')

app.use(express.urlencoded({extended: true}))
app.get('/' , (req, res) =>{
    res.render('index' ,{title:'Main',myNews})
})
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))