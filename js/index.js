// Bài tập 1 
/**
 * input:
 *  Tạo các input và button để người dùng nhập dữ liệu và xuất dữ liệu khi click vào nuts button 
 * 
 * các bước sử lý :
 * tạo các hàm để lấy giá trị từ các input 
 * tạo hàm lấy điểm khu vực mà điểm ưu tiên nếu không nhâpj gì thì auto = 0 
 * tạo hào tính điểm rớt nếu có 1 trong 3 môn điểm 0 thì rớt ngay lập tức và trả về "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
 * tạo biến rớt thành  diemKhongDau = diemRot(diemThuNhat,diemThuHai,diemThuBa);    
 * và tổng điểm của người nhập diemTong = (diemThuNhat + diemThuHai + diemThuBa + diemUuTien + diemKhuVuc);
 * if điểm người dùng bằng với điểm rớt sẽ xuất ra màn hình "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
 * else if (diemXetTuyen < diemTong) thì xuất ra màn hình Bạn đã đậu. Tổng điểm: ${diemTong}`;
 * nếu không thuộc 2 trường hợp trên thì sẽ về truòng hợp còn lại là rớt do điểm thi thấp hơn điểm xét tuyển nên xuất ra màn hình  Bạn đã rớt. Tổng điểm: ${diemTong}`;
 * 
 * 
 * output: xuất ra màn hinhg kết quả điểm của người dùng và thông báo kết quả rớt hay đậu
 */

function diem1 (){
    return document.querySelector('.monThuNhat').value *1;
}
function diem2 (){
    return document.querySelector(".monThuHai").value *1;
}
function diem3 (){
    return document.querySelector(".monThuBa").value *1;
}
function diemChuan (){
    return document.querySelector(".diemChuan").value;
}
function diemKV (diemKV = 0){
    let traKetQua = document.querySelector("#khuVuc").value *1;
    if(traKetQua){
        let giaTriTraVe = (traKetQua.giaTriTraVe)
        return isNaN(giaTriTraVe) ? 0 : giaTriTraVe;
    }
    return 0;

}
function diemUT (diemUT = 0){
    let traKetQua = document.querySelector("#doiTuong").value *1;
    if(traKetQua){
        let giaTriTraVe = (traKetQua.giaTriTraVe)
        return isNaN(giaTriTraVe) ? 0 : giaTriTraVe;
    }
    return 0;
}
function diemRot (diem1,diem2,diem3){
    if (diem1 == 0 || diem2 == 0 || diem3 == 0){
    return diemRot = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
    }
}

 document.querySelector("#baiTap1").onclick = function () {
    let diemThuNhat = diem1();
    let diemThuHai = diem2 ();
    let diemThuBa = diem3 ();
    let diemXetTuyen = diemChuan();
    let diemKhuVuc = diemKV();
    let diemUuTien = diemUT();
    let diemTong = (diemThuNhat + diemThuHai + diemThuBa + diemUuTien + diemKhuVuc);
    let diemKhongDau = diemRot(diemThuNhat,diemThuHai,diemThuBa);    
    if(diemKhongDau){
        document.querySelector(".bTap1").innerHTML = diemKhongDau;
    } else if (diemXetTuyen < diemTong){
        document.querySelector(".bTap1").innerHTML = `Bạn đã đậu. Tổng điểm: ${diemTong}`;
    } else {
        document.querySelector(".bTap1").innerHTML = `Bạn đã rớt. Tổng điểm: ${diemTong}`;
    }
 }



 // baitap2

 /**
  * input Tạo các input và button để người dùng nhập dữ liệu và xuất dữ liệu khi click vào nút button 
  * 
  * tạo hàm lấy giá trị số điện của người dùng khi nhập vào 
  * tạo hàm tính số tiền điện mà khách hàng tiêu thụ :(
  * và tính tiền theo quy tắc sau : 
  * 50kw đầu : 500d/kw
  * 50kw kế : 650d/kw
  * 100kw kế : 850d/kw
  * 150kw kế : 1100d/kw
  * còn lại : 1300d/kw
  * )
  * output xuất ra họ tên người dùng và số tiền cần phải trả 
  */
function soDienTieuThu () {
    return document.querySelector(".soKw").value;
}
function soTien (soDienTieuThu) {
    if (soDienTieuThu > 0 && soDienTieuThu <=50){
         let tongTienDien = (soDienTieuThu * 500);
         return tongTienDien;
    } else if(soDienTieuThu > 50 && soDienTieuThu <= 100){
       let  tongTienDien = (soDienTieuThu * 650 );
         return tongTienDien;
    } else if ( soDienTieuThu > 100 && soDienTieuThu <= 150) {
       let tongTienDien = (soDienTieuThu * 850);
        return tongTienDien;
    } else if ( soDienTieuThu > 150) {
       let tongTienDien = (soDienTieuThu *1100);
        return tongTienDien;
    } else {
       let tongTienDien = (soDienTieuThu *1300);
        return tongTienDien;
    }
}

 document.querySelector("#baiTap2").onclick = function () {
    let hoTen = document.querySelector(".hoVaTen").value ;
    let soKW = soDienTieuThu();
    // console.log(soKW);
    let tienDien = soTien (soKW).toLocaleString('en-US') ;
    document.querySelector(".bTap2").innerHTML = `Họ tên: ${hoTen}; Tiền điện: ${tienDien}` ;
 }

 // bai tap 3
/**
  * input Tạo các input và button để người dùng nhập dữ liệu và xuất dữ liệu khi click vào nút button 
  * 
  * các bước xử lý :
  * tạo hàm thu nhập 1 năm của người dùng
  * tạo hàm số người phụ thuôc
  * tạo hàm thu nhập khi chịu thuế 
  * dùng kệnh DOM để lấy đươcj tên người dùng
  * nếu thu nhập < 0 thì sẽ không đóng thuế
  * tính tiền thuế phải đóng là : (
  * Thu nhập chịu thuế :
  * Dưới 60 triệu sẽ đóng 5 %
  * Trên 60 triệu đến 120 triệu sẽ đóng 10 %
  * Trên 120 triệu đến 210 triệu sẽ đóng 15 %
  * Trên 210 triệu đến 384 triệu sẽ đóng 20 %
  * Trên 384 triệu đến 624 triệu sẽ đóng 25 %
  * Trên 624 triệu đến 960 triệu sẽ đóng 30 %
  * Trên 960 triệu sẽ đóng 35 %
  * )
  * 
  * 
  * out put thông báo tên khách hàng và số tiền thuế thu nhập cá nhân


*/
 
function thuNhap() {
    let thuNhap1Nam = document.querySelector(".thuNhap").value * 1;
    return thuNhap1Nam;
}

function soNguoiPhuThuoc() {
    return document.querySelector("#phuThuoc").value * 1;
}

function thuNhapChiuThue1(thuNhap, soNguoiPhuThuoc) {
    let thuNhapThue = thuNhap - 4e+6 - (soNguoiPhuThuoc * 1.6e+6);
    return thuNhapThue;
}

document.querySelector("#baiTap3").onclick = function () {
    let thuNhapCaNhan = thuNhap();
    let hoTenNguoiDung = document.querySelector("#hoTen").value;
    let nguoiPhuThuoc = soNguoiPhuThuoc();
    let thuNhapChiuThue = thuNhapChiuThue1(thuNhapCaNhan, nguoiPhuThuoc);

    if (thuNhapChiuThue < 0) {
        thuNhapChiuThue = 0;
    }

    let thueThuc = 0;
    let thuNhapChiuThueTrieu = thuNhapChiuThue / 1e+6;

    if (thuNhapChiuThueTrieu <= 60) {
        thueThuc = thuNhapChiuThueTrieu * 0.05;
    } else if (thuNhapChiuThueTrieu <= 120) {
        thueThuc = 60 * 0.05 + (thuNhapChiuThueTrieu - 60) * 0.10;
    } else if (thuNhapChiuThueTrieu <= 210) {
        thueThuc = 60 * 0.05 + 60 * 0.10 + (thuNhapChiuThueTrieu - 120) * 0.15;
    } else if (thuNhapChiuThueTrieu <= 384) {
        thueThuc = 60 * 0.05 + 60 * 0.10 + 90 * 0.15 + (thuNhapChiuThueTrieu - 210) * 0.20;
    } else if (thuNhapChiuThueTrieu <= 624) {
        thueThuc = 60 * 0.05 + 60 * 0.10 + 90 * 0.15 + 174 * 0.20 + (thuNhapChiuThueTrieu - 384) * 0.25;
    } else if (thuNhapChiuThueTrieu <= 960) {
        thueThuc = 60 * 0.05 + 60 * 0.10 + 90 * 0.15 + 174 * 0.20 + 240 * 0.25 + (thuNhapChiuThueTrieu - 624) * 0.30;
    } else {
        thueThuc = 60 * 0.05 + 60 * 0.10 + 90 * 0.15 + 174 * 0.20 + 240 * 0.25 + 336 * 0.30 + (thuNhapChiuThueTrieu - 960) * 0.35;
    }

    thueThuc = thueThuc * 1e6;
    thueThuc = new Intl.NumberFormat('vn-VN').format(thueThuc);
    document.querySelector(".bTap3").innerHTML = `Họ tên: ${hoTenNguoiDung} ;  Tiền thuế thu nhập cá nhân: ${thueThuc} VND`;
}



// btap4
/**\
 *  * input Tạo các input và button để người dùng nhập dữ liệu và xuất dữ liệu khi click vào nút button 
  *
 * output :thông báo mã khách hàng và loại khách hàng và tổng tiền cần phải trả
 * 
 */


function themOChon() {
    let loaiKhachHang = document.getElementById("loaiKhachHang").value;
    let soKetNoiDiv = document.getElementById("soKetNoiDiv");
    if (loaiKhachHang === "doanhNghiep") {
        soKetNoiDiv.style.display = "block";
    } else {
        soKetNoiDiv.style.display = "none";
    }
}

function tinhHoaDon() {
    let maKhachHang = document.getElementById("maKhachHang").value;
    let loaiKhachHang = document.getElementById("loaiKhachHang").value;
    let soKetNoi = parseInt(document.getElementById("soKetNoi").value);
    let soKenhCaoCap = parseInt(document.getElementById("soKenhCaoCap").value);
    let tongTien = 0;

    if (loaiKhachHang === "nhaDan") {
        // Tính tiền cho nhà dân
        tongTien = 4.5 + 20.5 + (soKenhCaoCap * 7.5);
    } else if (loaiKhachHang === "doanhNghiep") {
        // Tính tiền cho doanh nghiệp
        let phiKetNoi = 75;
        if (soKetNoi > 10) {
            phiKetNoi += (soKetNoi - 10) * 5;
        }
        tongTien = 15 + phiKetNoi + (soKenhCaoCap * 50);
    }

    let hienThi = `Mã khách hàng: ${maKhachHang}<br>
                  Loại khách hàng: ${loaiKhachHang === "nhaDan" ? "Nhà dân" : "Doanh nghiệp"}<br>
                  Tổng tiền hóa đơn: $${tongTien.toFixed(2)}`;

    document.querySelector(".bTap4").innerHTML =hienThi;
}
