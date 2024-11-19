// Viết một hàm đếm số lần xuất hiện của từng phần tử trong một mảng.

const text = ["vietnam", "china", "vietnam", "lao", "china"];

function count(x) {
  //     let a = []
  //     for (let i = 0; i < text.length; i++) {
  //         const check = text[i];
  //         if (a[check]) {
  //             a[check]++;
  //         } else {
  //             a[check]=1
  //         }
  //     }
  //     return a
  let a = {};
  x.forEach((i) => {
    if (a[i]) {
      a[i]++;
    } else {
      a[i] = 1;
    }
  });
  return a;
}
console.log(count(text));
