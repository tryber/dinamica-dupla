const btnSubmit = document.querySelector('.form__submit');

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  const inputSenha = document.querySelector('#input-senha');

  // for(let i of inputSenha.value) {
  //   console.log(`${i} = ${/[a-zA-Z0-9!@#\$%\^\&*\)\(+\{\}\;:,<>=._-]/.test(i)}`);
  //   if(!/[a-zA-Z0-9!@#\$%\^\&*\)\(+\{\}\;:,<>=._-]/.test(i)) {
  //     alert('A senha deve obedecer as regras!');
  //     break;
  //   }
  // }

  if (inputSenha.value.length < 7) {
    console.log(inputSenha.value.length);
    alert('A senha deve possuir no mínimo 7 caracteres')
  } else {
    let uppercase = 0;
    let lowercase = 0;
    let number = 0;
    let character = 0;
    for (let i of inputSenha.value) {
      // console.log(`i = ${i}`)
      if (/[A-Z]/.test(i)) {
        uppercase += 1;
      }
      if (/[a-z]/.test(i)) {
        lowercase += 1;
      }
      if (/[0-9]/.test(i)) {
        number += 1;
      }
      if (/[!@#\$%\^\&*\)\(+\{\}\;:,<>=._-]/.test(i)) {
        character += 1;
      }
    }
    if (uppercase === 0) {
      alert('A senha deve ter pelo menos uma letra maiúscula!');
      uppercase = 0;
    } else if (lowercase === 0) {
      alert('A senha deve ter pelo menos uma letra minuscula!');
      lowercase = 0;
    } else if (number === 0) {
      alert('A senha deve ter pelo menos um número!');
      lowercase = 0;
    } else if (character === 0) {
      alert('A senha deve ter pelo menos um caracter especial!');
      character = 0;
    }
  }
});
