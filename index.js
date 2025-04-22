'use strict'

const express = require('express')

const app = express();

const port = process.env.PORT || 9000

  

// Nối tiếp Route handler

app.get('/profile', (req, res, next) =>

{

      console.log('Kiểm tra quyền truy cập...');

      req.user = { name: "Ti"}; // Giả lập thêm dữ liệu

      next(); // Chuyển tiếp

    },

    (req, res) => { 

res.send(`Chào bạn: ${req.user.name}`);

    }

  );

 

// khoi dong web server

app.listen(port, () => {

    console.log(`server dang chay tren cong ${port}`);

});