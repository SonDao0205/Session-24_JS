let choice 
let array = []
let row
let column
let sum = 0
do {
    choice = +prompt(`
        1. Nhap mang 2 chieu
        2. Hien thi mang 2 chieu
        3. Tinh tong cac phan tu trong mang
        4. Tim phan tu lon nhat trong mang va chi so cua no
        5. Tinh trung binh cong cac phan tu cua 1 hang cu the
        6. Dao nguoc cac hang trong mang
        7. Thoat chuong trinh`)
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
                let max = 0
                let temp_1
                let temp_2
                for (let i = 0; i < row; i++) {
                    for (let j = 0; j < column; j++) {
                        if (max < array[i][j]) {
                            max = array[i][j]
                            temp_1 = i
                            temp_2 = j
                        }
                    }
                }
                console.log(`
                    Phan tu lon nhat trong mang la : ${max}
                    Vi tri cua phan tu tai hang ${temp_1}, cot ${temp_2}`);
                break;
            case 5:
                if (array.length == 0) {
                    console.log(`Hay nhap mang truoc`);
                    break
                }
                sum = 0
                let n = +prompt("Nhap hang ban muon tinh trung binh tong")
                    for (let i = 0; i < column; i++) {
                        sum += array[n][i]
                    }
                console.log(`Trung binh cong cac phan tu tai hang ${n} la : ${sum / column}`);
                break;
            case 6:
                if (array.length == 0) {
                    console.log(`Hay nhap mang truoc`);
                    break
                }
                array.reverse();
                console.log(`Mang da dao nguoc thanh cong`);
                break;
            case 7:
                console.log(`Tam biet`);
                break;
            default:
                console.log(`Lua chon khong hop le`);
                break;
        }
} while (choice != 7);