let a = undefined;
let b = " ";
let c = !b;

let d = Boolean(a);
let e = !!b;
let f = Boolean(c);

console.log(d); // false เพราะว่่าค่าบูลีนของ undefined คือ false
console.log(e); // true string ไหนที่ไม่ empty จะนับเป็นค่าบูลีน true
console.log(f); // false เพราะว่า ! ทำให้ตัวแปรนี้เป็นค่าบูลีนตรงข้ามกับค่าก่อนหน้า^