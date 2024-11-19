// 19. Tạo một hàm trả về tổng của tất cả các số nguyên trong một mảng bất kỳ.

const numbers = [1,2,3,4,5,6,7,8,9]

function sum(x) {
    let sum = 0
    x.forEach(element => {
        sum += element
        console.log(sum);
        
    });
}
sum(numbers)

const sum2 = numbers.reduce((a,c)=>a+c, 0);
console.log("heh",sum2)