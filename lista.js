var personas = [];

function ingresar() {
    let inputUsuario = document.getElementById("username");
    let nombre = inputUsuario.value;
    let inputClave = document.getElementById("contraseña");
    let clave = Number(inputClave.value);
    let inputDireccion = document.getElementById("direccion");
    let direccion = inputDireccion.value;
    let inputTelefono = document.getElementById("fono");
    let telefono = Number(inputTelefono.value);
    const nueva = {
        nombre:nombre,
        clave:clave,
        direccion:direccion,
        telefono:telefono
    };
    personas.push(nueva);
    crearLista();
    inputUsuario.value = "";
    inputClave.value = 1;
    inputDireccion.value = "";
    inputTelefono.value = 1;
}

function crearLista() {
    const ul = document.getElementById("Lista");
    ul.innerText = "";
    for (let i = 0; i < personas.length; i++) {
        const li = document.createElement("li");
        li.innerText = personas[i].nombre;
        ul.appendChild(li);
    }
}