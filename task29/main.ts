let fruits : string[] = ["bananas" , "apple" , "oranges"];


console.log("checking aray = " ,fruits.includes("grapes") );

console.log("checking aray = " ,fruits.includes("mango") );

console.log("checking aray = " ,fruits.includes("oranges") );

console.log("checking aray = " ,fruits.includes("apple") );

console.log("checking aray = " ,fruits.includes("melons") );

console.log("checking aray = " ,fruits.includes("bananas") );

if(fruits.includes("grapes") ){
    console.log("You really like grapes!")
}

if(fruits.includes("mango") ){
    console.log("You really like mango!")
}

if(fruits.includes("oranges") ){
    console.log("You really like oranges!")
}


if(fruits.includes("apple") ){
    console.log("You really like apple!")
}


if(fruits.includes("melons") ){
    console.log("You really like melons!")
}

if(fruits.includes("melons") ){
    console.log("You really like bananas!")
}