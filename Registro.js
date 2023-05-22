function IrARegistro(){
    window.location=("Registro.html")
}
function Regresar(){
    window.location=("nicioSesion.html")
}


var INombre = document.getElementById("nombre");
var IAPaterno = document.getElementById("apellidoP");
var IAMaterno = document.getElementById("apellidoM");
var ICorreo = document.getElementById("correo");
var IUsuarioN = document.getElementById("usuarioR");
var pass1=document.getElementById("passwordR1");
var pass2=document.getElementById("passwordR2");
var form=document.getElementById("form");


form.addEventListener("submit", e=>{
    e.preventDefault();
    let entrar=false;
    let regexName= /^[a-zA-ZÀ-ÿ\s]{1,40}$/
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let regexPass = /^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,64}$/


    if(regexName.test(INombre.value)){
        entrar=true;
        console.log("si se pudo");
    }
    else{
    console.log("No es valido");
    }
    
    if(regexName.test(IAPaterno.value)){
        entrar=true;
        console.log("si se pudo");
    }
    else{
    console.log("No es valido");
    }
    
    if(regexName.test(IAMaterno.value)){
        entrar=true;
        console.log("si se pudo");
    }
    else{
    console.log("No es valido");
    }

    if(regexEmail.test(ICorreo.value)){
        entrar=true;
        console.log("si se pudo");
    }
    else{
    console.log("No es valido");
    }

    if(regexPass.test(pass1.value)){
        entrar=true;
        console.log("si se pudo");
    }
    else{
    console.log("No es valido");
    }
    
    if(pass2.value== pass1.value){
        
        entrar=true;
        console.log("si se pudo");
    }
    else{
    console.log("No es valido");
    }
    



})






















function Validar_Registro(){


    Nombre();
//val_Nombre();
/*val_apellidoM();
val_apellidoP();
val_email();
val_contraseña();
val_contraseña2();
*/

}
/*
if(val_Nombre()  &&  val_apellidoM() &&  val_apellidoP()  &&  val_email()  &&  val_contraseña()  &&  val_contraseña2()){
    alert("registro exitoso");
}
   */
var vacio = false;



function Nombre(){
    if( INombre.value.length < 1){
        console.log("entra al if");
    }
        else{
            console.log("no entra");
       }
}




function val_Nombre(){
    if(INombre.value != ' '){
     //console.log("El campo Nombre está vacío");
    vacio=true;
    console.log(vacio);
    }
    else{
    
        console.log(vacio);
        /*
        if(INombre.value !="/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test"){
            console.log("El campo Nombre no es valido");
        }
            else{
                return true;
           }
        */
    }
}

/*

function val_apellidoP(){
    if(IAPaterno.value != " "){
        if(IAPaterno!="/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test"){
            console.log("El campo Apellido Paterno no es valido");
        }
        else{
            return true;
        }
    }
    else{
        console.log("El campo Apellido Paterno está vacío");
    }
}


function val_apellidoM(){
    if(IAMaterno.value != " "){
        if(IAMaterno!="/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test"){
            console.log("El campo Apellido Materno no es valido");
        }
        else{
            return true;
        }
    }
    else{
        console.log("El campo Apellido Materno está vacío");
    }
}

function val_email(){
    if(ICorreo.value != " "){
        if(ICorreo!="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test"){
            console.log("El campo Email no es valido");
        }
        else{
            return true;
        }
    }
    else{
        console.log("El campo Email está vacío");
    }
}


function val_contraseña(){
    if(pass1.value != " "){
        if(pass1!="/^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,64}$/"){
            console.log("El campo Contraseña no es valido");
        }
        else{
            return true;
        }
    }
    else{
        console.log("El campo Contraseña está vacío");
    }
}

function val_contraseña2(){
    if(pass2.value != " "){
        if(pass2!=pass1){
            console.log("Las contraseñas no coinciden");
        }
        else{
            return true;
        }
    }
    else{
        console.log("Debe confirmar su contraseña");
    }
}


*/

    

