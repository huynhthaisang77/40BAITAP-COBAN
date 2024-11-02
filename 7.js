//7. Tạo một hàm nhận 2 số và trả về số lớn hơn.
function number(a, b) {
  return a > b ? a : b;
}
const a = number(20, 10);
const b = number(10, 20);
const c = number(20, 10);
console.log(a, b, c);

function check_Largest_Number(a, b) {
  if (a > b) {
    console.log("Số lớn nhất là số: " + a);
  } else {
    console.log("Số lớn nhất là số: " + b);
  }
}
check_Largest_Number(9, 2);