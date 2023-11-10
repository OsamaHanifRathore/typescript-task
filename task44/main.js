function createSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    items.map(function (item) { return console.log("Sandwich includes ".concat(item)); });
}
createSandwich("onion", "ketchup", "chicken");
createSandwich("bread", "beaf");
createSandwich("vegiees", "bread");
