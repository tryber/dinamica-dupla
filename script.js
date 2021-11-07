const termos = document.getElementById('agreement');
const btnEnviar = document.getElementById('submit-btn');
const inputNome = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');
const inputSenha = document.getElementById('input-senha');
const usuario = {
  nome:'',
  email:'',
};

function limparDados () {
  inputNome.value = '';
  inputEmail.value = '';
  inputSenha.value = '';
  termos.checked = false;
  btnEnviar.disabled = true;
  usuario.nome = '';
  usuario.email = '';
}

function enviarDados(){
  usuario.nome = inputNome.value;
  usuario.email = inputEmail.value;
  localStorage.setItem('user-infos', JSON.stringify(usuario));
  limparDados();
}

function validarSenha(senha) {
  let mensagemSenha = '';
  let maiusculo = /[A-Z]/;
  let minusculo = /[a-z]/;
  let numero = /[0-9]/;
  let caractereEspecial = /[! @ # $ % ^ & * ( ) _ = + { } ; : , < . >]/;
  
  if(senha.length < 7) {
    mensagemSenha += 'A senha deve possuir um tamanho minimo de 7 caracteres; ';
  }
  if (!maiusculo.test(senha)) {
    mensagemSenha += 'A senha deve possuir OBRIGATORIAMENTE uma letra maiúscula; ';
  }
  if (!minusculo.test(senha)) {
    mensagemSenha += 'A senha deve possuir OBRIGATORIAMENTE uma letra minúscula; ';
  }
  if (!numero.test(senha)) {
    mensagemSenha += 'A senha deve possuir OBRIGATORIAMENTE um número; ';
  }
  if (!caractereEspecial.test(senha) && !senha.includes('-')) {
    mensagemSenha += 'A senha deve possuir OBRIGATORIAMENTE um caractere especial: (! @ # $ % ^& * ( ) - _ = + { } ; : , < . >);';
  }
  
  return mensagemSenha
}

termos.addEventListener('click', (e) =>{
  if(e.target.checked) {
    btnEnviar.disabled = false;
    return
  } 
  btnEnviar.disabled = true;
});

btnEnviar.addEventListener('click', (e) => {
  e.preventDefault();
  let msg = validarSenha(inputSenha.value);
  if (msg.length > 0) {
    alert(msg);
    return
  }
  enviarDados();
})





