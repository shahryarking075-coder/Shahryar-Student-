const generateBtn = document.getElementById('generateBtn');
const textInput = document.getElementById('textInput');
const generatedImage = document.getElementById('generatedImage');

if(generateBtn){
  generateBtn.addEventListener('click', () => {
    const text = textInput.value.trim();
    if(text === ''){
      alert('Please write something!');
      return;
    }
    // Placeholder: dynamically change image (demo)
    generatedImage.src = 'images/sample-design.jpg';
    alert(`Your idea "${text}" has been converted to image!`);
  });
}
// --- Existing code (agar koi hai) ---

// -------------------------
// Add this at the end
const generateBtn = document.getElementById('generateBtn');
const textInput = document.getElementById('textInput');
const generatedImage = document.getElementById('generatedImage');

generateBtn.addEventListener('click', async () => {
  const text = textInput.value.trim();
  if(text === ''){
    alert('Please type something!');
    return;
  }

  // Placeholder → same image dikhayega
  generatedImage.src = 'sample-design.jpg';

  // Optional: alert user
  alert(`Your idea "${text}" is converted to image!`);
});