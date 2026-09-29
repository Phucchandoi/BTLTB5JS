// Câu 8: Cách đọc số nguyên có 2 chữ số
var n = parseInt(prompt("Nhập số nguyên có 2 chữ số (10 - 99):"));
var chu = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];

if (isNaN(n) || n < 10 || n > 99) {
    alert("Vui lòng nhập số nguyên có 2 chữ số!");
} else {
    var chuc = Math.floor(n / 10);
    var donvi = n % 10;
    var kq;
    if (chuc === 1) {
        kq = "mười";
        if (donvi === 5) kq += " lăm";
        else if (donvi !== 0) kq += " " + chu[donvi];
    } else {
        kq = chu[chuc] + " mươi";
        if (donvi === 1) kq += " mốt";
        else if (donvi === 4) kq += " tư";
        else if (donvi === 5) kq += " lăm";
        else if (donvi !== 0) kq += " " + chu[donvi];
    }
    alert(n + " đọc là: " + kq);
}
