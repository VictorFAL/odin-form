const password = document.getElementById('pw');
const confirm = document.getElementById('cpw');

confirm.onkeyup = () => {
    if(password.value != confirm.value) {
        confirm.setCustomValidity("Passwords don't match")
    } else {
        confirm.setCustomValidity('');
    }
};