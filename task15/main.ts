let list_of_people_invited : String[] = ["Osama" , "Ali" , "Saif" , "Nabeel"];
let list_of_people_not_invited : String[] = [];

list_of_people_invited.map((item:String) => console.log(`${item} is invited to dinner`));

list_of_people_invited.map((item:String , index:number) =>{ if(index === 2){
    list_of_people_not_invited.push(item)
}});


list_of_people_not_invited.map((item:String) => console.log(`${item} is not invited to dinner`));

list_of_people_invited[2] = "Hamza";
list_of_people_invited.map((item:String) => console.log(`${item} is invited to dinner`));





