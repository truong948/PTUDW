'use strict'

const express = require('express')

const app = express();

const port = process.env.PORT || 9000

 

// gọi module events

const events = require('events');

// tạo ra một EventEmitter

const eventEmitter = new events.EventEmitter();

// đăng ký tên sự kiện, gắn với hàm lắng nghe và

// xử lý sự kiện tương ứng

eventEmitter.on('vaoLop', (xuLyVaoLop) => {

    console.log(xuLyVaoLop);

});

// phát ra sự kiện, kèm theo thông điệp

setTimeout(()=> {

    eventEmitter.emit('vaoLop','Đã đến giờ học!!!!!!!')

}, 5000);

 

// khoi dong web server

app.listen(port, () => {

    console.log(`server dang chay tren cong ${port}`);

});