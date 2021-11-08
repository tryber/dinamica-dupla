let chekbox = document.querySelector('#agreement');
let botao = document.querySelector('#submit-btn');
const inputName = document.querySelector('#input-name');
const inputEmail = document.querySelector('#input-email');

chekbox.addEventListener('click', function(){
    if (chekbox.checked === false){
        botao.disabled = true
    }else{
        botao.disabled = false
    };
})

let info = {
    usuario: {
        nome: '',
        email: '',
    }
}

botao.addEventListener('click', (event) => {
    event.preventDefault();
    
    info.usuario.nome = inputName.value;
    info.usuario.email = inputEmail.value;
    localStorage.setItem('user-infos', JSON.stringify(info));
})