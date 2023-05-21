function search(event) {
    event.preventDefault();
    let searchInput = document.querySelector("##search-form input[type='text']");
    let h2 = document.querySelector("h2");
    h2.innerHTML = (searchInput.value);
    
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);


let now = new Date();
let h3 = document.querySelector("h3");
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let hour = now.getHours();
let minutes = now.getMinutes();
let day = days[now.getDay()];

h3.innerHTML = (day) + ' '  + (hour)  + ':' +  (minutes);