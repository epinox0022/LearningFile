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

const arr = [1,2,3,4,5];

arr.reverse().push(0);
arr.unshift(6);

console.log(arr);

const arr1 = [1,2,3,4,5]
const arr2 = [5,6,7,8,9,10]

const arr3 = arr1.concat(arr2);

console.log(arr3);


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

