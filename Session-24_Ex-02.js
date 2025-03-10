let choice
let array = []
let n
do {
    choice = +prompt(`
        1. Nhap mang so nguyen
        2. Hien thi mang
        3. Tim cac phan tu chan va le
        4. Tinh trung binh cong cua mang
        5. Xoa phan tu tai vi tri chi dinh
        6. Tim phan tu lon thu 2 trong mang
        7. Thoat
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
                let even = "";
                let odd = ""
                for (let i = 0; i < array.length; i++) {
                    if (array[i] % 2 == 0) {
                        even += array[i] + " "
                    }
                    else{
                        odd += array[i] + " "
                    }
                }
                if (even.length == 0) {
                    console.log(`Mang khong co so chan`);
                }
                else{
                    console.log(`Phan tu chan trong mang : ${even}`);
                }
                if (odd.length == 0) {
                    console.log(`Mang khong co so le`);
                }
                else{
                    console.log(`Phan tu le trong mang : ${odd}`);
                }
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
                console.log(`Trung binh cong cua mang : ${sum / 5}`);
                break;
            case 5:
                if (array.length == 0) {
                    console.log(`Hay nhap mang truoc`);
                    break
                }
                let deleteIndex = +prompt("Nhap chi so cua phan tu ban muon xoa")
                array.splice(deleteIndex,1)
                break;
            case 6:
                if (array.length == 0) {
                    console.log(`Hay nhap mang truoc`);
                    break
                }
                let max_1 = array[0];
                let max_2 = 0;
                for (let i = 0; i < array.length; i++) {
                    if (array[i] > max_1) {
                        max_2 = max_1;
                        max_1 = array[i];
                    } else if (array[i] > max_2 && array[i] < max_1) {
                        max_2 = array[i];
                    }
                }
                console.log(`So lon thu 2 trong mang : ${max_2}`);
                break;
            case 7:
                console.log(`Tam biet!`);
                break;
            default:
                console.log(`Lua chon khong hop le!`);
                break;
        }
} while (choice != 7);


