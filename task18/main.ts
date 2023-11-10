let locations:String[] = ["Maldives" , "USA" , "Italy" , "Islamabad" , "Germany" , "Plastine"];

console.log("original array" , locations);

let locationsCopy:String[] = locations.slice();

locationsCopy.sort();

console.log("sorted location" , locationsCopy);
console.log("original array" , locations);

console.log("reverse list",locationsCopy.reverse());
console.log("original array" , locations);

locations.reverse();
console.log("original reverse array" , locations);


locations.reverse();

console.log("back to original state" , locations);

locations.sort();

console.log("original array sorted" , locations);

locations.reverse();

console.log("original sorted array reversed " , locations);
