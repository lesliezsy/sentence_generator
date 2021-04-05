const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateSentence = require('./generate_sentence')
const Handlebars = require("handlebars")
const app = express()
const port = 3000

// 在應用程式裡新增一個附檔名為hbs的樣板引擎
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}))
// 設定view engine將使用hbs為副檔名的樣板引擎
app.set('view engine', 'hbs')

// 設定 body-parser，解析從html來的request內容
app.use(bodyParser.urlencoded({
    extended: true
}))

// 確認被選中的對象是誰，回傳checked
Handlebars.registerHelper('checked', function (value, test) {
    if (value == undefined) return ''
    return value === test ? 'checked' : ''
});

// 設計首頁路由
app.get('/', (req, res) => {
    res.render('index')
})

// 使用 app.post('/') 方法，處理傳送到路由'/'的POST請求
app.post('/', (req, res) => {
    const options = req.body;
    const sentence = generateSentence(options)
    res.render('index', {
        sentence,
        options
    })
})

// starts the express server and listening for connections.
app.listen(port, () => {
    console.log(`Express app listening on port ${port}.`)
})