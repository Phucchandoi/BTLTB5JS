// Câu 11: Hàm đảo ngược số nguyên
function daoNguoc(n) {
    var dau = n < 0 ? -1 : 1;
    n = Math.abs(n);
    var kq = 0;
    while (n > 0) {
        kq = kq * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    return dau * kq;
}
document.write("654321 => " + daoNguoc(654321));
