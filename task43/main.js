var magicinas = ["magician1", "magician2", "magician3"];
function make_great_magician(magicianName) {
    // console.log(`"Great, ${magicianName}"`);
    return magicianName.map(function (magic) { return "\"Great , ".concat(magic, "\""); });
}
var duplicate_list = make_great_magician(magicinas);
console.log("original = ", magicinas);
console.log("duplicate = ", duplicate_list);
