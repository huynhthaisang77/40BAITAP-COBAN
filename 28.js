// 28. Tạo một `Promise` để mô phỏng quá trình tải dữ liệu và trả về thành công sau 2 giây.
let a =1


const promise1 = new Promise((res, rej) => {
  if (a > 0) {
    res('success!');
  } else {
    rej('error');
  }
});

promise1
  .then((value) => {
    console.log('value:', value);
  })
  .catch((error) => {
    console.log('Nano:', error);
  });
