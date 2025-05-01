    let friends = ["Hary", "Miles", "Dr. Conner", "Dr. Octavius"];

friends[4] = "Logan";

friends.splice(0, 1, "Harry" + " This is how you spell his name correctly")

console.log(friends)

let goodGuy = {
    fullname: "Peter Parker",
    age: 34,
    superHeroName: "Spider-Man",
    strength: 55,
    speed: 57,
    agility: 58,
    endurance: 54,
    lovesMaryJane: true,
}

console.log(goodGuy);

let badGuy = {
    fullname: "Harry Osborn",
    age: 35,
    villanName: "The Hob Goblin",
    strength: 53,
    speed: 55,
    agility: 51,
    endurance: 57,
    hatesPeter: true,
}

console.log(badGuy);

function heroVsVillan() {
    if (goodGuy.strength >= badGuy.strength) {
        return "Spidey Wins."
    } else
        return "The Hob Goblin Won."

}

console.log(heroVsVillan());

const testGoodGuy = () => {
    if (goodGuy.lovesMaryJane = true) {
        return "He loves her.";
    }
}

console.log(testGoodGuy())

function shootWebs(fights) {
    console.log('Spidey ' + fights)
}

shootWebs("Shoots web")


let a = 'red';
let b = 'blue';

// my way
a = a >= 'red' ? 'blue' : 'red';

b = b >= 'blue' ? 'red' : 'blue';
// udemey's way
// let c = a;
// a = b;
// b = c;

// console.log(c);



console.log(a);
console.log(b);

let hour = 19;

if (hour >= 6 && hour < 12)
    console.log("Good morning");
else if (hour >= 12 && hour < 18)
    console.log("Good afternoon");
else
    console.log('Good evening');


if (goodGuy.strength >= 100)
    console.log(badGuy + " has no chance to defeat Spider-Man");
else if (goodGuy.endurance >= 51 && goodGuy.agility < 51)
    console.log("it will a tough one");
else
    console.log("Peter's got this");





    let schoolOne = "P.S.1";

    function nameSchool() {
        let schoolTwo = "P.S.8";
        console.log(schoolTwo);
        if (schoolTwo == schoolOne)
        return "They're the same?"
        else
            console.log("No they're not")
    }
    
    nameSchool();
    console.log(schoolOne);
