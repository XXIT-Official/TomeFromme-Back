const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config/key')


// application/x-www-form-urlencoded 이렇게 된 데이터를 분석해서 가져올 수 있게 해 줌
app.use(bodyParser.urlencoded({ extended: true }))
// application/json 타입으로 된 것을 분석해서 가져올 수 있게 해 줌
app.use(bodyParser.json())

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World!'))


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))