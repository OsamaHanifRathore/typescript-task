let personName : String = "Osama";

console.log("Uppercase  = " , personName.toUpperCase());
console.log("Uppercase  = " , personName.toLowerCase());
console.log("Titlecase: " + personName.replace(/\b\w/g, (char) => char.toUpperCase()));
// console.log("Uppercase  = " , personName.ti);



