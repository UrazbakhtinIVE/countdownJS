
const days = document.querySelector("#days");
const hours= document.querySelector("#hours");
const minuts = document.querySelector("#minuts");
const seconds = document.querySelector("#seconds");


   
function timer(){

    const curentYear = new Date().getFullYear();
    const nextYear = new Date(`Janury 01 ${curentYear+1} 00:00:00`);
    const curentTime = new Date()
    const diff = nextYear - curentTime;

 //Перевод в секунды/минуты/часы/дни
   // Перевод в дни
   const daysLeft = Math.floor(diff/1000/60/60/24);
   //Перевод в часы
   const hourseLeft = Math.floor(diff/1000/60/60)%24;
   // Перевод минут
   const minutsLeft = Math.floor(diff/1000/60)%60;
   //Перевод в секунды
   const secondsLeft = Math.floor(diff/1000)%60;

    days.textContent = daysLeft;
    hours.textContent = hourseLeft <10 ? '0' + hourseLeft: hourseLeft;
    minuts.textContent = minutsLeft <10 ? '0' + minutsLeft: minutsLeft;
    seconds.textContent = secondsLeft <10 ? '0' + secondsLeft: secondsLeft;
}




setInterval(timer,1000)












