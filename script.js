let n1 = "";
let n2 = "";
let sign = "";
// let finish = false;

const out = document.querySelector(".calculator_screen");
const clear = document.querySelector(".clear");
const value = document.querySelector(".btn");
const action = document.querySelector(".act");

document.querySelector(".buttons").addEventListener("click", (e) => {
  if (!e.target.classList.contains("btn")) return;
  if (e.target.classList.contains("clear")) {
    n1 = "";
    n2 = "";
    sign = "";
    finish = false;
    out.textContent = 0;
    console.log(0);
    return;
  }
  if (e.target.classList.contains("number")) {
    if (n2 === "" && sign === "") {
      n1 += e.target.getAttribute("data-value");
      out.innerHTML = n1;
    } else if (n1 !== "" && n2 !== "" && finish) {
      n2 = e.target.getAttribute("data-value");
      finish = false;
      out.innerHTML = n2;
    } else {
      n2 += e.target.getAttribute("data-value");
      out.innerHTML = n2;
    }
  }

  if (e.target.classList.contains("act")) {
    sign = e.target.getAttribute("data-value");
    out.innerHTML = sign;
    return;
  }
  if (e.target.classList.contains("equal")) {
    if (n2 === '') n2=n1 
    switch (sign) {
      case "+":
        n1 = +n1 + +n2;
        break;
      case "-":
        n1 = n1 - n2;
        break;
      case "*":
        n1 = n1 * n2;
        break;
      case "/":
        n1 = n1 / n2;
        break;
    }
    finish = true;
    out.innerHTML = n1;
  }
  if (out.length < 11) {
    
  }
});
