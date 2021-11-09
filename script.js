const agreement = document.getElementById('agreement');
const btn_submit = document.getElementById('submit-btn');

btn_submit.disabled = true;

function checkbox(evento) {
    if (evento.target.checked) {
        btn_submit.disabled = false;
    }
    else {
        btn_submit.disabled = true;
    }
}

function submit_info(evento) {    
    evento.preventDefault();
    let form = document.getElementById('evaluation-form');    
    let obj = {
        'usuario': {
            'nome': form.elements['user'].value,
            'email': form.elements['email'].value
        }        
    }
    localStorage.setItem('user-infos', JSON.stringify(obj))
    document.getElementById('demo').innerHTML = JSON.stringify(obj);
}
agreement.addEventListener('click', checkbox)
btn_submit.addEventListener('click', submit_info)