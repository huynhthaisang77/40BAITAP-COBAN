// Tạo một hàm nhận vào một chuỗi và trả về chuỗi đã loại bỏ tất cả các ký tự không phải chữ cái.

const text = 'dfgbdfgdgh345345345'

function check_number(x) {
    return x.replace(/[^a-zA-Z]/g, '')
}

console.log(check_number(text));



function just_Character(a) {
    const arr = a
      .split("")
      .filter((x) => (x >= "a" && x <= "z") || (x >= "A" && x <= "Z"))
      .join("");
    return arr;
  }
  console.log(just_Character(text));