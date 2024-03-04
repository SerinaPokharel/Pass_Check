var password = document.getElementById("pass");
var msg = document.getElementById("alert");
var strength = document.getElementById("strength");
var arr = document.querySelector("button[type='submit']");

arr.addEventListener('click', function(){
    if (password.value.length === 0) {
        alert("Add Uppercase,lowercase, symbols, letters for more safe passwords");
    } else if (password.value.length < 4) {
        alert("Passwords is weak, extend more character");
    }  else if (password.value.length >= 6 && password.value.length < 12) {
        alert("Passwords is medium, extend more character");
    } else if(password.value.length >= 12){
        alert("Password is Secure");
    }
});

password.addEventListener("input", () => {
    if (password.value.length > 0){
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }

    if (password.value.length <4) {
        strength.innerHTML = "Weak";
        password.style.borderColor='#ff5925'
        msg.style.color = "#ff5925";
    } else if (password.value.length >=6 && password.value.length < 12) {
        strength.innerHTML = "Medium";
        password.style.borderColor='yellow'
        msg.style.color = "yellow";
    } else if(password.value.length >= 12){
        strength.innerHTML = "Strong";
        password.style.borderColor='green'
        msg.style.color = "greeen";
    }
});
