const total = document.getElementById("total");
const cant = document.getElementById("cantidad");
const categoria = document.getElementById("categoria");
const nombre = document.getElementById("name")
const apellido = document.getElementById("lastname")
const email = document.getElementById("mail")

function calculo(){
    let porcentaje = categoria.value;
    let cantidad = cant.value;
    let cuenta = cantidad * (200 - 200 * porcentaje);
    total.innerHTML = cuenta;
}
function enBlanco(){
    nombre.value = "";
    apellido.value = "";
    email.value = "";
    cant.value = "";
    total.innerHTML = "-";
}