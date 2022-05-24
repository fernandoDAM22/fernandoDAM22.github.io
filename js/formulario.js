function datos(){
    let nombre = document.getElementById("text").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("asunto").value;
    let cuadro = document.getElementById("dialogo_confirmacion");
    let errores = ["", "", ""];
    let dialogo = "";
    let cuadroNombre = document.getElementById("text");
    let cuadroEmail = document.getElementById("email");
    let cuadroMensaje = document.getElementById("asunto");
    if (nombre.length == 0){
        errores[0] = "Error, el campo nombre esta vacio";
        cuadroNombre.classList.add('error');
        document.getElementsByName('text')[0].placeholder='Nombre: Ingrese este campo';
    }
    if(email.length == 0){
         errores[1] = "Error, el campo email esta vacio";
         cuadroEmail.classList.add('error');
         document.getElementsByName('email')[0].placeholder='Email: Ingrese este campo';
    }
    if(mensaje.length == 0){
        errores[2] = "Error, el campo mensaje esta vacio";
        cuadroMensaje.classList.add('error');
        document.getElementsByName('asunto')[0].placeholder='Mensaje: Ingrese este campo';
    }
    if(nombre.length > 0){
        cuadroNombre.classList.remove('error');
    }
    if(email.length > 0){
        cuadroEmail.classList.remove('error');
    }
    if(mensaje.length > 0){
        cuadroMensaje.classList.remove('error');
    }
    if(nombre.length > 0 && email.length > 0 && mensaje.length > 0){
        cuadro.classList.remove('datosErroneos');
        dialogo = "nombre: " + nombre + "<br>" + "Email: " + email + "<br>" + "Mensaje: " + mensaje + "<br>";
       
    }
    else{
        cuadro.classList.add('datosErroneos');
        for(let i = 0; i < errores.length; i++){
            if(errores[i].length > 0){
                dialogo = dialogo + errores[i] + "<br>";
            }
        }
    }
    cuadro.innerHTML = dialogo;
    
}