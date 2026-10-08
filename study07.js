// Expression Function แบบ Anonymus Function
// นิยมเขียนอยู่ 2 แบบคือ
// กำหนดค่าให้กับตัวแปร หรือ เป็นอาร์กิวเมนต์ส่งให้พารามิเตอร์
const sum = function (a, b){
    return a + b;
}

const hello = function (fname, lname){
    console.log(`Hello....${fname} ${lname}`);
}

let showWoW = function(){
    console.log('WoW wow wow');
}
console.log( sum(100,200));
hello('John','Doe');
showWoW()