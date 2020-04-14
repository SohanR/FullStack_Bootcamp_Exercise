var name = prompt("Enter Your Name");

var firstCha = name.slice(0, 1);

var capitalCha = firstCha.toUpperCase();

var restCha = name.slice(1, name.length);

var lowerCha = restCha.toLocaleLowerCase();

document.write("Hello " + capitalCha + lowerCha);
