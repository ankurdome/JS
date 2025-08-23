const form = document.querySelector('form');
let bmii = document.querySelector('#bmii');
form.addEventListener('submit', function (e) {
  e.preventDefault(); //to advoid submit that happens on clicking submit

  const height = parseInt(document.querySelector('#height').value); //we dont write it outside event listner to avoid empty value getting stored.
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height == '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight == '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
      results.innerHTML = `<span> ${bmi} </span><br><span> Underweight </span>`;
    } else if (18.6 <= bmi && bmi <= 24.9) {
      results.innerHTML = `<span> ${bmi} </span><br><span> Normal </span>`;
    } else if (24.6 < bmi) {
      results.innerHTML = `<span> ${bmi} </span><br><span> Overweight </span>`;
    }
  }
});
