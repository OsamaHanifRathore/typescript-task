var current_users = ["Ali", "Osama", "Hamza", "Saif", "Nabeel"];
var new_users = ["Anas", "Umer", "Usman", "osama", "ali"];
new_users.map(function (item) {
    var userNameIsAvailable = current_users.some(function (existingUser) { return existingUser.toLowerCase() === item.toLowerCase(); });
    if (userNameIsAvailable) {
        console.log("".concat(item, " need to enter new username"));
    }
    else {
        console.log("username is available.");
    }
});
