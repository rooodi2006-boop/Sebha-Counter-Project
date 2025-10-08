let count = 0;

const countDisplay = document.getElementById('count');
const increaseBtn = document.getElementById('increase');
const resetBtn = document.getElementById('reset');

increaseBtn.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});

resetBtn.addEventListener('click', () => {
  count = 0;
  countDisplay.textContent = count;
});