const counter = document.getElementById('counter'); 
const up = document.getElementById('countUp'); 
const down = document.getElementById('countDown'); 
const tenUp = document.getElementById('tenUp'); 
const tenDown = document.getElementById('tenDown'); 
const reset = document.getElementById('reset'); 
let count = 0;
const stringArea = document.getElementById('stringArea');

const isShowMessage = () => {
  return count === 0;
}

const showMessage = () => {
  stringArea.innerText = "0なんですけど";
};

const hideMessage = () => {
stringArea.innerText = "";
};

const updateCounter = (num) => {
  count = count + num;
  counter.innerText = count;
  if(isShowMessage()){
    showMessage();
  }else{
    hideMessage();
  };
}

up.addEventListener('click', () => updateCounter(1));
tenUp.addEventListener('click', () => updateCounter(10));
down.addEventListener('click', () => updateCounter(-1));
tenDown.addEventListener('click', () => updateCounter(-10));
reset.addEventListener('click', () => updateCounter(-count)); 
