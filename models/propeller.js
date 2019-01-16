"use strict";

//------------------MODELO PROPELLER-----------------------
class Propeller {
    constructor(code, max) {
        this.code = code;
        this.max = max;
        this.min = 0;
        this.actual = this.min;
    }
}
