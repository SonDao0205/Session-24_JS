let choice
let column
let row
let array =[]
let sum = 0
do {
    choice = +prompt(`
        1. Nhap mang 2 chieu
        2. Hien thi mang 2 chieu
        3. Tinh tong cac phan tu trong mang
        4. Tinh tong duong cheo chinh
        5. Tinh tong duong cheo phu
        6. Tinh trung binh cong cac phan tu trong 1 hang hoac 1 cot
        7. Thoat`)
    switch (choice) {
        case 1:
            column = +prompt("Nhap so hang")
            row = +prompt("Nhap so dong")
            for (let i = 0; i < row; i++) {
                array[i] = [];
                for (let j = 0; j < column; j++) {
                    array[i][j] = +prompt(`Nhap phan tu tai hang ${i}, cot ${j}:`);
                }
            }
            break;
        case 2:
            if (array.length == 0) {
                console.log(`Hay nhap mang truoc`);
                break
            }
            for (let i = 0; i < row; i++) {
                for (let j = 0; j < column; j++) {
                    console.log(`Phan tu tai hang ${i}, cot ${j} : ${array[i][j]}`);
                }
            }
            break;
        case 3:
            if (array.length == 0) {
                console.log(`Hay nhap mang truoc`);
                break
            }
            sum = 0
            for (let i = 0; i < row; i++) {
                for (let j = 0; j < column; j++) {
                    sum += array[i][j]
                }
            }
            console.log(`Tong cac phan tu trong mang : ${sum}`);
            break;
        case 4:
            if (array.length == 0) {
                console.log(`Hay nhap mang truoc`);
                break
            }
            if (row !== column) {
                console.log(`Mang khong co duong cheo chinh`);
                break
            }
            sum = 0
            for (let i = 0; i < row; i++) {
                sum += array[i][i]
            }
            console.log(`Tong duong cheo chinh trong mang : ${sum}`);
            break;
        case 5:
            if (array.length == 0) {
                console.log(`Hay nhap mang truoc`);
                break
            }
            if (row !== column) {
                console.log(`Mang khong co duong cheo phu`);
                break
            }
            sum = 0
            for (let i = row-1; i >= 0; i--) {
                sum += array[i][column - 1 - i]
            }
            console.log(`Tong duong cheo phu trong mang : ${sum}`);
            break;
        case 6:
            if (array.length == 0) {
                console.log(`Hay nhap mang truoc`);
                break
            }
            let n
            sum = 0
            choice = +prompt(`
                1. Tinh trung binh cong theo hang
                2. Tinh trung binh cong theo cot`)
            switch (choice) {
                case 1:
                    n = +prompt("Nhap hang")
                    for (let i = 0; i < column; i++) {
                        sum += array[n][i]
                    }
                    console.log(`Trung binh cong cua hang ${n} = ${sum/column}`);
                    break;
                case 2:
                    n = +prompt("Nhap cot")
                    for (let i = 0; i < row; i++) {
                        sum += array[i][n]
                    }
                    console.log(`Trung binh cong cua cot ${n} = ${sum/row}`);
                    
                    break;
                default:
                    console.log(`Lua chon khong phu hop!`);
                    
                    break;
            }
            break;
        case 7:
            console.log(`Tam biet`);
            break;
        default:
            console.log(`Lua chon khong hop le`);
            break;
    }
} while (choice != 7);