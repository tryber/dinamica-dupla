const checkBox = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

checkBox.addEventListener('click', () => {
  submitBtn.toggleAttribute('disabled');
});
