const themeSelect = document.getElementById('themeSelect');
const accentColor = document.getElementById('accentColor');
const fontSize = document.getElementById('fontSize');
const animationsToggle = document.getElementById('animationsToggle');
const saveBtn = document.getElementById('saveSettings');

saveBtn.addEventListener('click', () => {
  const settings = {
    theme: themeSelect.value,
    accent: accentColor.value,
    font: fontSize.value,
    animations: animationsToggle.checked
  };
  localStorage.setItem('userSettings', JSON.stringify(settings));
  applySettings();
  alert('Settings Saved!');
});

function applySettings(){
  const settings = JSON.parse(localStorage.getItem('userSettings'));
  if(!settings) return;
  document.body.style.background = settings.theme === 'gradient' 
    ? 'linear-gradient(135deg, #ff5f6d, #ffc371)'
    : settings.theme === 'dark' ? '#111' : '#fff';
  document.body.style.color = settings.theme === 'dark' ? '#fff' : '#000';
  document.body.style.fontSize = settings.font + 'px';
  // Accent color
  document.querySelectorAll('.btn').forEach(btn => btn.style.backgroundColor = settings.accent);
  // Animations
  document.querySelectorAll('.card, .tool-card, .btn, .setting-item').forEach(el=>{
    el.style.animation = settings.animations ? 'fadeIn 0.6s ease forwards' : 'none';
  });
}

window.onload = applySettings;