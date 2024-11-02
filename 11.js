//Viết một chương trình đảo ngược một chuỗi.
// let text = "gnas";

// for (let i = text.length - 1; i >= 0; i--) {
//   console.log(text[i]);
// }
let a = "gnas";
let b = "";
for (let i = a.length - 1; i >= 0; i--) {
  b += a[i];
}
console.log(b);