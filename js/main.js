const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}


/*
Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.
*/
console.log( "Empire State Building Height:", empireStateBuilding.height );
console.log( "Empire State Building Square Feet:", empireStateBuilding.squareFeet );


/*
Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with the keys as their values. Use those variables to look up the values.
*/
const properties = [ "stories", "address", "constructionDate", "cost", "owner", "eastWestLength", "northSouthLength", "architect" ];

for ( var i = 0; i < properties.length; i++ ) {
    console.log( "Empire State Building ", properties[i], ":", empireStateBuilding[ properties[i] ] );
}

