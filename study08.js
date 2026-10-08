// Expression Function แบบ Arrow Function
// นิยมเขียนอยู่ 2 แบบคือ
// กำหนดค่าให้กับตัวแปร หรือ เป็นอาร์กิวเมนต์ส่งให้พารามิเตอร์
const sum = (a, b) => {
    return a + b;
}

const hello = (fname, lname) =>{
    console.log(`Hello....${fname} ${lname}`);
}

let showWoW = () =>{
    console.log('WoW wow wow');
}

console.log( sum(100,200));
hello('John','Doe');
showWoW()