//generate random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let IntervalId = null;

const startChangingColor = function () {
  if (!IntervalId) {
    IntervalId = setInterval(changeBGColor, 1000);
  }
  function changeBGColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(IntervalId);
  IntervalId = null; // very important. as it flushes value
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);
