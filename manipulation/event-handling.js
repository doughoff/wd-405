// event-handling.js
// centriq.com

// change text of headline when document gets clicked

function changeHeadline() {
    var headline = document.querySelector('h1.message.white');
    headline.innerHTML = 'This <br>has been<br>clicked.';
}
// document.onclick = changeHeadline;
var headline = document.querySelector('h1.message.white')
headline.onclick = changeHeadline;

// change anything clicked on to a static piece of text
function changeAnyInnerHtml(event) {
    console.log(event.target);
    event.target.innerHTML = 'This <br>has been<br>clicked.';
}
document.onclick = changeAnyInnerHtml;

// show the current location of the cursor before the H1 text as x,y
var headlineText = document.querySelector('h1.message.white').innerHTML;
function updateHeadlineText(event){
    var headline = document.querySelector('h1.message.white');
    headline.innerHTML = event.x + ','+ event.y + headlineText;
}
document.onmousemove = updateHeadlineText;