let slider = document.querySelector('.slider');
function colorize() {
  let red = document.querySelector('.red').value;
  let green = document.querySelector('.green').value;
  let blue = document.querySelector('.blue').value;
  let rgb = 'rgb(' + red + ',' + green + ',' + blue + ')';

  document.querySelector('.red-value').value = red;
  document.querySelector('.green-value').value = green;
  document.querySelector('.blue-value').value = blue;
  document.querySelector('.color').style.background = rgb;
  document.querySelector('.rgb').innerHTML = rgb;
}

slider.addEventListener('change', colorize);
