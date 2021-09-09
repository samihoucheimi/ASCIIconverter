const number = document.querySelector('#number');
const shiftWarning = document.querySelector('#shiftwarning');
const capslockwarning = document.querySelector('#capslockwarning');
const adderBttn = document.querySelector('#adder');

var topdistance = 0;
var leftdistance = 0;
var pressedKey = '';
var limit = 0;
var numberofdivs = 0;

const windowwidth = window.innerWidth;
const windowheight = window.innerHeight;

window.addEventListener('keypress', function(event) {
    key = event.key;
    pressedKey = event.key;
    number.value = key.charCodeAt(0);
    number.innerHTML = key.charCodeAt(0);
})

window.addEventListener("keydown", function(event) {

    // If "caps lock" is pressed, display the warning text
    if (event.getModifierState("CapsLock")) {
      capslockwarning.style.display = "block";
    } else {
      capslockwarning.style.display = "none"
    }
});

window.addEventListener("keydown", function(event) {

    // If "shift" is pressed, display the warning text
    if (event.keyCode === 16 || event.charCode === 16) {
      shiftwarning.style.display = "block";
    }
});

window.addEventListener("keyup", function(event) {

    // If "shift" is pressed, display the warning text
    if (event.keyCode === 16 || event.charCode === 16) {
      shiftwarning.style.display = "none";
    }
});

adderBttn.addEventListener('click', function() {
    if (number.value && numberofdivs <60) {

        var div = document.createElement('div');
        div.innerHTML = `'` + pressedKey + `' <=> `  + number.value;
        div.className = 'memory';
        div.style.height = `${windowheight/10}`;
        
        if(numberofdivs < 30) {
            div.style.top = `${(numberofdivs*(windowheight/10) % windowheight) +10}px`;
            div.style.left=`${(Math.floor(leftdistance/10) * (windowwidth/10))+10}px`;
        } else if (numberofdivs >= 30) {
            div.style.top = `${(numberofdivs*(windowheight/10) % windowheight) +10}px`;
            div.style.left=`${(Math.floor(leftdistance/10) * (windowwidth/10)) + 0.4 * windowwidth}px`;
        }
        
        topdistance += 0.1 * windowheight;
        leftdistance += 1;
        numberofdivs += 1;
        document.body.appendChild(div); 
    }
}, false);