const age = 99;

if(age < 21) {
    console.log("Stay away");
} else if (age > 75) {
    console.log("it's nap time");
} else {
    console.log("partayyy");
}

if(age >= 21) {
    console.log("call and Uber");
} else {
    console.log("bring your fake ID next time");
}

if (authenticated) {  //here it is implied to be true or else use !authenitcated
    console.log("you are logged in");
}

const a = 1;
const b = "1";

// a === b false
// a == b true
// a !== b true
// a != b false

const favoriteColor = "blue";
const favoriteAnimal = "bear";

if(favoriteAnimal === "bear" && favoriteColor === "blue"){  //both must be true
    console.log("welcome to the club");
} else if (favoriteAnimal === "cat" || favoriteColor === "red"){  //either or must be true
    console.log("$500 to join the club");
} else {
    console.log("go away");
}

const hiDiv = document.getElementById("hi");
console.log(hiDiv);

const pie = "peach";
console.log("pie length: ", pie.length); //5
console.log("#3", pie.charAt(2)); //a
console.log('indexof cat', pie.indexOf('cat')); // value of -1
console.log('indexof pea', pie.indexOf('pea')); // value of 0


const quote = 'winter is coming';
const newQuote = quote.replace(/is/g, "ain't");
console.log('newQuote', newQuote);  //replaces is with ain't


//objects
const fancyObject = {};

fancyObject.color = 'red';
fancyObject['number'] = 10;
console.log("fancyObject", fancyObject);