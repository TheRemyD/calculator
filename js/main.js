let display = document.querySelector('.display');
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
          display.innerText = this.innerText;
      } else if (testForLength()) {
          display.innerText += this.innerText;
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
  display.innerText = "0";
  overNineThousand();
}

function backspace() {
  display.innerText = display.innerText.slice(0, -1);
  if (display.innerText === "") display.innerText = "0";
  overNineThousand();
}

function testForZero() {
  return (display.innerText === "0");
}

function testForLength() {
  return (display.innerText.length < 7)
}

function overNineThousand() {
  if (display.innerText > 9000) {
    body.classList.add("over__nine__thousand");
  } else {
    body.classList.remove("over__nine__thousand")
  }
}