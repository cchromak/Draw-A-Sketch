var pen = document.getElementById("pen");
var board = document.getElementById("board");
var count = 200;
var both = 0;
var counter = 0;
var paint = 0;


function moveLeft(){
    var left = parseFloat(window.getComputedStyle(pen).getPropertyValue("left"));
        if (left > 0 && count > 0){
            pen.style.left = left - .1 + "px";
            count = count - 1;
        
        } else if (left > 0) {
            pen.style.left = left - .5 + "px";
        }
}

function moveRight(){
    var left = parseFloat(window.getComputedStyle(pen).getPropertyValue("left"));
    if (left < 770 && count > 0) {
        pen.style.left = left + .1 + "px";
        count--;
    } else if (left < 770) {
        pen.style.left = left + .5 + "px";
    }
}

function moveUp(){
    var top = parseFloat(window.getComputedStyle(pen).getPropertyValue("top"));
    if (top > 0 && count > 0) {
        pen.style.top = top - .1 + "px";
        count--;
    } else if (top > 0) {
        pen.style.top = top - .5 + "px";
    }
}

function moveDown(){
    var top = parseFloat(window.getComputedStyle(pen).getPropertyValue("top"));
    if (top < 565 && count > 0) {
        pen.style.top = top + .1 + "px";
        count--;
    } else if (top < 565) {
        pen.style.top = top + .5 + "px";
    }
}

function changeSmall() {
    pen.style.height = "10px";
    pen.style.width = "10px";
}

function changeMedium() {
    pen.style.height = "20px";
    pen.style.width = "20px";
}

function changeLarge() {
    pen.style.height = "30px";
    pen.style.width = "30px";
}

function changeWhite(){
    paint = 1;
    pen.style.backgroundColor = "white";
    pen.style.border = "1px solid black";
}

function changeBlack(){
    paint = 1;
    pen.style.backgroundColor = "black";
    pen.style.border = "1px solid white";
}

function changePink(){
    paint = 1;
    pen.style.backgroundColor = "pink";
    pen.style.border = "1px solid black";
}

function changeRed(){
    paint = 1;
    pen.style.backgroundColor = "red";
    pen.style.border = "1px solid black";
}

function changeGreen(){
    paint = 1;
    pen.style.backgroundColor = "green";
    pen.style.border = "1px solid black";
}

function changeYellow(){
    paint = 1;
    pen.style.backgroundColor = "yellow";
    pen.style.border = "1px solid black";
}

function changeBlue(){
    paint = 1;
    pen.style.backgroundColor = "blue";
    pen.style.border = "1px solid black";
}

function changePurple(){
    paint = 1;
    pen.style.backgroundColor = "purple";
    pen.style.border = "1px solid black";
}

function changeBrown(){
    paint = 1;
    pen.style.backgroundColor = "brown";
    pen.style.border = "1px solid black";
}

function changeOrange(){
    paint = 1;
    pen.style.backgroundColor = "orange";
    pen.style.border = "1px solid black";
}

function moveCursor(){
    paint = 0;
    pen.style.backgroundColor ="rgba(0, 0, 0, 0)";
    pen.style.border = "1px solid black";
}

function erase(){
    paint = 1;
    pen.style.backgroundColor = "lightgoldenrodyellow";
    pen.style.border = "1px solid black";
}


document.addEventListener("keydown", event => {
    if (both == 0) {
        both++;
        if(event.key == "ArrowLeft"){
            interval = setInterval(moveLeft, 1);
        }
        if(event.key == "ArrowRight"){
            interval = setInterval(moveRight, 1);
        }
        if(event.key == "ArrowUp"){
            interval = setInterval(moveUp, 1);
        }
        if(event.key == "ArrowDown"){
            interval = setInterval(moveDown, 1);
        }
    }
    if (paint == 1 && counter % 2 == 0 ){
        var dotLastTop = parseFloat(window.getComputedStyle(pen).getPropertyValue("top"));
        var dotLastLeft = parseFloat(window.getComputedStyle(pen).getPropertyValue("left"));
        var dot = document.createElement("div");
        dot.setAttribute("class", "dot");
        dot.style.top = dotLastTop + "px";
        dot.style.left = dotLastLeft + "px";
        dot.style.backgroundColor = pen.style.backgroundColor;
        dot.style.height = pen.style.height;
        dot.style.width = pen.style.width;
        board.appendChild(dot);
        
    }
    counter++;
});


document.addEventListener("keyup", event => {
    clearInterval(interval);
    both = 0;
    count = 200;
});