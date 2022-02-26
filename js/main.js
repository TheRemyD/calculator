document.querySelector('#pumpkin').addEventListener('click', makeZero);
document.querySelector('#dominosPizza').addEventListener('click', jumanji);
document.querySelector('#zebra').addEventListener('click', add9);
document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2);
document.querySelector('#theLeonSleepsTonight').addEventListener('click', add9000);

let total = 0;

function makeZero() {
  total = 0;
  displayValue(total);
}

function jumanji() {
  total = total + 3;
  displayValue(total);
}

function add9() {
  total = total + 9;
  displayValue(total);
}

function sub2() {
  total = total - 2;
  displayValue(total);
}

function add9000() {
  total += 9000;
  displayValue(total);
}

function displayValue(total) {
  document.querySelector('#placeToPutResult').innerHTML = total;
}