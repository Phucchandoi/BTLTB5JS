// Câu 10: Tính n + n/2 + n/4 + n/8 + ... (chia lấy phần nguyên)
var n = parseInt(prompt("Nhập số nguyên dương n:", "25"));
if (isNaN(n) || n <= 0) {
    alert("Giá trị nhập không hợp lệ!");
} else {
    var tong = 0;
    var t = n;
    while (t > 0) {
        tong += t;
        t = Math.floor(t / 2);
    }
    alert("Tổng = " + tong);
}
