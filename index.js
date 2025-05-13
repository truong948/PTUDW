'use strict'

const express = require('express');
const expressHandlebars = require('express-handlebars');

const app = express();
const port = process.env.PORT || 9000;
// cấu hình public static folder
app.use(express.static(__dirname+'/Public'));

// Cấu hình handlebars
app.engine('hbs', expressHandlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    extname: 'hbs',
    defaultLayout: 'main'
}));
app.set('view engine', 'hbs');

//Cho phép truy cập thư mục Public (ảnh, css, js)
app.use(express.static('Public'));

// Route index
// routes va render trang index

app.get('/', (req, res) => {

    res.render('index');
  
// se lay index.hbs do vao {{{ body }}} trong main.hbs

});
app.get('/:page', (req, res) =>{

    res.render(req.params.page);

});
// Khởi động server
app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});
