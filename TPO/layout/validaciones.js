
function validateForm(e){

    let $nombre = document.getElementsByName("nombre")[0];

    if($nombre.value.length == 0){
        alert("Por favor ingrese su nombre");
        $nombre.value.focus();
        e.preventDefault();
        return 0;
    }

    let $apellido = document.getElementsByName("apellido")[0];

    if($apellido.value.length == 0){
        alert("Por favor ingrese su apellido");
        $apellido.value.focus();
        e.preventDefault();
        return 0;
    }

    let $email = document.getElementsByName("email")[0];

    if($email.value.length == 0){
        alert("Por favor ingrese su email");
        $email.value.focus();
        e.preventDefault();
        return 0;
    }

    let $consulta = document.getElementsByName("consulta")[0];

    if($consulta.value.length == 0){
        alert("Por favor ingrese su consulta");
        $consulta.value.focus();
        e.preventDefault();
        return 0;
    }

    let $formulario = document.getElementById("formulario");
    alert("Gracias por enviar el formulario");
    $formulario.submit();

}

let $submit = document.getElementById("enviar");
$submit.addEventListener("click", validateForm);

