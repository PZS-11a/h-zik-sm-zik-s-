const container = document.getElementById('grid-container');

for (let i = 0; i < 12; i++) {
  const box = document.createElement('div');
  box.classList.add('box');
  box.innerHTML = 'A';
  container.appendChild(box);
}
