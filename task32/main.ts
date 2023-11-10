let current_users: string[] = ["Ali" , "Osama" , "Hamza" , "Saif" , "Nabeel"];
let new_users: string[] = ["Anas" , "Umer" , "Usman" ,"osama" , "ali"];


new_users.map((item:string) =>{
    let userNameIsAvailable: boolean = current_users.some(
        (existingUser) => existingUser.toLowerCase() === item.toLowerCase()
    );

    if(userNameIsAvailable){
            console.log(`${item} need to enter new username`);
    }else{
        console.log(`username is available.`);
    }
})