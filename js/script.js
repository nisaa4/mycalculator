let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function calculateResult() {
    try {
        const expression = displayValue.replace(/%/g, '*0.01');
        const result = eval(expression);
        document.getElementById('display').value = result;
        displayValue = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
    }
}
