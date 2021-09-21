//calculator object will hold all of the button info
let calc = {}
let calcScreen = [];


calc = {
    vars: {
        firstValue: '',
        secondValue: '',
        operator: '',
        results: [],
        lastResult: ''
    },
    process: {
        logFirstVal: function() {
            let num = "";
            for (i = 0; i < calcScreen.length; i++) {
                num = num + calcScreen[i];
            }
            calc.vars.firstValue = Number(num)
            //calcScreen = []
            return Number(num);
        },
        logSecondVal: function() {
            //maybe add a catch statement to make sure there is a first value?
            let num = "";
            for (i = 0; i < calcScreen.length; i++) {
                num = num + calcScreen[i];
            }
            calc.vars.secondValue = Number(num)
            //calcScreen = []
            return Number(num)
        },
        doMath: () => {return eval(calc.vars.firstValue + calc.vars.operator + calc.vars.secondValue)},
        updateView: (isResult) => {
            let equalsCheck = (isResult) ? ' = ' : '';
            document.querySelector("#output").innerText = calc.vars.firstValue + ' ' + calc.vars.operator + ' ' + calc.vars.secondValue + equalsCheck + calc.vars.lastResult
        }
    },
    allClear: {
        selector: "#allClear",
        code: function() {
            calcScreen = [];
            calc.vars.firstValue = "",
            calc.vars.secondValue = "",
            calc.vars.operator = "",
            calc.dot.usedInValue = false
        }
    },
    posNeg: {
        selector: "#posNeg",
        code: function() {console.log("posNeg")}
    },
    percent: {
        selector: "#percent",
        code: function() {return console.log("percent")}
    },
    divide: {
        selector: "#divide",
        code: "/"
    },
    multiply: {
        selector: "#multiply",
        code: "*"
    }, 
    subtract: {
        selector: "#subtract",
        code: "-"
    },
    add: {
        selector: "#add",
        code: "+"
    }, 
    equals: {
        selector: "#equals",
        code: () => {
            let result = calc.process.doMath();
            calc.vars.results.push({
                firstValue: calc.vars.firstValue,
                operator: calc.vars.operator,
                secondValue: calc.vars.secondValue,
                result: result
            });
            calc.vars.lastResult = result;
            calc.process.updateView(true);
            calc.vars.firstValue = result;
            calc.vars.secondValue = '';
            calc.vars.operator = '';
            calcScreen = String(result).split('').map(x => Number(x));
        }
    },
    num0: {
        selector: "#num0",
        code: 0
    },
    num1: {
        selector: "#num1",
        code: 1
    },
    num2: {
        selector: "#num2",
        code: 2
    },
    num3: {
        selector: "#num3",
        code: 3
    },
    num4: {
        selector: "#num4",
        code: 4
    },
    num5: {
        selector: "#num5",
        code: 5
    },
    num6: {
        selector: "#num6",
        code: 6
    },
    num7: {
        selector: "#num7",
        code: 7
    },
    num8: {
        selector: "#num8",
        code: 8
    },
    num9: {
        selector: "#num9",
        code: 9
    },
    dot: {
        selector: "#dot",
        usedInValue: false,
        code: function() {
            !!this.usedInValue ? console.log("Nifty. Used!") : console.log("Not used");
        }
    }
}

//calcFunction will (eventually) turn those all into actions
function calcFunction(obj) {
    for (let key in obj) {
        if (obj[key].selector) {
            let buttonEvt = document.querySelector(calc[key].selector) //selects element
            let codeType = calc[key].code;                             //abbreviation for code snippet
            console.log(codeType, buttonEvt);
            /* if (!!codeType && typeof codeType === "function") {        //if code exists & it's a function, run this
                buttonEvt.addEventListener("click", () => {
                    calc[key].code();
                    console.log(`Running the ${key} function`);
                    (calc.vars.firstValue == 0) ? calc.process.logFirstVal() : calc.process.logSecondVal();
                })
            } else if (!!codeType) {
                buttonEvt.addEventListener("click", () => {
                    //console.log(`Entered: ${calc[key].code}`);
                    calcScreen.push(codeType);
                    console.log(calcScreen);
                });
            } */
            buttonEvt.addEventListener("click", () => {
                if (typeof codeType === "function") {
                    calc[key].code();
                }
                if (typeof codeType === "string") {
                    calc.vars.operator = calc[key].code;
                    calcScreen = [];
                    calc.process.updateView();
                }
                if (codeType == 0 && calcScreen.length == 0) {console.log("Ignore this 0")}
                else if (typeof codeType === "number") {
                    calcScreen.push(codeType);
                    (calc.vars.operator) ? calc.process.logSecondVal() : calc.process.logFirstVal();
                    console.log(calcScreen);
                    calc.process.updateView();
                }
            })
        }
    }
};

document.getElementById("status").addEventListener("click", () => {
    console.log("Vars:", calc.vars)
    console.log("Calc Screen:", calcScreen)
})

calcFunction(calc);
