function
getUser(userId, callback) {

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

        .then(response => response.json())

        .then(data => callback(null, data)) // Thành công, gọi callback với dữ liệu

        .catch(error => callback(error, null)); // Lỗi, gọi callback với lỗi

}

 

getUser(1, function(error, user) {

    if (error) {

        console.error("Lỗi:", error);

    }
else {

        console.log("Tên người dùng:", user.name);

    }

});