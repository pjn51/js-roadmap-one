// main.js

const add_button = document.getElementById('add-button');
const div_button = document.getElementById('divide-button');

// definitions
function validateInput(opp, first, second) {
    if (isNaN(first) || isNaN(second)) {
        document.getElementById("result").textContent = "Both inputs must be numbers.";
        return false;
    };

    if (opp === "divide") {
        if (second == 0) {
            document.getElementById("result").textContent = "Cannot divide by zero.";
            return false;
        } else {
            return true;
        }
    }   
}

function operate(opp, first, second) {
    if (opp == "add") {
        var result = first + second;
        document.getElementById("result").textContent = first + " + " + second + " = " + result;
    } else {
        var result = first / second;
        document.getElementById("result").textContent = first + " / " + second + " = " + result;
    }
}

function main(opp, first, second) {
    const valid = validateInput(opp, first, second);
    if (valid == true) {
        operate(opp, first, second);
    } 
}

// execution
add_button.addEventListener('click', function() {
    var first = parseInt(document.getElementById("variableOne").value);
    var second = parseInt(document.getElementById("variableTwo").value);
    main("add", first, second);
});
div_button.addEventListener('click', function() {
    var first = parseInt(document.getElementById("variableOne").value);
    var second = parseInt(document.getElementById("variableTwo").value);
    main("divide", first, second);
});