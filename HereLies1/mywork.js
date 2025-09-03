/* 
HYPERTENUSE SOLVER 

// const inpttdX = document.getElementById('xInput');
// const inpttdY = document.getElementById('yInput');

// let nmberI;
// let nmberII;

// document.getElementById('Proceed').onclick = function(){

// nmberI  = inpttdX.value;
//   // nmberI = Number(nmberI)
// nmberII  = inpttdY.value;
//   // nmberII = Number(nmberII)
// let sumI = nmberI ** 2 + nmberII ** 2;

// let sum = Math.sqrt(sumI);
// document.getElementById('theValues').innerHTML  = sum;
// };
 */

/* 
RADIUS CALCULATOR
const radiusIn = document.getElementById('RadiusInput');
const radiusBtn = document.getElementById('Intrare');
const seen = document.getElementById('seen');
let radius;
let radii;
 
radiusBtn.onclick = function() {
    radius = radiusIn.value;
    radius = Number(radius);
    radii = 2 * 3.14 * radius;
    seen.textContent = radii
}
*/

/* 
NUMBER GENERATOR

const shoNmber = document.getElementById("nmberShow")
const oneBtn = document.getElementById("clckerBtn1");
const twoBtn = document.getElementById("clckerBtn2");
const thrBtn = document.getElementById("clckerBtn3");

let mbers = 0;

oneBtn.onclick = function (){
    mbers++
    shoNmber.textContent = mbers;
}

twoBtn.onclick = function (){
    mbers= 0
    shoNmber.textContent = mbers;
}

thrBtn.onclick = function (){
    mbers--
    shoNmber.textContent = mbers;
}
*/

/*
RANDOM NUMBER GENERATOR
const shoNmber = document.getElementById("nmberShow");
const geneRator = document.getElementById("genetor");
const ranBtn = document.getElementById("ranBtn")


ranBtn.onclick = function() {
let mbers = Math.round(Math.random()* 100) +1;
shoNmber.textContent = mbers;

}
*/

/* 
const shoNmber = document.getElementById("ageInputter");
const intrares = document.getElementById("intrare");
const evenTus = document.getElementById("Result");
const evenTsus = document.getElementById("Resulst");



intrares.onclick = function() {

nmber = shoNmber.value;
nmber= Number(nmber);

if (nmber >= 18) {
    evenTus.textContent = "You are an adult";
}else {
    evenTus.textContent = "You are too young to take a drive Kid!!";
};

if (shoNmber.checked) {
    evenTus.textContent = "You are an adult";
}else {
    evenTus.textContent = "You are too young to take a drive Kid!!";
};


};  
*/

/*
const marK = {

    mark: 'A',
    score: 90,
    totalScore: 100,
    total: ['100', '90', '80', '70'],
    grade: {
        A: 'Excellent',
        B: 'Very Good',
        C: 'Good',
        D: 'Fair'
    },
};
*/

/*
const mark = [

    {
        emAil: 1,
        reSult: 'Done',
        tYpes: 'Report',
    },
    
    {
        emAil: 2,
        reSult: 'Pending',
        tYpes: 'Document',
    },
];
*/

/*
for(let i = 0; i< 100; i++){
   console.log(`For Loop: ${i}`);
};

let i = 0;
while(i<= 100){
     console.log(`While Loop: ${i}`);
     i++;
}

//forEach, map, filter
mark.forEach(function(mark){
    console.log(mark.email);
});
*/

/*
//Construction Function
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob= new Date(dob);
}

//Instantiate Object
const person1 = new Person('mark', 'Zuckerberg','01-02-2005');
const person2= new Person('mark', 'Zuckerberg', 2005-01-01);

console.log(`This is the name of the person he is ${person1.dob.getFullYear()} he is  ${person1.firstName}`);
*/

/*
// Ternary and Switch Statement
let n;

butOn.onclick = function() {

n = maThin.value;
n = Number(n);
const color = n > 10 ? 'Blue' : 'Red';

switch(color){
    case 'Red':
        aRk.textContent = 'You have a Red color';
        break;
    case 'Blue':
        aRk.textContent = 'You have a Blue color';
        break;
    default:
        console.log('You have no color');
    break;
};
};
*/ 




// Chemistry and Physics Homework Solver
// --------------------------------------

// Part A: Balanced Redox Reactions
const redoxReactions = {
  acidic: [
    "5 H2C2O4 + 2 MnO4^- + 6 H+ → 10 CO2 + 2 Mn2+ + 8 H2O",
    "3 H5IO6 + 2 Cr → 3 IO3^- + 2 Cr3+ + 6 H2O + 4 H+"
  ],
  basic: [
    "3 Br^- + 2 MnO4^- + H2O → 3 BrO3^- + 2 MnO2 + 2 OH^-",
    "3 Se + 4 Cr(OH)3 + 6 OH^- → 3 SeO3^2- + 4 Cr + 6 H2O"
  ]
};

// Part B: Energy Transfer (A = Conduction, B = Radiation, C = Convection)
const energyTransfer = {
  1: "C - Convection (hot water flowing)",
  2: "B - Radiation (sun melts snow)",
  3: "A - Conduction (blacksmith heating metal)",
  4: "A - Conduction (coffee mug warm)",
  5: "B - Radiation (marshmallows toasted)",
  6: "B - Radiation (laser beam)",
  7: "A - Conduction (touching spoon in boiling water)",
  8: "A - Conduction (heat into insulation)",
  9: "B - Radiation (fireplace heating room)",
  10: "C - Convection (water boiling)"
};

// Part C: Voltaic Cell
const voltaicCell = {
  overall: "Cd(s) + Ni2+(aq) → Cd2+(aq) + Ni(s)",
  halfReactions: {
    oxidation: "Cd(s) → Cd2+(aq) + 2e^-",
    reduction: "Ni2+(aq) + 2e^- → Ni(s)"
  },
  electrodes: {
    anode: "Cd (oxidation, negative electrode)",
    cathode: "Ni (reduction, positive electrode)"
  },
  electronFlow: "Electrons flow from Cd electrode (anode) to Ni electrode (cathode)",
  ionMovement: "Cations (Ni2+) migrate to cathode, Anions migrate to anode"
};

// ------------------ OUTPUT ------------------
console.log("=== Part A: Balanced Redox Reactions ===");
console.log("In Acidic Solution:");
redoxReactions.acidic.forEach((eq, i) => console.log(`${i + 1}. ${eq}`));
console.log("In Basic Solution:");
redoxReactions.basic.forEach((eq, i) => console.log(`${i + 1}. ${eq}`));






// const maThin = document.getElementById('Inputter');
// const butOn = document.getElementById('intrare');
// const aRk = document.getElementById('marcs');
/* */ //Use this for your comments and grouping

// My name is mark Fernandez
// This is my profile object SHeeeshhh
// She's soo beautiful I can't stop looking at her