const $counter = document.getElementById('counter'); 
const $up = document.getElementById('count-up'); 
const $down = document.getElementById('count-down'); 
const $tenUp = document.getElementById('ten-up'); 
const $tenDown = document.getElementById('ten-down'); 
let count = 0;

$up.addEventListener('click', function () {
  count = count + 1;
  counter.innerHTML = count;
});

$tenUp.addEventListener('click', function () {
  count = count + 10;
  counter.innerHTML = count;
});

$down.addEventListener('click', function () {
  count = count - 1;
  counter.innerHTML = count;
});

$tenDown.addEventListener('click', function () {
  count = count - 10;
  counter.innerHTML = count;
});
