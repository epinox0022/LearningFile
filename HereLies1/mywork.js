/*
let chAr = 'developer';
let x;
x = chAr.substring(0,1) + chAr.substring(1,9).toUpperCase() ;
console.log(x);
*/ 

/* 
const x = Math.floor(Math.random() * 101);
const y = Math.floor(Math.random() * 51);


const reS0 = x + y;
const reS1 = x - y;
const reS2 = x * y;
const reS3 = x / y;
const reS4 = x % y;

console.log(reS0);
console.log(reS1);
console.log(reS2);
console.log(reS3);
console.log(reS4);
*/

/*
const questions = [
  {
    question: "What is the capital of France?",
    options: ["1. Berlin", "2. Madrid", "3. Paris", "4. Rome"],
    answer: 3
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["1. Earth", "2. Mars", "3. Jupiter", "4. Venus"],
    answer: 2
  },
  {
    question: "What is 5 + 7?",
    options: ["1. 10", "2. 11", "3. 12", "4. 13"],
    answer: 3
  }
];

let score = 0;

questions.forEach((q, index) => {
  const userAnswer = parseInt(prompt(`${q.question}\n${q.options.join("\n")}`));
  if (userAnswer === q.answer) {
    alert("Correct!");
    score++;
     } else {
    alert(`Wrong! The correct answer was option ${q.answer}.`);
  }
});

alert(`Quiz finished! Your score: ${score}/${questions.length}`);
*/

/*
const arr = [1,2,3,4,5];
arr.reverse().push(0) + arr.unshift(6);

const arr1 = [1,2,3,4,5];
const arr2 = [5,6,7,8,9,10];

arr1.splice(4);
const arr3 = arr1.concat(arr2);

//s2

arr1.slice(0,4);
const arr3 = [...arr1, ...arr2];

console.log(arr);
console.log(arr3);
*/

/*
let a;

const library = [
{
  title: 'Equinox The Hidden',
  author: 'Mark Fernandez',
  status:
  {own: true, reading: false, read: false},
},
{
  title: 'The Alchemist',
  author: 'Pa',
  status:
  {own: true, reading: true, read: false}
},
];

library[0].status.read = true;
library[1].status.read = true;

const {title: firstBook} = library[0];

const str = JSON.stringify(library);

console.log(firstBook);
*/

/* 
function iLuvU() {
  console.log('I love you');
}
iLuvU();

function pYf(name, age) {
  console.log(`My name is ${name} and I'm ${age} years old.`);
}
pYf('Mark', 19);

function subTract(num1, num2) {
  return num1 - num2;
}
const result = subTract(10, 5);
console.log(result);

function sUm(...numbers) {

  let total = 0;

  for (const num of numbers){
    total = total + num;
  };

  return total;
};
console.log(sUm(1,2,3,4,5));


function randomNum(arr) {
  
  const nums = Math.random();

  const randomIndex = Math.floor(nums * arr.length);
  
  const randomElement = arr[randomIndex];

  console.log(randomElement);
  console.log(nums);
};

randomNum([1,2,3,4,5]);

function add() {

  const x = 40;
  const mar = x + 100;
  return mar;
}


console.log(add());
*/

const getCelsius = (f) => ((f-32) * 5 / 9);
// function getCelsius(f) {
//   return (f - 32) * 5 / 9;
// }
console.log(`The temperature is ${getCelsius(32)}\xB0C`);


let a;

const minMax = (minmax) => {

  const min = Math.min(...minmax);
  const max = Math.max(...minmax);

  return `{min: ${min}, max: ${max}}`;

}

console.log(minMax([1,2,3,4,5]));



(function() {

  let length = prompt('Enter the length of the rectangle: ');
  let width = prompt('Enter the width of the rectangle: ');

  const aRea = length * width;
  console.log(`The area of the rectangle with length ${length} and width ${width} is ${aRea}`);
  
})();













/* */ //Use this for your comments and grouping

// My name is mark Fernandez
// This is my profile object SHeeeshhh
// She's soo beautiful I can't stop looking at her
/*
git init
git add .
git commit -m 'mark'
git push
git pull
*/

