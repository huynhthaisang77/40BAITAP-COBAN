// 27. Tạo một hàm nhận vào một chuỗi và trả về chuỗi với các ký tự đã được đảo ngược.
const text = 'gnas'

function check_string(x) {
    let test = ''
    for (let i = x.length - 1 ; i >= 0; i--) {
        test += x[i]
        
    }
    return test
}
console.log(check_string(text));
