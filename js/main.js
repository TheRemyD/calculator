let displayCurrent = document.querySelector('.display__current');
const body = document.querySelector("body");

const buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach(element => element.addEventListener('click', calculator));

function calculator() {
  console.log(this.innerText);

  switch (this.dataset.type) {
    case "system": {
      (this.dataset.value === "C") ? clear() : backspace();
      break;
    }
    case "number": {
      if (testForZero()) {
          displayCurrent.innerText = this.innerText;
      } else if (testForLength()) {
          displayCurrent.innerText += this.innerText;
      }
      break;
    }
    case "operator": {
      // TODO: add operator logic.
      break;
    }
  }
  overNineThousand();
}

function clear() {
  displayCurrent.innerText = "0";
  overNineThousand();
}

function backspace() {
  displayCurrent.innerText = displayCurrent.innerText.slice(0, -1);
  if (displayCurrent.innerText === "") displayCurrent.innerText = "0";
  overNineThousand();
}

function testForZero() {
  return (displayCurrent.innerText === "0");
}

function testForLength() {
  return (displayCurrent.innerText.length < 7)
}

function overNineThousand() {
  if (displayCurrent.innerText > 9000) {
    body.classList.add("over__nine__thousand");
  } else {
    body.classList.remove("over__nine__thousand")
  }
}