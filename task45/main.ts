function car_details(manufacture:string , model: string , ...args:any[]){
    let car = {
        manufacture,
        model,
    }

    if(args != undefined){
        args.map((item) =>{
            car = {
                ...car,
                ...item
                }
        })
        
    }

    return car;
}

console.log(car_details("suzuki" , "1992" , {color:'red' , ac:true}));
console.log(car_details("toyota" , "2019" , {color:'red' , ac:true , transmission :"auto"}));