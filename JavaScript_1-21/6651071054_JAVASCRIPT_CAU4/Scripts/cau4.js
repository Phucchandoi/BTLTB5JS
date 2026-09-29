// Câu 4: In các số lẻ < 100 trừ 5, 7, 93
var kq = [];
for (var i = 1; i < 100; i += 2) {
    if (i === 5 || i === 7 || i === 93) continue;
    kq.push(i);
}
document.write(kq.join(", "));
