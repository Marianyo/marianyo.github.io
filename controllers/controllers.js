"use strict";


window.onload = start;


let rocket1 = new Rocket("Titan-Centaur");
let rocket2 = new Rocket("Apollo 11");

rocket1.addPropeller("prop1", 10);
rocket1.addPropeller("prop2", 30);
rocket1.addPropeller("prop3", 80);

rocket2.addPropeller("prop4", 30);
rocket2.addPropeller("prop5", 40);
rocket2.addPropeller("prop6", 50);
rocket2.addPropeller("prop7", 50);
rocket2.addPropeller("prop8", 30);
rocket2.addPropeller("prop9", 10);

var acc = 10;


function start() {
    document.getElementById("rocketCard__Button1").onclick = showImage1;
    document.getElementById("rocketCard__Button2").onclick = showImage2;
    document.getElementById("rocketCard__txt-Button1").onclick = function () {
        printInfo(rocket1);
    };
    document.getElementById("rocketCard__txt-Button2").onclick = function () {
        printInfo(rocket2);
    };

    document.getElementById("velocityUp").onclick = function () {
        accelerate(rocket1);
    };
    document.getElementById("velocityUp2").onclick = function () {
        accelerate(rocket2);
    };

    document.getElementById("velocityDown").onclick = function () {
        decelerate(rocket1);
    };
    document.getElementById("velocityDown2").onclick = function () {
        decelerate(rocket2);
    };
}



function accelerate(rocket) {
    rocket.accelerate();

    for (const value of rocket.propellers) {
        console.log(value.code);

        barInside(value);

        console.log("actualSpeed" + rocket.speed);
    }

    document.getElementById("speedrocket" + rocket.code).innerHTML = rocket.speed + "km/h";
}

function decelerate(rocket) {
    rocket.decelerate();

    for (const value of rocket.propellers) {
        console.log(value.code);

        console.log("valor actual de potencia de propeler actual es " + value.actual);
        barInside(value);

        console.log("actualSpeed" + rocket.speed);
    }
    document.getElementById("speedrocket" + rocket.code).innerHTML = rocket.speed + "km/h";
}


function barInside(value) {
    document.getElementById("rocketCard__txt-barInside" + value.code).style.width = ((value.actual / value.max) * 100) + "%";
    document.getElementById("rocketCard__txt-barInside" + value.code).innerHTML = value.actual + "MW";
}



function printInfo(rocket) {
    console.log("entra funcion printInfo");
    var txt = "Rocket " + rocket.code + " has " + rocket.propellers.length + " propellers." + "<br>" + "Propellers have a max power of ";
    for (const value of rocket.propellers) {
        txt += value.max + " ";
    }
    txt += ".";
    document.getElementById("printRocketInfo").innerHTML += "<br>_________________<br>" + txt;

}


function showImage1() {
    document.getElementById("rocketCard__Info1").classList.toggle("rocketCard__Info--visible");
}
function showImage2() {
    document.getElementById("rocketCard__Info2").classList.toggle("rocketCard__Info--visible");
}




