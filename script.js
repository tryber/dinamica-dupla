const btn = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#agreement');
const inputName = document.querySelector('#input-name');
const inputEmail = document.querySelector('#input-email');

checkbox.addEventListener('click', function(){
  if (btn.disabled === true) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
});

btn.addEventListener('click', function(event){
  event.preventDefault();
  const usuario = {
    nome: inputName.value,
    email: inputEmail.value
  };
  localStorage.setItem('user-infos', JSON.stringify(usuario));
});