const setup =  () => {
  document.getElementById('register')?.addEventListener('submit', event=>{
      event.preventDefault();
      clickSubmit()});
   };
window.addEventListener('DOMContentLoaded', setup);
const clickSubmit = async () => {
  const data = {
    name: document.getElementById('username').value,
    password: document.getElementById('password').value,
    email: document.getElementById('email').value,
    phone : document.getElementById('phone').value,
    company : document.getElementById('company').value
  };
  const body = JSON.stringify(data);
  const requestOptions = {
                         method :'POST',
                         headers : { "Content-Type": "application/json" },
                         body : body
                       };
  const response = await fetch(`/access/register`, requestOptions);
  if (response.ok) {
    const createdUser = await response.json();
    console.log(`user registered : ${JSON.stringify(createdUser)}`);
    window.location.href = '/access/login';
    //ici
  }
  else {
    const error = await response.json();
    console.log(`erreur : ${error.message}`);
    document.getElementById('problem').textContent = `erreur: account not created`;
  }
}
