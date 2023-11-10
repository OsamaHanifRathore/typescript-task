let magicinas : string[] = ["magician1" , "magician2" , "magician3"];

function make_great_magician(magicianName:string[]):string[]{
    // console.log(`"Great, ${magicianName}"`);

    return magicianName.map((magic: string) => `"Great , ${magic}"`)
}


let duplicate_list : string[]  = make_great_magician(magicinas);

console.log("original = " , magicinas);
console.log("duplicate = " , duplicate_list);
