function createSandwich(...items:string[]){
    items.map((item:string)=>console.log(`Sandwich includes ${item}`) )
}

createSandwich("onion" , "ketchup" , "chicken");
createSandwich("bread" , "beaf");
createSandwich("vegiees" , "bread");