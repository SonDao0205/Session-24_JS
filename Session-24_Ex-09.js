let choice 
let string
let array
let count
let temp_1
let minIndex
do {
    array = []
    count = 0
    choice = +prompt(`
        1. Nhap chuoi ky tu
        2. Hien thi chuoi ky tu
        3. Dem so luong ky tu la chuoi va so trong chuoi ky tu nhap vao
        4. Chuyen doi cac ky tu viet hoa --> viet thuong, viet thuong --> viet hoa
        5. Tron lan cac ky tu cua chuoi goc voi chuoi thu 2 nguoi dung nhap vao
        6. Tach chuoi thanh cac tu, sap xep theo do dai cua tu, tu ngan den dai
        7. Thoat
        Lua chon cua ban`)
        switch (choice) {
            case 1:  
                string = prompt("Nhap chuoi")  
                break;
            case 2:    
                console.log(string);
                break;
            case 3:    
                array = string.split("")
                for (let i = 0; i < array.length; i++) {
                    if (isNaN(array[i])) {
                        count++
                    }
                    else if (array[i] === " ") {
                        array.length--
                    }
                }
                console.log(`
                    So ky tu la so : ${array.length - count}
                    So ky tu la chuoi : ${count}`);
                break;
            case 4:
                array = string.split("")
                for (let i = 0; i < string.length; i++) {
                    if (array[i] === array[i].toUpperCase()) {
                        array[i] = array[i].toLowerCase()
                    }
                    else if (array[i] === array[i].toLowerCase()) {
                        array[i] = array[i].toUpperCase()
                    }
                }
                string = array.join("")
                console.log(`Da chuyen doi thanh cong`);
                break;
            case 5:    
                let string_2 = prompt("Nhap chuoi")
                let temp = (string + string_2).split("")
                for (let i = temp.length - 1; i > 0; i--) {
                    let temp_1 = Math.floor(Math.random() * (i + 1));
                    [temp[i], temp[temp_1]] = [temp[temp_1], temp[i]];                   
                }
                console.log(temp.join(""));
                break;
            case 6:    
                array = string.split(" ")
                for (let i = 0; i < array.length; i++) {
                    for (let j = 0; j < array.length - i -1; j++) {
                        if (array[j].length > array[j+1].length) {
                            let temp = array[j]
                            array[j] = array[j+1]
                            array[j+1] = temp
                        }
                    }
                }
                string = array.join(" ")
                console.log(string);
                break;
            case 7:   
                console.log(`Tam biet`);
                break;
            default:
                console.log(`Lua chon khong hop le`);
                break;
        }
} while (choice != 7);
