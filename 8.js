// Viết một chương trình kiểm tra xem một chuỗi có phải là chuỗi đảo ngược của chuỗi khác không.
const a = "sang";
const b = "gnas";

function checkHamDaoNguoc(x, y) {
  for (let i = 0, j = y.length - 1; i < x.length; i++, j--) {
    console.log(x, y);

    if (x[i] === y[j]) {
      console.log("chuỗi a là chuỗi đảo ngược b");
    } else {
      console.log("chuỗi a không phải chuỗi đảo ngược b");
    }
    return;
  }
}
checkHamDaoNguoc(a, b);

function checkHamDaoNguoc(x, y) {
  for (let i = 0, j = y.length - 1; i < x.length; i++, j--) {
    if (x[i] !== y[j]) {
      console.log("chuỗi a không phải chuỗi đảo ngược b");
      return;
    }
  }
  console.log("chuỗi a là chuỗi đảo ngược b");
}


const a = "Hello";
const b = "olleH";
// console.log(a[0]);

for (let i = 0, j = b.length - 1; i < a.length; i++, j--) {
  if (a[i] !== b[j]) {
    console.log("Đây không phải là chuỗi đảo ngược");
    break;
  }