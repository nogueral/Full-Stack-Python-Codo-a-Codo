function validateForm(e){
    var elements = e.elements;
    for(var i = 0; i < elements.length; i++) {
        if(elements[i].tagName === "INPUT" || elements[i].tagName === "SELECT"){
            if(elements[i].value.trim() === "" && elements[i].required === true) {
                var title = elements[i].getAttribute('name');
                alert("Por favor completar el campo: " + title);
                elements[i].focus();
                elements[i].style.borderColor = "red";
                elements[i].style.borderStyle = "dashed";
                return false;
            }
        }
    }
}

