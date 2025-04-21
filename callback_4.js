function
xuLyMang(arr, callback) {

    for (let i = 0; i < arr.length; i++) {

        arr[i] = callback(arr[i]);

    }

    return arr;

}

 

const numbers = [1, 2, 3];

const binhPhuong = xuLyMang(numbers, x => x * x);

console.log(binhPhuong);
// Kết quả: [1, 4, 9]

 

const nhan2 = xuLyMang(numbers, x => x * 2);

console.log(nhan2);