let counter = 1;
setInterval(() => {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 3000); // 3-second interval for each slide