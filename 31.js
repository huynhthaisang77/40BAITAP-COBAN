// Tạo một hàm lấy tất cả các khóa từ một đối tượng và in chúng ra.

const users = {
    name: 'sang',
    age: 22,
    address: 'QN'
}

function checkAllKey(keys) {
    return Object.keys(keys)
}
console.log(checkAllKey(users));
