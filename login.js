// Simple localStorage based user system

// Login
const loginForm = document.getElementById('loginForm');
if(loginForm){
  loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const userData = JSON.parse(localStorage.getItem(username));
    if(userData && userData.password === password){
      alert('Login Successful!');
      window.location.href = 'index.html';
    } else {
      alert('Invalid Credentials!');
    }
  });
}

// Signup
const signupForm = document.getElementById('signupForm');
if(signupForm){
  signupForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    localStorage.setItem(username, JSON.stringify({email, password}));
    alert('Signup Successful! You can now login.');
    window.location.href = 'login.html';
  });
}

// Forgot Password
const forgotForm = document.getElementById('forgotForm');
if(forgotForm){
  forgotForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = document.getElementById('email').value;
    let found = false;
    for(let i=0; i<localStorage.length; i++){
      const key = localStorage.key(i);
      const data = JSON.parse(localStorage.getItem(key));
      if(data.email === email){
        alert(`Password for ${key}: ${data.password}`);
        found = true;
        break;
      }
    }
    if(!found) alert('Email not found!');
  });
}