// Câu 13: Liệt kê các số nguyên tố nhỏ hơn n
function laNguyenTo(k) {
    if (k < 2) return false;
    for (var i = 2; i * i <= k; i++) {
        if (k % i === 0) return false;
    }
    return true;
}
function lietKeNguyenTo(n) {
    var ds = [];
    for (var i = 2; i < n; i++) {
        if (laNguyenTo(i)) ds.push(i);
    }
    return ds;
}
var n = 50;
document.write("Các số nguyên tố nhỏ hơn " + n + ": " + lietKeNguyenTo(n).join(", "));
