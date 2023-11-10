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
console.log("I found a bigger dinner table");
list_of_people_invited.unshift("Rehan");
list_of_people_invited.splice(1, 0, "Ammar");
list_of_people_invited.push("Hamza");
console.log("invited meessages");
list_of_people_invited.map(function (item) { return console.log("".concat(item, " is invited to dinner")); });
console.log("I can invite only two people for dinner.");
var removed_user = list_of_people_invited.pop();
if (removed_user !== undefined) {
    console.log("sorry ".concat(removed_user, " i can't invite you at the dinner"));
}
removed_user = list_of_people_invited.pop();
if (removed_user !== undefined) {
    console.log("sorry ".concat(removed_user, " i can't invite you at the dinner"));
}
removed_user = list_of_people_invited.pop();
if (removed_user !== undefined) {
    console.log("sorry ".concat(removed_user, " i can't invite you at the dinner"));
}
removed_user = list_of_people_invited.pop();
if (removed_user !== undefined) {
    console.log("sorry ".concat(removed_user, " i can't invite you at the dinner"));
}
removed_user = list_of_people_invited.pop();
if (removed_user !== undefined) {
    console.log("sorry ".concat(removed_user, " i can't invite you at the dinner"));
}
list_of_people_invited.map(function (item) { return console.log("".concat(item, " is invited to dinner")); });
list_of_people_invited.pop();
list_of_people_invited.pop();
console.log("empty list = ", list_of_people_invited);
