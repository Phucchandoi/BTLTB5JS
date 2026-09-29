// Câu 16: Object HinhTru
var HinhTru = {
    radius: 10,
    height: 15,
    theTich: function () {
        return Math.PI * this.radius * this.radius * this.height;
    },
    dienTichToanPhan: function () {
        return 2 * Math.PI * this.radius * (this.radius + this.height);
    }
};

// a) Thể tích
document.write("a) Thể tích hình trụ: " + HinhTru.theTich().toFixed(2) + "<br>");

// b) Cập nhật height = 30, tính diện tích toàn phần
HinhTru.height = 30;
document.write("b) Diện tích toàn phần (height = 30): " + HinhTru.dienTichToanPhan().toFixed(2));
