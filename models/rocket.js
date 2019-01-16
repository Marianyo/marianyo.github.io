"use strict";

class Rocket {
    constructor(code) { //no hay q pasar todas las propiedades! solo lo q interese para inicializar
        this.code = code;
        this.speed = 0;
        this.propellers = new Array();
    }

    addPropeller(code, max) {
        let propeller = new Propeller(code, max);
        this.propellers.push(propeller);
    }


    accelerate() {

        for (const value of this.propellers) {
            console.log(value.code);
            if (value.actual + acc <= value.max) {
                value.actual += acc;
                this.speed += acc;
                console.log("valor actual de potencia de propeler actual es " + value.actual);
            }
            console.log("actualSpeed" + this.speed);    
        }
    }

    decelerate() {

        for (const value of this.propellers) {
            console.log(value.code);
            if (value.actual - acc >= value.min) {
                value.actual -= acc;
                this.speed -= acc;
                console.log("valor actual de potencia de propeler actual es " + value.actual);
            }
            console.log("actualSpeed" + this.speed);
        }
    }

}