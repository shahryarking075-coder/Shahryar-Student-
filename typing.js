function typeText(element, text, speed = 50){
  element.textContent = '';
  let i = 0;
  const interval = setInterval(() => {
    element.textContent += text[i];
    i++;
    if(i >= text.length) clearInterval(interval);
  }, speed);
}

// Usage Example:
// const el = document.querySelector('.typing-demo');
// typeText(el, 'Welcome to ClearSoch WORLD!', 50);