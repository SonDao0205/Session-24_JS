let choice
let string = ""
let array = []
let count
do {
    array = []
    choice = +prompt(`
        1. Nhap chuoi ky tu
        2. Hien thi chuoi ky tu
        3. Tim tat ca cac tu con trung lap trong chuoi va so lan xuat hien
        4. Tim cac tu co do dai lon nhat va nho nhat trong chuoi
        5. Tim so lan xuat hien nhieu nhat cua cac ky tu trong chuoi
        6. Chuoi doi doi chuoi ky tu thanh dang snake_case
        7. Thoat chuong trinh
        Lua chon cua ban`)
        switch (choice) {
            case 1:    
                string = prompt("Nhap chuoi")
                break;
            case 2:
                console.log(string);
                break;
            case 3:    
            let temp_name = [];
            let temp_count = [];
            count;
            array = string.split(" ");
            for (let i = 0; i < array.length; i++) {
                count = 1;
                if (!temp_name.includes(array[i])) {
                    for (let j = i + 1; j < array.length; j++) {
                        if (array[i] === array[j]) {
                            count++;
                        }
                    }
                    if (count > 1) { 
                        temp_name.push(array[i]);
                        temp_count.push(count);
                    }
                }
            }
            
            if (temp_name.length === 0) {
                console.log(`Khong co phan tu nao trung trong chuoi`);
            } else {
                for (let i = 0; i < temp_name.length; i++) {
                    console.log(`Tu ${temp_name[i]} xuat hien ${temp_count[i]} lan`);
                }
            }
                break;
            case 4:
                let temp_max = []
                let temp_min = []
                array = string.split(" ")
                let max = array[0].length
                let min = array[0].length
                for (let i = 1; i < array.length; i++) {
                    if (array[i].length > max) {
                        max = array[i].length
                        temp_max = [array[i]]
                    }
                    else if (array[i].length === max) {
                        temp_max.push(array[i]);
                    }

                    if (array[i].length < min) {
                        min = array[i].length
                        temp_min = [array[i]]
                    }
                    else if (array[i].length === min) {
                        temp_min.push(array[i]);
                    }
                }
                console.log(temp_max);
                console.log(temp_min);
                
                console.log(`
                    Tu co do dai lon nhat la : ${temp_max.join(", ")}
                    Tu co do dai nho nhat la : ${temp_min.join(", ")}`);
                break;
            case 5:    
                array = string.split("")
                count = 1
                let temp_1 = 0
                let temp_2 
                for (let i = 0; i < array.length; i++) {
                    count = 1
                    for (let j = 1; j < array.length; j++) {
                        if (array[i] === array[j]) {
                            count++
                        }
                        if (temp_1 < count) {
                            temp_1 = count
                            temp_2 = array[i]
                        }
                    }
                }
                console.log(`Ky tu co so lan xuat hien nhieu nhat la : ${temp_2}`);
                
                break;
            case 6:    
                array = string.split("")
                for (let i = 0; i < array.length; i++) {
                    if (array[i] === " ") {
                        array[i] = "_"
                    }
                }
                string = array.join("")
                console.log(`Da chuyen doi thanh cong`);
                
                break;
            case 7:   
                console.log(`Tam biet`);
                break;
            default:
                console.log(`Lua chon khong phu hop`);
                break;
        }

} while (choice !== 7);


