function
chanLuong(){

    console.log("Bắt đầu tác vụ cần nhiều thời gian xử lý");

    let batDau
= Date.now();

    while(Date.now()
- batDau < 5000){

    }

    console.log("Tác vụ chạy 5 giây hoàn tất")

}

 

console.log("Trước khi chạy tác vụ");

chanLuong()

console.log("Sau khi chạy tác vụ");