// main.js

const add_button = document.getElementById('add-button');
const div_button = document.getElementById('divide-button');

function addNumbers() {
    var first = parseFloat(document.getElementById("variableOne").value);
    var second = parseFloat(document.getElementById("variableTwo").value);

    if (isNaN(first) || isNaN(second)) {
        document.getElementById("result").textContent = "Both inputs must be numbers.";
    } else {
        var result = first + second;
        document.getElementById("result").textContent = first + " + " + second + " = " + result;
    }
}

function divideNumbers() {
    var first = parseFloat(document.getElementById("variableOne").value);
    var second = parseFloat(document.getElementById("variableTwo").value);

    if (isNaN(first) || isNaN(second)) {
        document.getElementById("result").textContent = "Both inputs must be numbers.";
    } else {
        if (second == 0) {
            document.getElementById("result").textContent = "Cannot divide by zero.";
        } else {
            var result = first / second;
            document.getElementById("result").textContent = first + " / " + second + " = " + result;
        }   
    }
};

add_button.addEventListener('click', addNumbers);
div_button.addEventListener('click', divideNumbers);