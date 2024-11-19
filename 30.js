// Sử dụng `async`/`await` để gọi một API và xử lý dữ liệu trả về.

async function fetchApi() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const use = await response.json();
        console.log(use);
        
        
    } catch (error) {
        console.log(error);
        
    }
}
fetchApi()