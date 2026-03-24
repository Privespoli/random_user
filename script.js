// Motor de Selección

const boton = document.getElementById("btn-random");

boton.onclick = mostrarUsuarioAleatorio;

function mostrarUsuarioAleatorio() {

    let indiceAleatorio = Math.floor(Math.random() * listaUsuarios.length);

    let usuario = listaUsuarios[indiceAleatorio];

    document.getElementById("user-img").src = usuario.foto;
    document.getElementById("user-name").innerText = usuario.nombre;
    document.getElementById("user-dir").innerText = usuario.direccion;
    document.getElementById("user-email").innerText = usuario.email;
}