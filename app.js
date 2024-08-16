let date = document.querySelector("#date");
let month = document.querySelector("#month");
let year  = document.querySelector("#year");
let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");

let current_data = new Date();
console.dir(current_data);

date.innerText = current_data.getDate();
month.innerText = current_data.getMonth();
year.innerText = current_data.getFullYear();
hour.innerText = current_data.getHours();
minute.innerText = current_data.getMinutes();
