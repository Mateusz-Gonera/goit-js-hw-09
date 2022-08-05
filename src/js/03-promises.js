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
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay} ms`);
  } else {
    // Reject
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay} ms`);
  }
}
let ms = 1;
form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  let firstSet = setTimeout(() => {
    console.log(`${ms}`);
      let secondSet = setInterval(() => {
        ms += 1;
        if (ms <= Number(form.elements.amount.value)) {
          console.log(`${ms}`);
        } else {
          clearInterval(secondSet);          
        };
      }, Number(form.elements.step.value))      
    }, Number(form.elements.delay.value))  
  
})


// console.log(Number(form.elements.amount.value));