// Bài 1: Viết chương trình nhập vào số tuổi của 1 người.Nếu số tuổi người đó >=18 tuổi 
// , hiển thị thông báo trên 18 tuổi ngược lại bạn chưa đủ 18 tuổi!

// let age = prompt("Nhập tuổi:")

// if (age>=18) {
//     document.write("Trên 18 tuổi")
// } else {
//     document.write("Chưa đủ tuổi")
// }

// Bài 2: Viết chương trình cho phép người dùng nhập vào số giờ trong ngày.
// Nếu dưới 18h thì hiển thị : “Good day”.
// Nếu trên 18h thì hiển thị : “Good evening”.

// let time = prompt('Nhập giờ:')

// if (time>=18) {
//     document.write("Good evening")
// } else {
//     document.write("Good day")
// }

// Bài 3: Viết chương trình cho phép người dùng nhập vào số giờ trong ngày.
// Nếu trước 10h thì hiển thị : “Good morning”.
// Nếu thời gian chưa tới 20h thì hiển thị : “Good day”.
// -Nếu sau 20h hiển thị : “Good evening”.

// let time1 = prompt('Nhập giờ:')

// if (time1<=10) {
//     document.write("Good morning")
// } else if (time1 < 20) {
//     document.write("Good day")
// } else {
//     document.write('Good evening')
// }

// Bài 4: Viết chương trình cho phép người dùng nhập vào 1 số.
// Kiểm tra xem số nhập vào là số chẵn hay số lẻ (sử dụng câu điều kiện if-else).
// let number = prompt("Nhập số:")

// if (number%2==0) {
//     document.write(`${number} là số chẵn`)
// } else {
//     document.write(`${number} là số lẻ`)
// }


// Bài 5: Viết chương trình cho phép người dùng nhập vào 1 số.
// Kiểm tra xem số nhập vào là số chẵn hay số lẻ (sử dụng switch case).
// let number = prompt("Nhập số:")
// let remainder = number%2
// switch (remainder) {
//     case 1:
//         document.write("Số lẻ");
//         break;

//     default:
//         document.write("số chẵn");
// }

// Bài 6: Viết chương trình cho phép người dùng nhập màu vào kiểm tra.
// Nếu nhập 1 trong các màu : xanh, đỏ,vàng thì hiển thị màu người dùng nhập
// Nếu nhập màu khác hiển thị màu không hợp lệ!

// let color = prompt("Nhập màu:")
// if (color=='xanh' || color=='đỏ' || color=='vàng') {
//     document.write('Đúng màu')
// } else {
//     document.write('Sai màu')

// }


// Bài 7: Viết chương trình cho phép người dùng nhập vào số nguyên x:
// Nếu x==0 thì in ra x có giá trị là 0;
// Nếu x>0 thì in ra x là số nguyên dương.
// Nếu x<0 thì in ra x là số nguyên âm.

// let x = prompt("Nhập x:")
// if (x==0) {
//     document.write('=0')
// } else if (x>0) {
//     document.writeln('>0')
// } else {
//     document.writeln('<0')
// }

// Bài 8: Tính chỉ số cân nặng BMI :
// Viết chương trình cho phép người dùng nhập vào cân nặng(kg) và chiều cao(m);
// Sau đó hiển thị kết quả phân loại theo chỉ số BMI dưới đây.
// bmi = weight / ( height ^ 2 );

// let height = parseFloat(prompt("Nhập chiều cao:"))
// let weight = parseFloat(prompt("Nhập cân nặng:"))
// let bmi = weight / (height**2)
// console.log(bmi)

// if (bmi<18.5) {
//     document.write("Gầy");
// } else if (bmi<25) {
//     document.write("Bth")
// }else{
//     // document.write("Thừa cân")
//     if (bmi<30) {
//         document.write("Tiền béo phì")
//     } else if (bmi<35) {
//         document.write('Béo phì độ I')
//     } else if (bmi<40) {
//         document.write('Béo phì độ II')
//     } else {
//         document.write("BÉO PHÌ")
//     }
// } 

// Bài 9: Viết chương trình cho phép người dùng nhập điểm các môn:Toán,Lí,Hoá,
// Văn, Sử , Địa (thang điểm 10);

// let toan = parseFloat(prompt("Nhập điểm toán:"))
// console.log(toan)

// let li = parseFloat(prompt("Nhập điểm lí:"))
// console.log(li)

// let hoa = parseFloat(prompt("Nhập điểm hóa:"))
// console.log(hoa)

// let van = parseFloat(prompt("Nhập điểm văn:"))
// console.log(van)

// let su = parseFloat(prompt("Nhập điểm sử:"))
// console.log(su)

// let dia = parseFloat(prompt("Nhập điểm địa:"))
// console.log(dia)

// let dTB = (toan+li+hoa+van+su+dia)/6;
// console.log(dTB);
// if (dTB<5) {
//     document.write('Yếu')
// } else if (dTB<=6.4) {
//     document.write("trung bình")
// } else if(dTB<=7.9) {
//     document.write('khá')
// } else {
//     document.write('Giỏi')
// }


// Bài 10: Viết chương trình nhập vào số tháng trong năm,in ra số ngày trong tháng đó.
// Ví dụ : Người dùng nhập vào số 7 thì in ra tháng 7 có 31 ngày.
// let month = prompt('Nhập tháng:')
// if (month==1 ||month==3||month==5||month==7||month==8||month==10||month==12) {
//     document.write(`Tháng ${month} có 31 ngày`)
// } else if (month==4 ||month==6||month==9||month==11) {
//     document.write(`Tháng ${month} có 30 ngày`)
// } else if (month==2) {    
//     document.write(`Tháng 2 có 28 hoặc 29 ngày`)
// }






