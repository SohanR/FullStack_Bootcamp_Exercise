/* Formula:

        bmi= kg/mitter * mitter

        */

function BMI(kg, m) {
  var kg = prompt("Enter your Weight");
  var m = prompt("Enter your Height");
  var bmi = kg / (m * m);
  return bmi;
}

document.write("Your BMI is:" + BMI());
