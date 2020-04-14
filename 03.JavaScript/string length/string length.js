var tweet = prompt("Enter Tweet");
var tweetcount = tweet.length;
var tweetleft = 180 - tweetcount;

document.write(tweet + "<br>");
document.write(
  "you have " + tweetcount + " character and " + tweetleft + " left"
);
