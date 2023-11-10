function make_shirt(size) {
    if (size === void 0) { size = "large"; }
    if (size == "large" || size == "Medium") {
        console.log("I love typescript");
    }
    else {
        console.log("player is wearing ".concat(size, " number shirt"));
    }
}
make_shirt();
