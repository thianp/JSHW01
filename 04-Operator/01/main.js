let a = undefined;
let b = 2;
let c = a++;

let d = '' + a;
let e = String(b);
let f = '' + c;

console.log(d); // NaN
console.log(e); // 2
console.log(f); // NaN