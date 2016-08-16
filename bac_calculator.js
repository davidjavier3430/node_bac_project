var prompt = require('prompt-sync')();
var colors = require('colors');
var clear = require('clear');

function bacCalculator(G, A, W, T) {
  if (G.toLowerCase() === "male") {
    G = 0.73;
  } else if (G.toLowerCase() === "female") {
    G = 0.66;
  }
    return (A * 5.14 / W * G) - 0.015 * T;
}

var valueSelect = process.argv[2];

if (valueSelect === "bac") {
  clear();
  var Name = String(prompt("What is your Name?"));
  var G = String(prompt("Enter your gender?"));
  var A = Number(prompt("Enter Total alcohol consumed, in ounces (oz)?"));
  var W = Number(prompt("Enter your Body weight, in pounds (lbs)?"));
  var T = Number(prompt("Enter a time passed since drinking, in hours?"));
  var resultBac = bacCalculator(G, A, W, T);

  if (resultBac >= 0.08) {
      console.log(Name + " your (Blood Alcohol Content) is: " + resultBac.toString().slice(0,4) + "%" + " Legally Drunk Driver".red);
   } else if (resultBac <= 0.08) {

   } {
     console.log(Name + " your (Blood Alcohol Content) is: " + resultBac.toString().slice(0,4) + "%" + " Safe driver".green);
   }

} else {
  console.log("Need your bac(Blood Alcohol Content)? Easy, select a bac command and answers the question :)".yellow);
}

 // function runApp() {
 //   stop = true;
 //   if (valueSelect === "exit") {
 //     this.stop = false;
 //   }
 //   stop = false;
 // }
 //
 // var stop = true;
 //
 // while (stop) {
 //   runApp();
 // }
