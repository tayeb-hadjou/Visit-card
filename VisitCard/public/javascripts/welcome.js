
const setup = () => {
  document.getElementById('login-form')?.addEventListener('submit', event=>{
    event.preventDefault();
    console.log('login button clicked');
    clickLogin()}
    );
};
window.addEventListener('DOMContentLoaded', setup);
const clickLogin = async() => {
  const data = {
    login: document.getElementById('email').value,
    password: document.getElementById('password').value
  };

  const response = await fetch('/access/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  if (response.ok) {
    window.location.href = '/account';
  }
  else{
    console.log('login failed');
    //infromer l'utilisateur
    const p = document.createElement('p');
    p.textContent = 'login failed';
    document.getElementById('message').appendChild(p);
  }
}