// Sử dụng phương thức `every()` để kiểm tra xem tất cả các phần tử trong mảng có phải là số dương không.
const numbers = [1, -1, 2, 3, 4];

function check(keys) {
  return keys.every((x) => x >= 0);
}
console.log(check(numbers));
