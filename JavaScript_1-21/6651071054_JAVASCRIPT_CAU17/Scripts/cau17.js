// Câu 17: Chuyển nhị phân sang thập phân (dùng Math.pow)
function nhiPhanSangThapPhan(chuoiNhiPhan) {
    var kq = 0;
    var len = chuoiNhiPhan.length;
    for (var i = 0; i < len; i++) {
        var bit = parseInt(chuoiNhiPhan.charAt(len - 1 - i));
        kq += bit * Math.pow(2, i);
    }
    return kq;
}
var nhiPhan = "11011011";
document.write(nhiPhan + " (2) => " + nhiPhanSangThapPhan(nhiPhan) + " (10)");
