function Unicellular(size, lengthOfLife, canTalk, proliferation, core, speed) {
  this.size = size;
  this.canTalk = canTalk;
  this.lengthOfLife = lengthOfLife;
  this.proliferation = proliferation;
  this.core = core;
  this.speed = speed;

  this.eat = function() {
    alert(this.type + " eating");
  }
  this.move = function() {
    alert(this.speed + " of move");
  }
  this.sayHi = function() {
    alert(this.canTalk ? "Hi" : "Can\'t talk");
  }
}

function Seaweed(array, color, canSweam, roots, stem, canBreathe) {
  Unicellular.apply(this, array);

  this.color = color;
  this.canSweam = canSweam;
  this.roots = roots;
  this.stem = stem;
  this.canBreathe = canBreathe;

  this.sweam = function() {
    alert(canSweam ? "Swimming" : "I can\'t sweam");
  }

  this.breathe = function() {
    alert(canBreathe ? "Breathe" : "I can\'t breathe");
  }

  this.knowColor = function() {
    alert(this.color);
  }
}

function Fish(array, haveFin, finCount, eyesCount, canOar) {
  Seaweed.apply(this, array);

  this.haveFin = haveFin;
  this.finCount = finCount;
  this.eyesCount = eyesCount;
  this.canOar = canOar;
  
  this.soon = function() {
    alert("I can see");
  }

  this.oar = function() {
    alert(canOar ? "I am oar" : "I can\'t oar");
  }
}

function Amphibians(array, canCrawl, canJump, canWalk) {
  Fish.apply(this, array);

  this.canCrawl = canCrawl;
  this.canJump = canJump;
  this.canWalk = canWalk;

  this.crawl = function() {
    alert(canCrawl ? "I crawling" : "I can\'t crawling");
  }

  this.jump = function() {
    alert(canJump ? "Jumping" : "I can\'t jump");
  }

  this.walk = function() {
    alert(canWalk ? "Walking" : "I can\'t walk");
  }
}

function Land() {

}

function Predators() {

}

function Human() {

}

var unicellular = new Unicellular(0, "100 year", false, "Twice", "have", "very slow");

var seaweedArray = [1, "200 year", false, "Twice", "have", "slow"]
var seaweed = new Seaweed(seaweedArray, "green", true, "may be", "have", true);

var fishChildArray = [2, "7 year", false, "Caviar", "have", "slow-middle"];
var fishSameArray = [fishChildArray, "grey", false, "not have", "have", true];
var fish = new Fish(fishSameArray, true, 4, 2, true);


var amphibiansFirstChildArray = [2, "10 year", false, "Caviar", "have", "slow-middle"];
var amphibiansSecondChildArray = [amphibiansFirstChildArray, "brown", false, "not have", "have", true];
var amphibiansThirdChildArray = [amphibiansSecondChildArray, true, 4, 2, true];
var amphibians = new Amphibians(amphibiansThirdChildArray, true, true, false);


console.log(unicellular);
console.log(seaweed);
console.log(fish);
console.log(amphibians);