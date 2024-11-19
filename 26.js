// 26. Viết một hàm nhận vào một mảng số và trả về phần tử nhỏ nhất trong mảng.
const numbers = [1,2,3,4,5,6,7,8,9,10]
// function checkelement(x) {

    
//     return x.reduce((x, a)=>x < a ? x : a)
// }
// console.log(checkelement(numbers));

function check(p) {

    
    return p.filter((p)=>p.min)
}
console.log(check(numbers));

function getMinMax(arr) {
    let maximum = Math.max(...arr);
    let minimum = Math.min(...arr);
    let result = [maximum, minimum];
    return result;
};

console.log(getMinMax([10, 3, 8, 1, 33]));
