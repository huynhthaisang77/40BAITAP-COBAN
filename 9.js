// Sử dụng phương thức `map()` để nhân đôi tất cả các phần tử trong một mảng số.
const numbers = [1, 2, 3, 4, 5, 6, 7];

function double(arr) {
   return arr.map(x => x * 2);

    
}
console.log(double(numbers));
