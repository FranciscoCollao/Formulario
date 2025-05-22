const username = document.getElementById("username")
const clave = document.getElementById("confirmar")
const errorElement = document.getElementById("error")
const form = document.getElementById("form")

form.addEventListener('submit', (e) => {
    let mensaje = []
    if (username.value === ''|| username.value == null) {
        mensaje.push('se requiere nombre')
    }
    if (clave.value.length <=4) {
        mensaje.push('La clave deb ser mas de 4 digitos')
    }

    if (mensaje.length > 0) {
        e.preventDefault()
        errorElement.innerText = mensaje.join(', ')
    }
})
