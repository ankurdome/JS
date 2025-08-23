const clock = document.getElementById('clock');
document.querySelector('#clock');

let date = new Date();
console.log(date.toLocaleDateString());

setInterval(function () {
  //this updates the clock each second
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
