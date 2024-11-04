// 17. Tạo một hàm kiểm tra xem một mảng có chứa một giá trị nhất định hay không (sử dụng

const numbers = [1,1,2,2,3,3,3,4,4,4,5,6,7,8,8,9,9,9,10,10]

function check_array(x, i) {
    return x.includes(i)
}

console.log(check_array(numbers, 1));
