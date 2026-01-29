const scienceBtns = document.querySelectorAll('.tool-card .btn');
scienceBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    alert(`Starting ${btn.parentElement.querySelector('h3').textContent} experiment...`);
  });
});