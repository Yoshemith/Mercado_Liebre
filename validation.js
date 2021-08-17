function passValidation() {
    let password = document.getElementById("password").value;
    let confirmpass = document.getElementById("confirm-password").value;
    console.log(password, confirmpass);
    let message = document.getElementById("error-msg");
    let validacion = false;
    if(password.length > 7){
        if(password==confirmpass){
            message.textContent = "¡Confirmacion exitosa!";
            message.style.backgroundColor = "#27c43e";
            validacion = true;
        }
        else{
            message.textContent = "¡Las contraseñas no coinciden!";
            message.style.backgroundColor = "#d84242";
        }
    }
    
}

function resetVal(){
    let message = document.getElementById("error-msg");
    message.style.backgroundColor = "#ebebeb";
}