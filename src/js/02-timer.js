import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const timer = document.querySelector(".timer");
const value = Array.from(document.querySelectorAll("span.value"));
const label = Array.from(document.querySelectorAll(".label"));
const field = Array.from(document.querySelectorAll("div.field"));
const input = document.querySelector("input#datetime-picker");
const startBtn = document.querySelector(`button[data-start]`);

timer.style.display = "flex";

for (const fields of field) {
    fields.style.marginRight = "20px";
};
for (const values of value) {
    values.style.display = "block";
    values.style.textAlign = "center";
    values.style.fontSize = "55px";
    values.style.lineHeight = "1.5";    

};
for (const labels of label) {
    labels.style.display = "block";
    labels.style.textAlign = "center";
    labels.style.fontSize = "20px";
    labels.style.textTransform = "uppercase";
    labels.style.lineHeight = "0.2";    
};

startBtn.disabled = true;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
    const todayDate = new Date();
    if (selectedDates[0].getTime() <= todayDate.getTime()) {
        startBtn.disabled = true;
        Notiflix.Notify.failure("Please choose a date in the future", {width: "500px"});
    };
    if (selectedDates[0].getTime() > todayDate.getTime()) {
        startBtn.disabled = false;
        console.log(selectedDates[0]);
        localStorage.setItem("selectedDate", `${selectedDates[0].getTime()}`);
    };    
  },
};

flatpickr(input, options);

const selectDate = localStorage.getItem("selectedDate");
const dateToday = new Date();
const tDate = dateToday.getTime(); 
const ms = selectDate - tDate;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
  return { days, hours, minutes, seconds };
}

startBtn.addEventListener("click", () => {
    const objDate = convertMs(ms);
    
})


