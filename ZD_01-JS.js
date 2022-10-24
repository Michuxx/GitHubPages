const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const calculateButton = document.getElementById('calculateButton');
const resultParagraph = document.getElementById('result');

function calculate() {
    const result = variable1.value - -variable2.value;
    resultParagraph.innerHTML = `Twój wynik to: ${result}`;
}

calculateButton.addEventListener('click', calculate);