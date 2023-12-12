const container = document.getElementById('grid-container');
const numbers = Array.from({ length: 12 }, (_, index) => index + 1);
let clickedNumbers = [];
 
for (let i = 0; i < 12; i++) {
  let pos1 = Math.floor(Math.random() * 12);
  let pos2 = Math.floor(Math.random() * 12);
  let temp = numbers[pos1];
  numbers[pos1] = numbers[pos2];
  numbers[pos2] = temp;
}
 
for (let i = 0; i < 12; i++) {
  const box = createBox(numbers[i]);
  container.appendChild(box);
}
 
function createBox(number) {
  const box = document.createElement('div');
  box.classList.add('box');
  box.innerHTML = number;
 
  box.addEventListener('click', function () {
    if (parseInt(box.innerHTML) === clickedNumbers.length + 1) {
      clickedNumbers.push(parseInt(box.innerHTML));
      box.style.visibility = 'hidden';
 
      if (clickedNumbers.length === numbers.length) {
        alert('Gratulálok! Nyertél!');
        location.reload();
      }
    } else {
      alert('Rossz sorrend! Próbáld újra!');
      location.reload();
    }
  });
 
  return box;
}
