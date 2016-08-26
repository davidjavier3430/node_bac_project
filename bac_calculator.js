var prompt = require('prompt-sync')();
var colors = require('colors');
var clear = require('clear');

function Bac(config) {
  this.name = config.name || "";
  this.gender = config.gender || "male";
  this.alcohol = config.alcohol || 0;
  this.weight = config.weight || 0;
  this.timeSince = config.timeSince || 0;
  this.genderModifier = 0;
  this.consumption = 0;
  this.canDrive = true;

  return this;
}

Bac.prototype.calculate = function(config) {
  this.alcohol = config.alcohol || this.alcohol;
  this.weight = config.weight || this.weight;
  this.timeSince = config.timeSince || this.timeSince;

  if (this.gender === "male") {
    this.genderModifier = 0.73;
  } else {
    this.genderModifier = 0.66;
  }
  this.consumption = (this.alcohol * 5.14 / this.weight * this.genderModifier);

  return this;
};

Bac.prototype.checkDrive = function() {
  if (this.consumption >= 0.08) {
    this.canDrive = false;
  } else {
    this.canDrive = true;
  }
  return this;
};

var valueSelect = process.argv[2];

if (valueSelect === "bac") {
  clear();
  var name = prompt("What is your Name?");
  var gender  = prompt("Enter your gender?");
  var alcohol = Number(prompt("Enter Total alcohol consumed, in ounces (oz)?"));
  var weight = Number(prompt("Enter your Body weight, in pounds (lbs)?"));
  var timeSince = Number(prompt("Enter a time passed since drinking, in hours?"));

  config = {
    name: name,
    gender: gender,
    alcohol: alcohol,
    weight: weight,
    timeSince: timeSince
  };

  bacResult = new Bac(config);
  bacResult.calculate({}).checkDrive();
  console.log(bacResult);

  if (bacResult.canDrive) {
      console.log(bacResult.name + " your (Blood Alcohol Content) is: " + bacResult.consumption + "%" + " Safe driver".green);
   } else {
      console.log(bacResult.name + " your (Blood Alcohol Content) is: " + bacResult.consumption + "%" + " Legally Drunk Driver".red);
   }

} else {
  console.log("Need your bac(Blood Alcohol Content)? Easy, select a bac command and answers the question :)".yellow);
}

//module.exports = Bac;
