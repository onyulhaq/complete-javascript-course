let x, y;
let px, py;
px = py = 0;

const materials = {
  file_name: [
    "https://raw.githubusercontent.com/onyulhaq/mirror_trace/master/sample.png",
  ],
};

xstarts: [47, 27, 40, 280, 27, 40, 280, 33];

console.log();

var mywidth = 400;
var myheight = 300;

// Image of cursor
let cursor = document.getElementById("cursor");

// Button 1
let b1 = document.getElementById("b1");

// Button 2
let b2 = document.getElementById("b2");

/* mutex is used to avoid multiple click event from
firing at the same time due to different position
of image cursor and actual cursor
Using mutex avoid any conflicts if original cursor and
image cursor are both on a clickable element
This makes sure only 1 click event is triggered at a time*/

let mutex = false;

/*
The following event is selecting the element
on the image cursor and fires click() on it.
The following event is triggered only when mouse is pressed.
*/
window.addEventListener("mouseup", function (e) {
  // gets the object on image cursor position
  let tmp = document.elementFromPoint(x + px, y + py);
  mutex = true;
  tmp.click();
  cursor.style.left = px + x + "px";
  cursor.style.top = py + y + "px";
});

/* The following event listener moves the image pointer
with respect to the actual mouse cursor
The function is triggered every time mouse is moved */
window.addEventListener("mousemove", function (e) {
  // Gets the x,y position of the mouse cursor
  x = e.clientX;
  y = e.clientY;

  // sets the image cursor to new relative position
  cursor.style.left = px + x + "px";
  cursor.style.top = py + y + "px";
});

/* The following function re-calculates px,py
with respect to new position
Clicking on b1 moves the pointer to b2
Clicking on b2 moves the pointer to b1 */

b1.onclick = function () {
  if (mutex) {
    mutex = false;
    px = b2.offsetLeft - x;
    py = b2.offsetTop - y;
  }
};

b2.onclick = function () {
  if (mutex) {
    mutex = false;
    px = b1.offsetLeft - x;
    py = b1.offsetTop - y;
  }
};
