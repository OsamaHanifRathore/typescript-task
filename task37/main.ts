function make_shirt(size:String = "large"){
    if(size == "large" || size =="Medium"){
        console.log("I love typescript");
    } else{
        console.log(`player is wearing ${size} number shirt`);
    }
}

make_shirt();

