//phần tử trong một mảng số.
// 10. Sử dụng `filter()` để lọc ra các số lẻ từ mảng `[1, 2, 3, 4, 5, 6, 7]`.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function odd_number_filter(arr) {
    return arr.filter((x) => x % 2 !== 0);
}
console.log(odd_number_filter(numbers));

