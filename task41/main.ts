let magicinas : string[] = ["magician1" , "magician2" , "magician3"];

function show_magicians(magiciansList: string[]){
    magiciansList.map((magic:string) => console.log(magic));
}

show_magicians(magicinas);