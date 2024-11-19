

// Sử dụng `reduce()` để tính tổng các phần tử trong một mảng.

const numbers = [1,2,3,4,5,56,7,7,8,9]

function sum(total) {
    return total.reduce((total, x)=>
        total + x
    )
}

console.log(sum(numbers));
