let car = {
  producer: "Toyota",
  model: "Camry",
  year: 2014,
  speed: 130,
};
function InformationCar() {
  alert(
    "Producer: " +
      car.producer +
      " Model: " +
      car.model +
      " Year: " +
      car.year +
      " Speed: " +
      car.averageSpeed +
      " km/h"
  );
}
InformationCar();

function carTime() {
  let distance = +prompt("What distance did you overcome?");
  let km = distance % car.speed;
  let hours = (distance - km) / car.speed;
  let times = (hours - (hours % 4)) / 4;
  let minutes = Math.round((km * 60) / car.speed);

  console.log(`${hours + times} hours and ${minutes} minutes`);
}

carTime();

//2
let MathDrob = {
  numerator1: 7,
  denominator1: 14,
  numerator2: 3,
  denominator2: 6,
};
function adding() {
  console.log(
    let firstDrob = this.numerator1 / this.denominator1;
      let secondDrob = this.numerator2 / this.denominator2;
      let result1 = firstDrob+secondDrob
      console.log(`Addition:` + res1); 
  );
}
adding();
function minus() {
  alert(
    "Result of subtraction of fractions : " +
      ((MathDrob.numerator1 / MathDrob.denominator1) - (MathDrob.numerator2 / MathDrob.denominator2))
  );
}
minus();


function multy() {
  alert(
    "Result of multiplication of fractions : " +
    ((MathDrob.numerator1 / MathDrob.denominator1) * (MathDrob.numerator2 / MathDrob.denominator2))
  );
}
multy();
function devision() {
  alert(
    "The result of fractions : " +
    ((MathDrob.numerator1 / MathDrob.denominator1) / (MathDrob.numerator2 / MathDrob.denominator2))
  );
}
devision();
