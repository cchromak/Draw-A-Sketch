var pen = document.getElementById("pen");
var board = document.getElementById("board");
var count = 200;
var both = 0;
var counter = 0;

function moveLeft(){
    var left = parseFloat(window.getComputedStyle(pen).getPropertyValue("left"));
        if (left > 0 && count > 0) {
            pen.style.left = left - .1 + "px";
            count = count - 1;
        } else if (left > 0) {
            pen.style.left = left - .5 + "px";
        }
}

function moveRight(){
    var left = parseFloat(window.getComputedStyle(pen).getPropertyValue("left"));
    if (left < 780 && count > 0) {
        pen.style.left = left + .1 + "px";
        count = count - 1;
    } else if (left > 0) {
        pen.style.left = left + .5 + "px";
    }
}

function moveUp(){
    var top = parseFloat(window.getComputedStyle(pen).getPropertyValue("top"));
    if (top > 0 && count > 0) {
        pen.style.top = top - .1 + "px";
        count = count - 1;
    } else if (top > 0) {
        pen.style.top = top - .5 + "px";
    }
}

function moveDown(){
    var top = parseFloat(window.getComputedStyle(pen).getPropertyValue("top"));
    if (top < 555 && count > 0) {
        pen.style.top = top + .1 + "px";
        count = count - 1;
    } else if (top > 0) {
        pen.style.top = top + .5 + "px";
    }
}

function changePink(){
    pen.style.backgroundColor = "pink";
    pen.style.border = "none";
}

function changeRed(){
    pen.style.backgroundColor = "red";
    pen.style.border = "none";
}

function changeGreen(){
    pen.style.backgroundColor = "green";
    pen.style.border = "none";
}

function changeYellow(){
    pen.style.backgroundColor = "yellow";
    pen.style.border = "none";
}

function changeBlue(){
    pen.style.backgroundColor = "blue";
    pen.style.border = "none";
}

function changeBrown(){
    pen.style.backgroundColor = "brown";
    pen.style.border = "none";
}

function erase(){
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
    if (counter % 2 == 0 ){
        var dot = document.createElement("div");
        dot.setAttribute("class", "dot");
        var dotLastTop = parseFloat(window.getComputedStyle(pen).getPropertyValue("top"));
        var dotLastLeft = parseFloat(window.getComputedStyle(pen).getPropertyValue("left"));
        dot.style.top = dotLastTop + "px";
        dot.style.left = dotLastLeft + "px";
        dot.style.backgroundColor = pen.style.backgroundColor;
        board.appendChild(dot);
    }
    counter++;
});


document.addEventListener("keyup", event => {
    clearInterval(interval);
    both = 0;
    count = 200;
});