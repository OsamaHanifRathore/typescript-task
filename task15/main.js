var list_of_people_invited = ["Osama", "Ali", "Saif", "Nabeel"];
var list_of_people_not_invited = [];
list_of_people_invited.map(function (item) { return console.log("".concat(item, " is invited to dinner")); });
list_of_people_invited.map(function (item, index) {
    if (index === 2) {
        list_of_people_not_invited.push(item);
    }
});
list_of_people_not_invited.map(function (item) { return console.log("".concat(item, " is not invited to dinner")); });
list_of_people_invited[2] = "Hamza";
list_of_people_invited.map(function (item) { return console.log("".concat(item, " is invited to dinner")); });
