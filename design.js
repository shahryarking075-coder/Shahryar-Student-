const designBtns = document.querySelectorAll('.tool-card .btn');
designBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    alert(`Launching ${btn.parentElement.querySelector('h3').textContent}...`);
  });
});