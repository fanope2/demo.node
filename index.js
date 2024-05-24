const express = require('express');
const app = express();
const morgan = require('morgan')
const path = require('path')
const PORT = 3000;
const ip = 'localhost'
app.use(morgan('dev'))
app.use(express.static('public/'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/historia', (req, res) => {
    res.sendFile(path.join(__dirname, './public/html/historia.html'))
})
app.listen(PORT, () => {
    console.log(`Server en http://${ip}:${PORT}`)
})