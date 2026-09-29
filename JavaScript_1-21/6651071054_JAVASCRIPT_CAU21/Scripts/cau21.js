// Câu 21: Xác định thứ trong tuần của một ngày
var thu = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
var ngay = 12, thang = 1, nam = 2015;
var d = new Date(nam, thang - 1, ngay);   // tháng trong Date bắt đầu từ 0
document.write("Ngày " + ngay + "/" + thang + "/" + nam + " là " + thu[d.getDay()]);
