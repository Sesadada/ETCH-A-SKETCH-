const container = document.querySelector(".container");

let size = 10; //prompt("Which size?");
createGrid(size);

function createGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let s = 0; s < size * size; s++) {
    const gridItems = document.createElement("div");
    gridItems.classList.add("gridItems");
    container.append(gridItems);
  }
  const overMouse = document.querySelectorAll(".gridItems");
  overMouse.forEach((box) => {
    box.addEventListener("mouseover", (e) => {
      box.style.backgroundColor = "salmon";
    });
  });
}

numbers = [];

const checker = (val) => {
  if (isNaN(val)) {
    window.location = "";
  } else {
    createGrid(val);
    event.preventDefault();
    numbers.push(val);
    if (numbers.length > 1) {
      window.location = "";
    }
  }
};

const value = document.getElementById("valueSize");
const getValue = () => {
  value.addEventListener("focus", function () {
    value.setAttribute("placeholder", "");
  });
  value.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      checker(value.value);
    }
  });
};
getValue();

const button = document.querySelector("button");
const reset = () => {
  button.addEventListener("click", (e) => {
    window.location = "";
  });
};

reset();

/*

const value = document.getElementById("valueSize");
const getValue = () => {
  value.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      size = value.value;
      createGrid(size);
      event.preventDefault();
    } else {
      reset();
    }
  });
};
getValue();

*/
