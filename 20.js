//Tạo một hàm nhận vào một mảng và trả về mảng đã sắp xếp theo thứ tự giảm dần.

const numbers = [1,2,3,4,5,6,7,8,9]

function sort_array(arr) {
    return arr.sort((a, b) => b - a);
}
console.log(sort_array(numbers));
