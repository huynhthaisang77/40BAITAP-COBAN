
// Sử dụng `try...catch` để xử lý lỗi trong một hàm tính toán với dữ liệu không hợp lệ.

function sum(a, b) {
    try {
        if (a >= b) {
            console.log(`a sai`);
            throw new Error('lỗi a');
        }
        console.log(`a đúng`);
    } catch (error) {
        console.log(error);
    }
}
console.log(sum(0, 5));


function sum(a, b) {
    try {
        if (a < b) {
            console.log(`a đúng`);
        } else {
            console.log(`a sai`);
            throw new Error('lỗi a');
        }
    } catch (error) {
        console.log(error);
    }
}
console.log(sum(0, 5));



function sum(a, b) {
    if (a < b) {
        console.log(`a đúng`);
    } else {
        console.log(`a sai`);
        throw new Error('lỗi a');
    }
}

try {
    console.log(sum(0, 5));
} catch (error) {
    console.log(error);
}
