let history = "";
function display(value) {
    document.getElementById("no").value += value;
    addToHistory(value);
}

function calculate() {
    let a = document.getElementById("no").value;
    if (a == 0) {
        document.getElementById("no").value = 0;
    }
    else {
        let b = eval(a)
        document.getElementById("no").value = b;
        addToHistory('=' + b);
    }

}

function clearscreen() {
    document.getElementById("no").value = "";
    addToHistory("\n");
}

function addToHistory(value) {
    history += value;
    document.getElementById("hist").innerText = history;
}

function clearhistory() {
    document.getElementById("hist").innerText = "";
}