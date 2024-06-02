const day=document.getElementById("day")
const date=document.getElementById("date")
const month=document.getElementById("month")
const year=document.getElementById("year")

const weekDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const months=["January","February","March","April","May","June","July","August","September","Octuber","November","December"]

const time= new Date()

console.log(time)


console.log()
date.innerHTML=time.getDate();
day.innerHTML=weekDays[time.getDay()];
month.innerHTML=months[time.getMonth()];
year.innerHTML=time.getFullYear();


