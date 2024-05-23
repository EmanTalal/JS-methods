let characters = [{
        name: "Eman  ",
        height: "160",
        gender: "female",
        mass: "53",
        eye_color: "brown"
    },
    {
        name: "Abdullah",
        height: "170",
        gender: "male",
        mass: "92",
        eye_color: "brown"
    },
    {
        name: "Nouf",
        height: "155",
        gender: "female",
        mass: "56",
        eye_color: "green"
    },
    {
        name: "Mohamed",
        height: "202",
        gender: "male",
        mass: "80",
        eye_color: "yellow"
    },
    {
        name: "Maha",
        height: "154",
        gender: "famale",
        mass: "60",
        eye_color: "blue"
    }
];


//Get name 
let names = characters.map(character => character.name);
console.log(names);

//Get hinght
let hinght = characters.map(characters => characters.height);
console.log(hinght)

console.log("---------------------------------------------")
let TotalHigth = characters.reduce((sum, character) => sum + parseInt(character.height), 0);
console.log(TotalHigth);

// Sort mass
let sortMass = characters.slice().sort((m1, m2) => m1.mass - m2.mass);
console.log(sortMass);

console.log("-------------------------------------------------------");

//Sort Hight 
const sortHeight = characters.slice().sort((h1, h2) => h1.height - h2.height);
console.log(sortHeight);

//Every 
let massthen40 = characters.every(character => character.mass > 40);
console.log(massthen40);

//Every
let HightSome = characters.every(characters => characters.some < 200)
console.log(HightSome);


console.log("-------------------------------------------------------");

//Some
let Someeyes = characters.some(character => character.eye_color === 'blue');
console.log(Someeyes);

console.log("-------------------------------------------------------");

//Some
let Somehinght = characters.some(characters => characters.height > 210)
console.log(Somehinght)

console.log("-------------------------------------------------------");

//filter 
let Filltehight = characters.filter(character => character.height < 200);
console.log(Filltehight);

console.log("-------------------------------------------------------");

//filter 
let Filtermale = characters.filter(character => character.gender === 'male');
console.log(Filtermale);