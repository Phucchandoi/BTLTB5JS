// Câu 20: Đối tượng Date - ngày giờ hiện tại
var now = new Date();
var ngay = now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear();
var gio = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
window.alert("Ngày: " + ngay + " Giờ: " + gio);
