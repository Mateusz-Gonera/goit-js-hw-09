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
  
  const firstSet = setTimeout(() => {console.log("first")}, form.elements.delay.value);
  const timerSet = setInterval(() => { console.log("kolejne") }, form.elements.step.value);
  event.currentTarget.reset();
})


console.log(form.elements.amount.value);