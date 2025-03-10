let choice 
let string
let array = []
let count = 0
do {
    choice = +prompt(`
        1. Nhap chuoi
        2. Hien thi chuoi
        3. Loai bo cac khoang trang o dau va cuoi chuoi
        4. Dao nguoc chuoi ky tu
        5. Dem so luong tu trong chuoi ky tu
        6. Tim kiem va thay the cac ky tu trong chuoi goc
        7. Thoat
        Lua chon cua ban`)
        switch (choice) {
            case 1:
                string = prompt("Nhap chuoi")
                break;
            case 2:
                if (string.length == 0) {
                    console.log(`Hay nhap chuoi truoc`);
                    break
                }
                console.log(string);
                break;
            case 3:
                if (string.length == 0) {
                    console.log(`Hay nhap chuoi truoc`);
                    break
                }
                string.trim()
                console.log(`Da loai bo khoang trang thanh cong`);
                break;
            case 4:
                if (string.length == 0) {
                    console.log(`Hay nhap chuoi truoc`);
                    break
                }
                array = string.split("").reverse()
                string = array.join("")
                console.log(`Da dao nguoc thanh cong`);
                break;
            case 5:
                if (string.length == 0) {
                    console.log(`Hay nhap chuoi truoc`);
                    break
                }
                array = []
                array = string.split("")
                count = array.length
                for (let i = 0; i < array.length; i++) {
                    if (array[i] === " ") {
                        count--
                    }
                }
                console.log(`So luong tu trong chuoi la : ${count}`);
                break;
            case 6:
                if (string.length == 0) {
                    console.log(`Hay nhap chuoi truoc`);
                    break
                }
                let temp
                let searchItem = prompt("Nhap ki tu muon tim")
                if (string.includes(searchItem)) { 
                    let replaceItem = prompt("Nhập từ bạn muốn thay thế:"); 
                    string = string.split(searchItem).join(replaceItem); 
                    console.log(`Chuoi thay the thanh cong`);
                    
                } else { 
                    console.log("Khong ton tai tu can tim kiem"); 
                }
                break;
            case 7:
                console.log(`Tam biet`);
                break;
            default:
                console.log(`Lua chon khong phu hop`);
                break;
        }
} while (choice !== 7);