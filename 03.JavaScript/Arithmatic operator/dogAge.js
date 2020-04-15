var dogAge = prompt("Enter your Dog age");

if (dogAge > 0) {
  var humanAge = (dogAge - 2) * 4 + 21;

  document.write("Your dog is " + humanAge + " years old  in Human age!");
} else {
  document.write("Age cannot be a negative! Enter correct age please.");
}
