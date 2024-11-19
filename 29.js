// Viết một chương trình đọc dữ liệu từ một API sử dụng `fetch` và hiển thị kết quả
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((response) => response.json())
.then((response) => console.log(response)
)