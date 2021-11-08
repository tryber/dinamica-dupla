const btnSubmit = document.querySelector('.form__submit');
const btnCheck = document.querySelector('#agreement');
btnSubmit.disabled = true;
btnCheck.addEventListener('change', () => {
  // if (btnCheck.checked === true) {
  //   btnSubmit.disabled = false;
  // } else {
  //   btnSubmit.disabled = true;
  // }
  btnSubmit.disabled = !btnCheck.checked; //opcao 2
  //btnSubmit.disabled ? false : true; // opcao 3
});

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault(); //ele nao deixa enviar submit
  const welcome = document.querySelector('.form__subtitle');
  const inputName = document.querySelector('#input-name');
  const inputEmail = document.querySelector('#input-email');

  // const user = {
  //   usuario: {
  //     nome: inputName.value, 
  //     email: inputEmail.value,
  //   }
  // };
  const usuario = {
    nome: inputName.value, 
    email: inputEmail.value,
  };
  const userData = JSON.parse(localStorage.getItem('user-infos'));
  localStorage.setItem('user-infos', JSON.stringify(usuario));
  // welcome.innerHTML = userData.nome;
  //SALVANDO OUTRAS ESTRUTURAS DE LOCAL E SESSION
// let organization = {
//   name: "trybe",
//   since: 2019
// }

// objeto "storage" pode ser localStorage ou sessionStorage

// localStorage.setItem("trybessss", JSON.stringify(organization))
// let org = JSON.parse(localStorage.getItem("trybe"))
// console.log(org) // { name: "trybe", since: 2019 }

// let classes = ["2019/set", "2019/oct"]
// localStorage.setItem("classes", JSON.stringify(classes))
// let cls = JSON.parse(localStorage.getItem("classes"))
// console.log(cls) // ["2019/set", "2019/oct"]

});

function validatePass() {
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
  } else if (inputSenha.value.length >= 7) {
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
}
