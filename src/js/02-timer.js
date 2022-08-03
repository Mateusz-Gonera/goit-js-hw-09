const timer = document.querySelector(".timer");
const value = Array.from(document.querySelectorAll("span.value"));
const label = Array.from(document.querySelectorAll(".label"));
const field = Array.from(document.querySelectorAll("div.field"));
const input = document.querySelector("#datetime-picker");
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



console.log(startBtn);