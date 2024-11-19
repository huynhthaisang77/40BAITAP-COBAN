// 40. Tạo một `EventListener` để xử lý sự kiện nhấp chuột vào một nút HTML.
const btn = document.getElementById('Btn')
function first1() {
    alert(`Hoàn thành công việc 1`)
}
function first2() {
    alert(`Hoàn thành công việc 2`)
}
btn.addEventListener('click', first1)
btn.addEventListener('click', first2)