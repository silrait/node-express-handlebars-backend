const path = require('path')
const express = require('express')

const app = express()
const port = 3000

//Define paths for Express Config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')


app.set('view engine', 'hbs') //Set handlebars and hbs to work with express
app.set('views', viewsPath) //change views default directory
app.use(express.static(publicDirectoryPath)) //Setup static directory to serve

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Roboto'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Dionisio Cerqueira',
        forecast: 'Sunny day'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Weather App',
        name: 'Robotito'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'Were you expecting any help?'
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})