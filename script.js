const birthday = '28 September 2021';
const daysel = document.getElementById('days');
const hoursel = document.getElementById('hours');
const minutesel = document.getElementById('minutes');
const secondsel = document.getElementById('seconds');
function birthdayCD(){

  const birthdayDate = new Date(birthday);
  const currDate = new Date();

  const totalseconds  = (birthdayDate-currDate)/1000;

  const days = Math.floor(totalseconds /3600 /24);
  const hours = Math.floor(totalseconds /3600) % 24;
  const minutes = Math.floor(totalseconds /60 ) % 60;
  const seconds = Math.floor(totalseconds %60);
console.log(days);
console.log(hours);
console.log(minutes);
console.log(seconds);

  daysel.innerHTML = days;
  hoursel.innerHTML = hours;
  minutesel.innerHTML = minutes;
  secondsel.innerHTML = seconds;
}

birthdayCD();

setInterval(birthdayCD,1000);