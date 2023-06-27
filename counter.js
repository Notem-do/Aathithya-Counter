let counter = 0;
  
const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const ding = document.getElementById('Ding');
const audio = new Audio('My Movie 1.m4a');
const resetBtn = document.querySelector('#reset');
  
// To increment the value of counter
incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
});
  
//To DING!
ding.addEventListener('click', () => {
    let audio = new Audio('My Movie 1.m4a');
    audio.play();
    audio.remove();
});


// To decrement the value of counter
decrementBtn.addEventListener('click', () => {
    counter--;
    counterValue.innerHTML = counter;
});
  
// To reset the counter to zero
resetBtn.addEventListener('click', reset);
  
function reset() {
    counter = 0;
    counterValue.innerHTML = counter;
}