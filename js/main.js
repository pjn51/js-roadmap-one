// main.js

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
}