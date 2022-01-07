alert("Vous me direz ce que vous avez pensé de ce roman... écrit alors que j'étais encore à l'hôpital :O . Merci! : jammie.lacc@outlook.com");

let now = new Date();

let days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
let day = days[now.getDay()];

let Hours = now.getHours();
if (Hours < 10) {
Hours = `0${Hours}`;
}
let Minutes = now.getMinutes();
if (Minutes < 10) {
Minutes = `0${Minutes}`;
}
let today = now.getDate();

let months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
let Month = months[now.getMonth()];

let dayElement = document.querySelector("#day");
dayElement.innerHTML = day;
let hour = document.querySelector("#hour");
hour.innerHTML = Hours;
let minutes = document.querySelector("#minutes");
minutes.innerHTML = Minutes;
let dates = document.querySelector("#date");
dates.innerHTML = today;
let month = document.querySelector("#month");
month.innerHTML = Month;