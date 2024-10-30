// Viết một hàm nhận vào một số nguyên dương và tính tổng các số từ 1 đến số đó.

function positiveinteger(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
let numbers = [1, 2, 3, 4, 5];
console.log(positiveinteger(numbers));
