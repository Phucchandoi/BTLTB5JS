// Câu 19: Máy tính lãi suất kép hằng năm
var goc = 10000000;   // số tiền gốc
var laiSuat = 7;      // lãi suất %/năm
var soNam = 5;        // số năm

var tong = goc * Math.pow(1 + laiSuat / 100, soNam);
document.write("Tiền gốc: " + goc.toLocaleString("vi-VN") + " đồng<br>");
document.write("Lãi suất: " + laiSuat + "%/năm, số năm: " + soNam + "<br>");
document.write("Tổng tiền sau " + soNam + " năm: " + Math.round(tong).toLocaleString("vi-VN") + " đồng");
