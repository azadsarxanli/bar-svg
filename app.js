const input = document.querySelector("input");

function percent() {
  let circle2 = document.querySelector(".circle2");
  let percent = document.querySelector("#percent");

  if (input.value === "") {
    percent.innerHTML = "0%";
  } else if (input.value > 100) {
    percent.innerHTML = "Overvalue! ";
    percent.classList.add("danger");

    circle2.style.strokeDashoffset = `calc((100 * 6) - ((100 * 6) * 100) / 100)`;
  } else if (input.value < 0) {
    percent.innerHTML = "Undervalue! ";
    percent.classList.add("danger");
    circle2.style.strokeDashoffset = `calc((100 * 6) - ((100 * 0) * 100) / 100)`;
  } else {
    percent.classList.remove("danger");
    circle2.style.strokeDashoffset = `calc((100 * 6) - ((100 * 6) * ${input.value}) / 100)`;
    percent.innerHTML = `${input.value}%`;
    setInterval(() => {
      // alert();
    }, 1000);
  }
}

input.addEventListener("keyup", () => {
  percent();
});
input.addEventListener("click", () => {
  percent();
});
