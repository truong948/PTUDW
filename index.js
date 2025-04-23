'use strict'

const express = require('express')

const app = express();

const port = process.env.PORT || 9000

//xử lý khi người dùng gửi

//request kiểu GET tới thư mục gốc (/)

app.get("/", (req,res) =>
{

    //dùng phương thức query của req để lấy thông tin

    //của GET request

    const product = req.query.name;

    const size = req.query.size;

    //dùng hàm send() của đối tượng res

    //để gửi dữ liệu về client

    res.send(`Bạn muốn mua ${product} cỡ ${size}`);

});

//khoi dong web server

app.listen(port,() => {

    console.log(`server dang chay tren cong ${port}`);

});