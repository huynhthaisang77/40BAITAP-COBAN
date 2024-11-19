//13. Tạo một hàm nhận vào một mảng số và trả về mảng mới chứa các số lớn hơn 5.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function number(a) {
  return a.filter((x) => x > 5);
}
console.log(number(numbers));
