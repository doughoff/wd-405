
//----------------------------------------------- Pool equipment
var poolBalls = {"white cue ball" : 0}
console.log(poolBalls);

poolBalls.yellow = 1
poolBalls.blue = 2;
console.log(poolBalls);

// for (const key in poolBalls) {
//     if (poolBalls.hasOwnProperty(key)) {
//         const element = poolBalls[key];
//         console.log(key, '=', element);
//     }
// }

for (key in poolBalls){
    console.log(key, '=', poolBalls[key]);
}

equipment = {cue : "cue stick", bridge : "extender stick"}
equipment.balls = poolBalls;

var query = "bridge";
equipment[query]

//--------------------------------------------------Bears
var myBear = {color: 'brown', territory: 'Canada'};
myBear.color
var secondBear = {color: 'white', territory: 'Alaska'};
secondBear.color

var bearISawInCanada = myBear;
bearISawInCanada.territory = 'Alaska';
myBear 
// does myBear change territory?

//-------------------------------- adding functions to objects
function growl(){
    console.log("Grrrrrrrrrrrr");
}
growl();

myBear.makeNoise = growl;
myBear.makeNoise();

//----------------------------------- browser objects
for(key in navigator){
    console.log(key, '=', navigator[key]);
}

for (var key in navigator ) { 
    console.log(key, ' = ', navigator[key], 
    '\n' +  typeof(navigator[key])  ); 
}

// DOM manipulation
// centriq.com site
var aboutUs = document.getElementById('menu-item-67')
aboutUs.innerHTML = "<i>About me</i>";

var h1s = document.getElementsByTagName('h1');
document.getElementsByClassName('section-heading')

// target is img in #what-is-centriq section
// css selector syntax
//   tag name - use the tag name
//   class name - period and a class name
//   id  - # and the id value
//   descendent in an ancestor - ancestor space descendent
//   child in a parent - parent > child
//   attribute - [attribute name = value] or [attribute name]

// tag names
document.querySelector('h1');
document.querySelectorAll('h1')
document.querySelectorAll('h1')[1].innerHTML = 'DH'
// class name
document.querySelectorAll('.section-heading');
// id value
document.querySelectorAll('#what-is-centriq');
// descendant-ancestor
// any h1 nested in a section
document.querySelectorAll('section h1');
// child of parent
document.querySelectorAll('section>div>h1');
// attribute
document.querySelectorAll('[type=text]');

// find img in #what-is-centriq section
// CSS selector: section#what-is-centriq img
// or #what-is-centriq img
document.querySelectorAll('#what-is-centriq img');
// change the image src
document.querySelectorAll('#what-is-centriq img')[0].src = 'a dog URL'

document.querySelectorAll('[alt="governor proclamation problem gambling awareness march 2019"]')[0].src = 'another URL'