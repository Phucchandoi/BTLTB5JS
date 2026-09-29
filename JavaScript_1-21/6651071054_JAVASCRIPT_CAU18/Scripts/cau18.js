// Câu 18: Giai thừa (áp dụng Math)
function giaiThua(n) {
    n = Math.floor(Math.abs(n));   // dùng Math để đảm bảo n là số nguyên dương
    var kq = 1;
    for (var i = 2; i <= n; i++) {
        kq *= i;
    }
    return kq;
}
var n = 10;
document.write(n + "! = " + giaiThua(n));
