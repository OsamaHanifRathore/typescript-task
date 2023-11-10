let magicinas : string[] = ["magician1" , "magician2" , "magician3"];

function make_great(magicianName:string){
    console.log(`"Great, ${magicianName}"`);
}


function show_magicians(magiciansList: string[]){
    magiciansList.map((magic:string) => make_great(magic));
}

show_magicians(magicinas);