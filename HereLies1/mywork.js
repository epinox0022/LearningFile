/* HYPERTENUSE SOLVER 

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

/* RADIUS CALCULATOR
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

/* NUMBER GENERATOR

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

/*RANDOM NUMBER GENERATOR
const shoNmber = document.getElementById("nmberShow");
const geneRator = document.getElementById("genetor");
const ranBtn = document.getElementById("ranBtn")


ranBtn.onclick = function() {
let mbers = Math.round(Math.random()* 100) +1;
shoNmber.textContent = mbers;

}
*/

// const shoNmber = document.getElementById("ageInputter");
// const intrares = document.getElementById("intrare");
// const evenTus = document.getElementById("Result");
// const evenTsus = document.getElementById("Resulst");



// intrares.onclick = function() {

// // nmber = shoNmber.value;
// // nmber= Number(nmber);

// // if (nmber >= 18) {
// //     evenTus.textContent = "You are an adult";
// // }else {
// //     evenTus.textContent = "You are too young to take a drive Kid!!";
// // };

// if (shoNmber.checked) {
//     evenTus.textContent = "You are an adult";
// }else {
//     evenTus.textContent = "You are too young to take a drive Kid!!";
// };


// };  

// const peCunia = document.getElementById("pecunia");
// const inTrare = document.getElementById("intrare");
// const mars = document.getElementById("marcs");

//   = peCunia.value;
//     nex = Number(nex);  
// peCunia.onclick= function() {
   

//     nex <= 100 ? mars.textContent = "You have discounted!! Congratulations!!" : mars.textContent = "eSorry you're not discounted!!";
// };