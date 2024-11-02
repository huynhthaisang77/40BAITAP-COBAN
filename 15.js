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

const document = "isnvijnvdufvfid";

function check_string() {
  let a = {};
  for (let i = 0; i < document.length; i++) {
    const check = document[i];
    if (a[check]) {
      a[check]++;
    } else {
      a[check] = 1;
    }
  }
  return a
}
console.log(check_string('a'));
