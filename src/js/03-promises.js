import Notiflix from 'notiflix';

const labels = Array.from(document.querySelectorAll("label"));
const inputs = Array.from(document.querySelectorAll("input"));
const form = document.querySelector(".form");
const submitBtn = document.querySelector(`button[type="submit"]`);

for (const label of labels) {
  label.style.display = "inline-block";
};

for (const input of inputs) {
  input.style.display = "block";
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const firstSet = setTimeout(() => {
    console.log("first")
    timerSet = setInterval(() => {
      console.log("kolejne")
    }, Number(form.elements.step.value));
  }, Number(form.elements.delay.value));
  
  event.currentTarget.reset();
})


console.log();