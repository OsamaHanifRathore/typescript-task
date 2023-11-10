var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function car_details(manufacture, model) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var car = {
        manufacture: manufacture,
        model: model,
    };
    if (args != undefined) {
        args.map(function (item) {
            car = __assign(__assign({}, car), item);
        });
    }
    return car;
}
console.log(car_details("suzuki", "1992", { color: 'red', ac: true }));
console.log(car_details("toyota", "2019", { color: 'red', ac: true, transmission: "auto" }));
