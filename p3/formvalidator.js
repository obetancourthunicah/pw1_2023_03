const formInputs = {
    "nombre": null,
    "email": null,
    "telefono": null,
    "fecha": null,
    "hora": null,
    "url": null,
    "password": null
}; //Object JSON Javascript Object Notation /// Javascript Object



document.addEventListener("DOMContentLoaded", ()=>{
    initPageLoad();
});

function initPageLoad(){
    formInputs.nombre = document.getElementById("nombre");
    formInputs.email = document.getElementById("email");
    formInputs.telefono = document.getElementById("telefono");
    formInputs.fecha = document.getElementById("fecha");
    formInputs.hora = document.getElementById("hora");
    formInputs.url = document.getElementById("url");
    formInputs.password = document.getElementById("password");
    console.log("Formulario Cargado", formInputs);
    document.getElementById("formulario").addEventListener("submit", (e)=>{
        const [errors, isValid] = validateForm();
        if(!isValid) {
            alert("Formulario no Valido");
            console.log("Form Errors", errors);
            e.preventDefault();
            e.stopPropagation();
        }
    });
}

function validateForm(){
    let errors = [];
    //Validar que el nombre no este vacio
    if(isEmpty(formInputs.nombre.value)){
        errors.push("El campo nombre no puede estar vacio");
    }
    if(!isEmail(formInputs.email.value)){
        errors.push("El campo email no es valido");
    }
    if(!isPhone(formInputs.telefono.value)){
        errors.push("El campo telefono no es valido");
    }
    return [ errors, errors.length == 0];
}
// Validadores
function isEmpty(value){
    // if(value == null || value == "") {
    //     return true;
    // }
    // return false;
    return /^\s*$/.test(value);
}

function isEmail(value){
    return /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(value);
}

function isPhone(value) {
    return /^\+?\(?(504)?\)?\s?[23789]\d{3}-?\s?\d{4}$/.test(value);
}