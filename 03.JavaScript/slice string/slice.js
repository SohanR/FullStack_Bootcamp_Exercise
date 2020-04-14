var tweet = prompt("Enter Tweet");

var slice = tweet.slice(0, 10); // ch aotumatic slice after 10 ch!

var tweetcount = slice.length;
var tweetleft = 10 - tweetcount;

document.write(slice + "<br>");
document.write(
  "you have " + tweetleft + " character and " + tweetcount + " left"
);

// to create this logic  for showing "have 0 and left 10" it took me 10 mins -_- my brain is slow !lmao
