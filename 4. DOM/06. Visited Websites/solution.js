// Task 7* Visited Sites
// In this problem, you should create a functionality that keeps track of how many times a
// specific site has been visited.

function solve(){
  var softuniCounter = 1;
  document.querySelector('#page1 > div > div:nth-child(1) > a').onclick = function() {
  softuniCounter++;
  document.querySelector('#page1 > div > div:nth-child(1) > p').innerHTML = 'visited ' + softuniCounter + ' times';
  }
  var googleCounter = 2;
  document.querySelector('#page1 > div > div:nth-child(2) > a').onclick = function() {
  googleCounter++;
  document.querySelector('#page1 > div > div:nth-child(2) > p').innerHTML = 'visited ' + googleCounter + ' times';
}
var youtubeCounter = 4;
  document.querySelector('#page1 > div > div:nth-child(3) > a').onclick = function() {
  youtubeCounter++;
  document.querySelector('#page1 > div > div:nth-child(3) > p').innerHTML = 'visited ' + youtubeCounter + ' times';
}
var wikipediaCounter = 4;
  document.querySelector('#page1 > div > div:nth-child(4) > a').onclick = function() {
  wikipediaCounter++;
  document.querySelector('#page1 > div > div:nth-child(4) > p').innerHTML = 'visited ' + wikipediaCounter + ' times';
}
var gmailCounter = 7;
  document.querySelector('#page1 > div > div:nth-child(5) > a').onclick = function() {
  gmailCounter++;
  document.querySelector('#page1 > div > div:nth-child(5) > p').innerHTML = 'visited ' + gmailCounter + ' times';
}
var stackoverflowCounter = 6;
  document.querySelector('#page1 > div > div:nth-child(6) > a').onclick = function() {
  stackoverflowCounter++;
  document.querySelector('#page1 > div > div:nth-child(6) > p').innerHTML = 'visited ' + stackoverflowCounter + ' times';
}
}
