console.log(`JS Iterations`);
console.log("for...of");
const num=[12,45,-34,89,-56,23];
for(let i of num){
    if(i<0)
        break
    else
    console.log(`${i}`)
}
//---------------------------
console.log(`--------------------`)
console.log("for...in");
const num1=[12,45,-34,89,-56,23];
for(let i in num){
    if(num[i]<0)
        break
    else
    console.log(`index of ${i} having value as ${num[i]}`)
}
//---------------------------
console.log(`--------------------`)
console.log("forEach Method 1");
const num2=[12,45,-34,89,-56,23];
num2.forEach(function(numVal, index, array){
    console.log(`index of ${index} having value as ${numVal}`);
})

console.log(`--------------------`)
console.log("forEach method 2");
const num3=[12,45,-34,89,-56,23];
num3.forEach(calbackFn);
    function calbackFn(numVal, index, array){
        console.log(`index of ${index} having value as ${numVal}`)};

console.log(`--------------------`)
console.log("forEach");
const num4=[12,45,-34,89,-56,23];
num4.forEach((numVal, index, array)=>console.log(`index of ${index} having value as ${numVal}`));
