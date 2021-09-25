const $counter = document.getElementById('counter'); 
const $up = document.getElementById('count-up'); 
const $down = document.getElementById('count-down'); 
const $tenUp = document.getElementById('ten-up'); 
const $tenDown = document.getElementById('ten-down'); 
const $reset= document.getElementById('reset'); 
let count = 0;

$up.addEventListener('click', function () {
  count = count + 1;
  counter.innerHTML = count;
  string();
});

$tenUp.addEventListener('click', function () {
  count = count + 10;
  counter.innerHTML = count;
  string();
});

$down.addEventListener('click', function () {
  count = count - 1;
  counter.innerHTML = count;
  string();
});

$tenDown.addEventListener('click', function () {
  count = count - 10;
  counter.innerHTML = count;
  string();
});

$reset.addEventListener('click', function () {
  count = 0;
  counter.innerHTML = count;
  string();
});

const stringArea = document.getElementById('stringArea');
const string = () => {
  if(count == 0){
    stringArea.innerHTML = "0なんですけど";
  }else{
    stringArea.innerHTML = "  ";
  };
};
