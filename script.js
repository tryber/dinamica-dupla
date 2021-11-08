const input = document.getElementById('agreement');

const verficacao = input.checked;

const btn = document.getElementById('btn');

input.addEventListener('click', () => {
    if(btn.disabled == true) {
       btn.disabled = false;
    } else {
        btn.disabled = true;
    }

})

