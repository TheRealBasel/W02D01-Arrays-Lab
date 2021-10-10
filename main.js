const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

/* Get array of all names */
let namesArray = characters.map((character) => {
    return character.name
})

console.log ( namesArray );

/* Get array of all heights */

let heightsArray = characters.map((character) => {
    return character.height;
})

console.log ( heightsArray );

/* Get total height of all characters */

let heightTotal = heightsArray.reduce((total, num) => {
    return total + num;
})

console.log ( heightTotal );

/* Get characters with height less than 200 */

let lessHeight = characters.filter((value, key) => {
    return value.height < 200;
})

console.log ( lessHeight );

/* Get all male characters */

let maleCharacters = characters.filter((value, key) => {
    return value.gender == "male";
})

console.log ( maleCharacters );

/* Sort by mass */
let massSortedharacters = characters.sort((a, b) => {
    return a.mass < b.mass;
})

console.log ( massSortedharacters );
/* Sort by height */
let heightSortedharacters = characters.sort((a, b) => {
    return a.height < b.height;
})

console.log ( heightSortedharacters );

/* Does every character have mass more than 40? */
let massMoreThanCharacters = characters.every((value) => {
    return value.mass > 40;
})

console.log ( massMoreThanCharacters );

/* Does every character have mass more than 40? */
let shorterThanCharacters = characters.every((value) => {
    return value.height < 200;
})

console.log ( shorterThanCharacters );

/* Is there at least one character with blue eyes? */
let isThereBlueeyesCharacters = characters.some((value) => {
    return value.eye_color === "blue";
})

console.log ( isThereBlueeyesCharacters );

/* Is there at least one character with blue eyes? */
let isThereTallerCharacter = characters.some((value) => {
    return value.height > 210;
})

console.log ( isThereTallerCharacter );