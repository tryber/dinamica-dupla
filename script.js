// Requesito 7
const inputPassword = document.getElementById('input-senha');
const btnSubmit = document.getElementById('submit-btn')

function passwordRequeriments() {
  event.preventDefault();
  const eachWordPassword = inputPassword.value.split('');
  console.log(eachWordPassword);
  for (let i = 0; i < eachWordPassword.length; i += 1) {
    const element = eachWordPassword[i];
    if (element !== Number) {
      console.log('ok')
    }else {
      console.log('nope')
    }
  //   if (eachWordPassword.length >= 7) {
  //   console.log('ok')
  // }else{
  //   console.log('nope')
  // }
  }
}

btnSubmit.addEventListener('click', passwordRequeriments)
console.log(inputPassword);
console.log(btnSubmit);
