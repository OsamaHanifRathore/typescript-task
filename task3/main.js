var personName = "Osama";
console.log("Uppercase  = ", personName.toUpperCase());
console.log("Uppercase  = ", personName.toLowerCase());
console.log("Titlecase: " + personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
// console.log("Uppercase  = " , personName.ti);
