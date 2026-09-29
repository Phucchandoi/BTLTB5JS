// Câu 9: Viết hoa chữ cái đầu mỗi từ
function VietHoaDauTu(chuoi) {
    var tu = chuoi.split(" ");
    for (var i = 0; i < tu.length; i++) {
        if (tu[i].length > 0) {
            tu[i] = tu[i].charAt(0).toUpperCase() + tu[i].substring(1);
        }
    }
    return tu.join(" ");
}
var s = "need not to know";
document.write("Chuỗi gốc: " + s + "<br>");
document.write("Kết quả: " + VietHoaDauTu(s));
