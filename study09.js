// Callback Function
// คือ การเขียน AnonyMons Function/Arror Function
// ให้เป็นอาร์กิวเมนต์ส่งให้พารามิเตอร์

function funcA(x, y, z){
    console.log(`Hello ${x}`);
    console.log(`Hi ${y}`);
    z()
}
function funcB(data){
    let result = 10 * 20

    console.log(`Value is ${data(result,100)}`);
}
funcA('Dog','Cat', function(){
    console.log(`Goobye`);
})

funcB((a,b) =>{
    return a * b * 10
})