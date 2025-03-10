let choice 
let string
let array =[]
let temp
let flag = 0
do {
    choice = +prompt(`
        1. Nhap chuoi
        2. Hien thi chuoi
        3. Tinh do dai cua chuoi
        4. Dem so lan xuat hien cua 1 ky tu trong chuoi
        5. Kiem tra chuoi co phai la chuoi doi xung
        6. Chuyen doi chuoi thanh chu in hoa cac ky tu dau tien cua tu
        7. Thoat`)
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
            console.log(`Do dai cua chuoi : ${string.length}`);
            break;
        case 4:
            if (string.length == 0) {
                console.log(`Hay nhap chuoi truoc`);
                break
            }
            temp = 0
            array=[]
            temp = prompt("Nhap ky tu ban muon tim trong chuoi")
            let count = 0
            array = string.split("")
            for (let i = 0; i < array.length; i++) {
                if (temp === array[i]) {
                    count++
                }
            }
            if (count === 0) {
                console.log(`Phan tu khong ton tai trong chuoi`);
            }
            else{
                console.log(`Phan tu ${temp} xuat hien ${count} lan trong chuoi`);
            }
            break;
        case 5:
            if (string.length == 0) {
                console.log(`Hay nhap chuoi truoc`);
                break
            }
            flag = 1
            array=[]
            array = [...string.split("")]
            array.reverse()
            for (let i = 0; i < array.length; i++) {
                if (string[i] !== array[i]) {
                    flag = 0
                    break;
                }
            }
            if (flag==0) {
                console.log(`Khong phai chuoi doi xung`);
            }
            else{
                console.log(`Day la chuoi doi xung`);
            }
            break;
        case 6:
            if (string.length == 0) {
                console.log(`Hay nhap chuoi truoc`);
                break
            }
            array = string.split("")            
            array[0] = array[0].toUpperCase()
            if (array.includes(" ")) {
                for (let i = 0; i < array.length; i++) {
                    if (array[i] == " ") {
                        array[i+1] = array[i+1].toUpperCase()    
                    }
                }
            }
            string = array.join("")
            break;
        case 7:
            console.log(`Tam biet`);
            break;
        default:
            console.log(`Lua chon khong phu hop`);
            break;
    }
} while (choice != 7);
