let choice;
let array =[];
let n;
let count = 0
do {
    choice = +prompt(`
        1. Nhap mang
        2. Hien thi mang
        3. Tim phan tu lon nhat va nho nhat trong mang
        4. Tinh tong cac phan tu trong mang
        5. Tim so lan xuat hien cua 1 phan tu trong mang
        6. Sap xep mang tang dan
        7. Thoat
        Lua chon cua ban`)
        switch (choice) {
            case 1:
                n = +prompt("Nhap so phan tu ban muon nhap")
                for (let i = 0; i < n; i++) {
                    array[i] = +prompt(`Nhap phan tu thu ${i}`)
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
                let max = Math.max(...array)
                let min = Math.min(...array)
                console.log(`
                    Phan tu lon nhat trong mang : ${max}
                    Phan tu nho nhat trong mang : ${min}`);
                break;
            case 4:
                if (array.length == 0) {
                    console.log(`Hay nhap mang truoc`);
                    break
                }
                let sum = 0
                for (let i = 0; i < array.length; i++) {
                    sum += array[i]
                }
                console.log(`
                    Tong cac phan tu trong mang : ${sum}`);
                break;
            case 5:
                if (array.length == 0) {
                    console.log(`Hay nhap mang truoc`);
                    break
                }
                let numItem = +prompt("Nhap phan tu ban muon tim")
                count = 0
                for (let i = 0; i < array.length; i++) {
                    if (array[i] == numItem) {
                        count++
                    }
                }
                if (count == 0) {
                    console.log(`Phan tu khong co trong mang`);
                }
                else{
                    console.log(`Phan tu ${numItem} xuat hien ${count} lan trong mang`);
                }
                break;
            case 6:
                if (array.length == 0) {
                    console.log(`Hay nhap mang truoc`);
                    break
                }
                array.sort()
                console.log(`Mang da sap xep thanh cong`);
                break;
            case 7:
                console.log(`Tam biet`);
                break;
            default:
                console.log(`Lua chon khong hop le!`);
                break;
        }
} while (choice != 7);