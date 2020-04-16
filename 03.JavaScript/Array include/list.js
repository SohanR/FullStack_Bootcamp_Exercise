var list = ["Rahim", "Karim", "Jodu", "Modu"];

var name = prompt("Enter your Name");

if (list.includes(name)) {
  document.write("Hey " + name + " welcome to the Party!");
} else {
  document.write("Sorry " + name + " maybe next time!");
}
