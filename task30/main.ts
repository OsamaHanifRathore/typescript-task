let listOfUsers : string[] = ["Admin" , "hpUser" , "dellUser" , "lenovoUser" , "samsungUser" , "AppleUser"];


listOfUsers.map((item:string)=>{
        if(item === "Admin"){
            console.log(" Hello admin, would you like to see a status report?");
        } else{
            console.log(`Hello ${item}, thank you for logging in again.`)
        }
})
