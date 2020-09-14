const container = document.querySelector(".container");
let size = 10; //prompt("Which size?");
numbers = [];

const changeGridColor = (col) => {
  const overMouse = document.querySelectorAll(".gridItems");
  overMouse.forEach((box) => {
    box.addEventListener("mouseover", (e) => {
      box.style.backgroundColor = col;
    });
  });
};

const randomColor = () => {
  const overMouse = document.querySelectorAll(".gridItems");
  overMouse.forEach((box) => {
    box.addEventListener("mouseover", (e) => {
      ran =
        "rgb(" +
        Math.floor(Math.random() * 256) +
        "," +
        Math.floor(Math.random() * 256) +
        "," +
        Math.floor(Math.random() * 256) +
        ")";
      box.style.backgroundColor = ran;
    });
  });
};

const addShade = () => {
  const overMouse = document.querySelectorAll(".gridItems");
  overMouse.forEach((box) => {
    let r = 247;
    let g = 235;
    let b = 233;
    base = `rgb(${r}, ${b}, ${g})`;
    box.addEventListener("mouseover", (e) => {
      box.style.backgroundColor = `rgb(${(r -= 10)}, ${(b -= 10)}, ${(g -= 10)})`;
      console.log(box.style.backgroundColor);
    });
  });
};

const createGrid = (size) => {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let s = 0; s < size * size; s++) {
    const gridItems = document.createElement("div");
    gridItems.classList.add("gridItems");
    container.append(gridItems);
  }
  changeGridColor("salmon");
};

createGrid(size);

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

const colors = document.getElementById("colors");
colors.addEventListener("click", (e) => {
  changeGridColor(randomColor());
});

const shades = document.getElementById("shades");
shades.addEventListener("click", (e) => {
  changeGridColor(addShade());
});

const button = document.getElementById("button");
const reset = () => {
  button.addEventListener("click", (e) => {
    window.location = "";
  });
};

reset();
