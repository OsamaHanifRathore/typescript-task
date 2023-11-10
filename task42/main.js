var magicinas = ["magician1", "magician2", "magician3"];
function make_great(magicianName) {
    console.log("\"Great, ".concat(magicianName, "\""));
}
function show_magicians(magiciansList) {
    magiciansList.map(function (magic) { return make_great(magic); });
}
show_magicians(magicinas);
