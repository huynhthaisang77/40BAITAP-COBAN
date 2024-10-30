//Tạo một hàm nhận vào một chuỗi và trả về số lần xuất hiện của một ký tự cụ thể trong chuỗi đó.
// let document = 'adskfjgaaskjadfghksagdajfjhl'


// function checkstring(document, repeat) {
//     let count = 0;
//     for (let i = 0; i < document.length; i++) {
//         if (document[i] === repeat) {
//             count++
//         }
//     }
//     return count
// }


// console.log(checkstring(document,'a'));


const a = "kjdfhbkjasdhfkljsadhf";
function check_String(b) {
  const c = {};
  for (let i = 0; i < b.length; i++) {
    const check = b[i];
    if (c[check]) {
      c[check]++;
    } else {
      c[check] = 1;
    }
  }
  return c;
}
console.log(check_String(a));