document.body.innerHTML = "This is some content";

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
