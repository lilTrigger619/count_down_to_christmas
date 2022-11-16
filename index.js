const Days = document.querySelector("#days");
const Hours = document.querySelector("#hours");
const Minutes = document.querySelector("#minutes");
const Seconds = document.querySelector("#seconds");


const CountDown = ()=>{
  let chris_year;
  const present_date = new Date();
  let compare = new Date("25 December "+present_date.getFullYear());
  //checking if today is chrismas, if that count from next year.
  compare.toDateString() == present_date.toDateString() ?
    chris_year = (present_date.getFullYear() + 1):
    chris_year = present_date.getFullYear();
  const christmas = "25 December "+chris_year;
  let diff = new Date(christmas) - present_date;
  let seconds_count = diff / 1000;
  let days_rem = Math.floor(seconds_count / 3600 / 24);
  let hours_rem = Math.floor(seconds_count / 3600) % 24;
  let minutes_rem = Math.floor(seconds_count / 60 % 60); 
  let seconds_rem = Math.floor(seconds_count % 60)
  Days.innerHTML = days_rem;
  Hours.innerHTML = hours_rem;
  Minutes.innerHTML = minutes_rem;
  Seconds.innerHTML = seconds_rem;

}

setInterval(CountDown, 1000);

