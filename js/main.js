//Bienvenida al usuario
let mensajeDeBienvenida = `Bienvenido a FS Car Detail.
Tenemos todo lo que necesitas para embellecer tu vehículo.`;

alert(mensajeDeBienvenida);

let presentacionDeServicios = `Nuestros servicios incluyen:
1. Abrillantado - $600.
2. Tratamientos acrilicos y ceramicos - $1000.
3. Pulido y restauración de opticas - $150.
4. Limpieza full de interiores - $700.
5. Polarizados - $650.
6. Ploteo - $1200.`;

alert(presentacionDeServicios);

//Ingreso del servicio requerido
let servicioRequerido;

do {

    servicioRequerido = Number(prompt("Ingresa el número del servicio que desea cotizar"));

} while (servicioRequerido < 1 || servicioRequerido > 6); // me asegura que el usuario siempre elija una opcion.

// funcion para calcular el precio base segun el servicio seleccionado

function calcularPrecioBase(servicioRequerido) {
    switch (servicioRequerido)   {
        case 1:
            return 600; // Abrillantado
        
        case 2:
            return 1000; // Tratamientos acrilicos y ceramicos
        
        case 3:
            return 150; // Pulido y restauracion de opticas

        case 4:
            return 700; // Limpieza full de interiores

        case 5:
            return 650; // Polarizados

        case 6:
            return 1200; // Ploteo

        default:
            return null; // Servicio no valido
    }
}

const precioBaseServicio = calcularPrecioBase(servicioRequerido);

//Proceso de pago

let pagosDisponibles = `Ingresa la forma de pago que tenemos a continuación:
Tarjeta de Credito: 3 cuotas sin interés.
Transferencia: 20% de descuento.
Efectivo: 30% de descuento.`;

console.log(pagosDisponibles);

let formaDePago = prompt("Ingresa la forma de pago");



//función para calcular el descuento según el método de pago elegido
function calcularDescuento(formaDePago, precioBaseServicio) {
    let descuento = 0;

    if (formaDePago === "tarjeta de credito") {
        descuento = 0; //no tiene descuento
    } else if (formaDePago === "efectivo") {
        descuento = precioBaseServicio * 0.3; //descuento del 30%
    } else if (formaDePago === "transferencia") {
        descuento = precioBaseServicio * 0.2; //descuento del 20%
    } else {
        console.log("Método de pago no válido");
    }

    return descuento;
}

//simulacion de descuentos y precio final

// funcion para calcular el precio final con descuento

function calcularPrecioFinal(precioBaseServicio, descuento) {
    return precioBaseServicio - descuento;
}

// funcion para mostrar el descuento en consola

function mostrarDescuentoConsola(formaDePago, descuento) {

    console.log(`Descuento pago con ${formaDePago}: $${descuento}`);
}

// funcion para mostrar el precio final

function mostrarPrecioFinal(precioFinal) {

    console.log(`Precio final con descuento: $${precioFinal}`);
}

const descuento = calcularDescuento(formaDePago, precioBaseServicio);
const precioFinal = calcularPrecioFinal(precioBaseServicio, descuento);

mostrarDescuentoConsola(formaDePago, descuento);
mostrarPrecioFinal(precioFinal);

alert(`El total de tu compra es $${precioFinal}`);
console.log("Gracias por elegirnos, volvé pronto!");

// fin del simulador


