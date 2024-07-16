const express = require('express')
const app = express()
const port = 3000
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/home', (req, res) => {
    //res.send('Hello home!')
    res.sendFile(__dirname + '/views/home.html');
})
app.get('/about', (req, res) => {
    //res.send('Hello about!')
    res.sendFile(__dirname + '/views/about.html');
})
app.get('/contact', (req, res) => {
    //res.send('Hello cake !')
    res.sendFile(__dirname + '/views/contact.html');
})
app.get('/cake', (req, res) => {
    res.send('Hello cake !')
})
app.get('/cake/morbi', (req, res) => {
    res.send('Hello cake from morbi !')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})