// Sidebar Menu Smooth Navigation
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const href = item.getAttribute('href');
    window.location.href = href;
  });
});

// Quick Access Buttons
const quickBtns = document.querySelectorAll('.btn');

quickBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.style.transform = "scale(1.05)";
    setTimeout(() => btn.style.transform = "scale(1)", 200);
  });
});