console.log("CalcOps script is running!")

/* const allClear = document.querySelector("allClear");
const posNeg = document.querySelector("posNeg");
const percent = document.querySelector("percent");
const divide = document.querySelector("divide");
const num7 = document.querySelector("num7");
const num8 = document.querySelector("num8");
const num9 = document.querySelector("num9");
const multiply = document.querySelector("multiply");
const num4 = document.querySelector("num4");
const num5 = document.querySelector("num5");
const num6 = document.querySelector("num6");
const subtract = document.querySelector("subtract");
const num1 = document.querySelector("num1");
const num2 = document.querySelector("num2");
const num3 = document.querySelector("num3");
const add = document.querySelector("add");
const num0 = document.querySelector("num0");
const dot = document.querySelector("dot");
const equals = document.querySelector("equals"); */

//calculator object will hold all of the button info
let calc = {}
console.log(calc, typeof calc)
calc= {
    allClear: [document.getElementById("allClear"),function() {return console.log("cleared")}],
    posNeg: [document.getElementById("posNeg"), function(x) {x = -(x); return number}],
    percent: [document.getElementById("percent"), function() {console.log("")}],
    divide: [document.getElementById("divide"), function() {console.log("")}],
    multiply: [document.getElementById("multiply"), function() {console.log("")}],
    subtract: [document.getElementById("subtract"), function() {console.log("")}],
    add: [document.getElementById("add"), function() {console.log("")}],
    equals: [document.getElementById("equals"), function() {console.log("")}],
    num0: [document.getElementById("num0"),"0"],
    num1: [document.getElementById("num1"),"1"],
    num2: [document.getElementById("num2"),"2"],
    num3: [document.getElementById("num3"),"3"],
    num4: [document.getElementById("num4"),"4"],
    num5: [document.getElementById("num5"),"5"],
    num6: [document.getElementById("num6"),"6"],
    num7: [document.getElementById("num7"),"7"],
    num8: [document.getElementById("num8"),"8"],
    num9: [document.getElementById("num9"),"9"],
    dot: [document.getElementById("dot"),"."],
}

console.log(calc.allClear);

//calcFunction will (eventually) turn those all into actions
function calcFunction(obj) {
    for (let key in obj) {
        for (let props of calc[key]) {
            console.log(props);
            document.addEventListener(props)
        }
    }
};

calcFunction(calc)