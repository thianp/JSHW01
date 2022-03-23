let a = undefined;
let b = null;
let c = b + "4 2";

let d = +a;
let e = Number(b);
let f = c*1;

console.log(d); // NaN เพราะไม่สามารถเปลี่ยน undefined เป็นเลขได้ 
console.log(e); // 0 เพราะ null เท่ากับ 0
console.log(f); // NaN เพราะ b เท่ากับ 0 และบวกกับ string ไม่ได้