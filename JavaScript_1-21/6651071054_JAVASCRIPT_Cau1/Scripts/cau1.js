// Câu 1: Diện tích tam giác (công thức Heron)
var a = 5, b = 6, c = 7;
var p = (a + b + c) / 2;
var dienTich = Math.sqrt(p * (p - a) * (p - b) * (p - c));

console.log(dienTich);                                              // Tab Console
window.alert("The area of the triangle is: " + dienTich.toFixed(2)); // Hộp thoại
document.write("The area of the triangle is: " + dienTich.toFixed(2)); // Giao diện web
