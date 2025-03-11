let choice 
let array =[]
let n
do {
    choice = +prompt(`
        1. Nhap mang so nguyen
        2. Hien thi mang
        3. Tim phan tu lon nhat trong mang va in ra chi so cua no
        4. Tinh tong va trung binh cong cua cac so duong trong mang
        5. Dao nguoc mang
        6. Kiem tra mang co doi xung khong
        7. Thoat chuong trinh
        Lua chon cua ban`)
        switch (choice) {
            case 1:
                n = +prompt(`Nhap so phan tu cua mang`)
                for (let i = 0; i < n; i++) {
                    array[i] = +prompt(`Nhap phan tu thu ${i}`)
                    if (!Number.isInteger(array[i])) {
                        console.log(`Hay nhap phan tu so nguyen`);
                        i--
                    }
                }
                break;
            case 2:
                if (array.length == 0) {
                    console.log(`Hay nhap mang truoc`);
                    break
                }
                console.log(array);
                break;
            case 3:
                if (array.length == 0) {
                    console.log(`Hay nhap mang truoc`);
                    break
                }
                let max = array[0]
                for (let i = 0; i < array.length; i++) {
                    if (array[i] > max) {
                        max = array[i]
                    }
                }
                console.log(`Chi so cua phan tu lon nhat la : ${array.indexOf(max)}`);
                break;
            case 4:
                if (array.length == 0) {
                    console.log(`Hay nhap mang truoc`);
                    break
                }
                let sum = 0
                let count = 0
                for (let i = 0; i < array.length; i++) {
                    if (array[i] > 0) {
                        sum += array[i]
                        count++
                    }
                }
                if (count == 0) {
                    console.log(`Mang khong co so nguyen duong`);
                }
                else{
                    console.log(`
                    Tong cua cac so nguyen duong trong mang : ${sum}
                    Trung binh cong cua cac so nguyen duong trong mang : ${sum / count}`);
                }
                break;
            case 5:
                if (array.length == 0) {
                    console.log(`Hay nhap mang truoc`);
                    break
                }
                array.reverse()
                console.log(`Mang da dao nguoc thanh cong`);
                break;
            case 6:
                if (array.length == 0) {
                    console.log(`Hay nhap mang truoc`);
                    break
                }
                flag = 0
                for (let i = 0; i < array.length-i-1; i++) {
                    if (array[i] !== array[array.length - 1 - i]) {
                        console.log(`Mang khong doi xung`);
                        flag = 1
                        break;

                    }
                }
                if (flag === 0) {
                    console.log(`Mang doi xung`);
                }
                break;
            case 7:
                console.log(`Tam biet`);
                break;
            default:
                console.log(`Lua chon khong phu hop`);
                break;
        }
} while (choice != 7);