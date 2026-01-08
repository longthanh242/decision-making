// Bài 1: Viết chương trình nhập vào số tuổi của 1 người.Nếu số tuổi người đó >=18 tuổi ,
// hiển thị thông báo trên 18 tuổi ngược lại bạn chưa đủ 18 tuổi!

// var input = prompt('Nhập tuổi: ');
// document.write(input >= 18 ? 'Bạn đủ tuổi.': 'Bạn chưa đủ tuổi.');




// Bài 2: Viết chương trình cho phép người dùng nhập vào số giờ trong ngày.
// Nếu dưới 18h thì hiển thị : “Good day”.
// Nếu trên 18h thì hiển thị : “Good evening”.

// var input = prompt('Nhập giờ trong ngày: ');
// document.write(input >= 18? 'Good evening' : 'Good day');




// Bài 3: Viết chương trình cho phép người dùng nhập vào số giờ trong ngày.
// Nếu trước 10h thì hiển thị : “Good morning”.
// Nếu thời gian chưa tới 20h thì hiển thị : “Good day”.
// -Nếu sau 20h hiển thị : “Good evening”.

// var inputHour = prompt("Nhập giờ trong ngày: ");
// if (inputHour < 10) {
//     console.log("Good morning");
// } else if (inputHour < 20) {
//     console.log("Good day");
// } else {
//     console.log("Good evening");
// }




// Bài 4: Viết chương trình cho phép người dùng nhập vào 1 số.
// Kiểm tra xem số nhập vào là số chẵn hay số lẻ (sử dụng câu điều kiện if-else).

// var inputNumber = Number(prompt("Nhập số: "));
// if (Number.isInteger(inputNumber)) {
//     if (inputNumber % 2 == 0) {
//         console.log(`Số ${inputNumber} là số chẵn`);
//     } else {
//         console.log(`Số ${inputNumber} là số lẻ`);
//     }
// } else {
//     console.log("Không phải số nguyên");
// }




// Bài 5: Viết chương trình cho phép người dùng nhập vào 1 số.
// Kiểm tra xem số nhập vào là số chẵn hay số lẻ (sử dụng switch case).

// var inputNumber = +prompt("Nhập vào 1 số: ");
// var check = inputNumber % 2;
// switch (check) {
//     case 0:
//         console.log(`Số ${inputNumber} là số chẵn`);
//         break;
//     case 1:
//         console.log(`Số ${inputNumber} là số lẻ`);
//         break;
//     default:
//         console.log("Không phải số chẵn, số lẻ");
// }




// Bài 6: Viết chương trình cho phép người dùng nhập màu vào kiểm tra.
// Nếu nhập 1 trong các màu : xanh, đỏ,vàng thì hiển thị màu người dùng nhập
// Nếu nhập màu khác hiển thị màu không hợp lệ!

// var inputColor = prompt("Nhập màu: ");
// if (inputColor == "đỏ") {
//     console.log(inputColor);
// } else if (inputColor == "vàng") {
//     console.log(inputColor);
// } else if (inputColor == "xanh") {
//     console.log(inputColor);
// } else {
//     console.log("Màu không hợp lệ");
// }




// Bài 7: Viết chương trình cho phép người dùng nhập vào số nguyên x:
// Nếu x==0 thì in ra x có giá trị là 0;
// Nếu x>0 thì in ra x là số nguyên dương.
// Nếu x<0 thì in ra x là số nguyên âm.

// var inputNumber = +(prompt("Nhap vao so nguyen: "));
// if (Number.isInteger(inputNumber)) {
//     if (inputNumber > 0) {
//         console.log(`${inputNumber} là số nguyên dương`);
//     } else if (inputNumber < 0) {
//         console.log(`${inputNumber} là số nguyên âm`);
//     } else {
//         console.log(inputNumber);
//     }
// } else {
//     console.log("Khong phai so nguyen.");
// }




// Bài 8: Tính chỉ số cân nặng BMI :
// Viết chương trình cho phép người dùng nhập vào cân nặng(kg) và chiều cao(m);
// Sau đó hiển thị kết quả phân loại theo chỉ số BMI dưới đây.
// bmi = weight / ( height ^ 2 );

// var inputWeight = +prompt("Nhập vào cân nặng: ");
// var inputHeight = +prompt("Nhập vào chiều cao: ");
// var bmi = inputWeight / inputHeight ** 2;
// console.log(bmi);
// if (typeof bmi === "number" && isNaN(bmi) !== true) {
//     if (bmi < 18.5) {
//         console.log("gầy");
//     } else if (bmi < 25) {
//         console.log("Bình thường");
//     } else if (bmi < 30) {
//         console.log("Tiền béo phì");
//     } else if (bmi < 35) {
//         console.log("Béo phì độ I");
//     } else if (bmi < 40) {
//         console.log("Béo phì độ II");
//     } else {
//         console.log("Béo phì độ III");
//     }
// } else {
//     console.log("Bạn nhập sai kiểu dữ liệu rồi");
// }



// Bài 9: Viết chương trình cho phép người dùng nhập điểm các môn:Toán,Lí,Hoá,
// Văn, Sử , Địa (thang điểm 10);
// Sau đó tính điểm trung bình các môn học
// Hiển thị kết quả học tập theo loại như sau:
// 8.0 <=ĐTB<=10: xếp loại GIỎI.
// 6.5<=ĐTB<=7.9: xếp loại KHÁ.
// 5.0<=ĐTB<=6.4: xếp loại TRUNG BÌNH.
// ĐTB<5.0 : xếp loại YẾU.

// var diemToan = +prompt("Nhập điểm Toán: ");
// var diemLi = +prompt("Nhập điểm Lí: ");
// var diemHoa = +prompt("Nhập điểm Hóa: ");
// var diemVan = +prompt("Nhập điểm Văn: ");
// var diemSu = +prompt("Nhập điểm Sử: ");
// var diemDia = +prompt("Nhập điểm Địa: ");
// var dtb = (diemToan + diemLi + diemHoa + diemVan + diemSu + diemDia) / 6;
// console.log(dtb);
// if (dtb < 5.0) {
//     console.log("YẾU");
// } else if (dtb < 6.5) {
//     console.log("TRUNG BÌNH");
// } else if (dtb < 8.0) {
//     console.log("KHÁ");
// } else {
//     console.log("GIỎI");
// }




// Bài 10: Viết chương trình nhập vào số tháng trong năm,in ra số ngày trong tháng đó.
// Ví dụ : Người dùng nhập vào số 7 thì in ra tháng 7 có 31 ngày.

// var inputMonth = +prompt("Nhập tháng trong năm: ");
// if (Number.isInteger(inputMonth)) {
//     switch (inputMonth) {
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12:
//             console.log(` Tháng ${inputMonth} có 31 ngày`);
//             break;
//         case 4:
//         case 6:
//         case 9:
//         case 11:
//             console.log(`Tháng ${inputMonth} có 30 ngày`);
//             break;
//         case 2:
//             console.log(`Tháng 2 có 28 hoặc 29 ngày`);
//             break;
//         default:
//             console.log("Không phải tháng trong năm");
//             break;
//     }
// } else {
//     console.log("Không phải số nguyên");
// }
