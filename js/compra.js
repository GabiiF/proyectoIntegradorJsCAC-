//#totalPago->que vaya el resultado
//btnResumen-> llamar a este boton
/*
Deberá contener la funcionalidad en Javascript, al momento de presionar el botón “Resumen”, deberá mostrar 
en la sección “Total a Pagar: $”, el monto correspondiente a la cantidad de tickets a comprar con el descuento 
correspondiente dependiendo la categoría seleccionada, existen 3 categorías, Estudiante, Trainee, Junior
*/
// Defino valor de ticket
const valorTicket = 200;

// Defino porcentajes de descuento según categoría
let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;

let categoria;
let cantidad;
let descuento;
let valorTotal;

document.getElementById("btnResumen").addEventListener("click", hacerDescuento);

function hacerDescuento() {
    categoria = document.getElementById('categoría').value;
    cantidad = document.getElementById('cantidad').value;
    nombre = document.getElementById('nombre').value;
    apellido = document.getElementById('apellido').value;
    correo = document.getElementById('email').value;
    if (nombre != '' && apellido != '' && correo != ''&& cantidad != '') {
        switch (categoria) {
            case '1':
                categoria = descuentoEstudiante;
                break;
            case '2':
                categoria = descuentoTrainee;
                break;
            case '3':
                categoria = descuentoJunior;
                break;
            case '0':
                valorTotal = valorTicket * cantidad * categoria;
                break;
            default:
                alert('elija una opcion');
                break;

        }
        descuento = (valorTicket * cantidad * categoria) / 100;
        valorTotal = (valorTicket * cantidad) - descuento;
        document.getElementById('totalPago').innerHTML = valorTotal;
    }
    else {
        alert('debe agregar todos los datos');
    }
}