//Bienvenida al usuario
let mensajeDeBienvenida = `Bienvenido a FS Car Detail.
Tenemos todo lo que necesitas para embellecer tu vehículo.`;

alert(mensajeDeBienvenida);

let presentacionDeServicios = `Nuestros servicios incluyen:
1. Abrillantado.
2. Tratamientos acrilicos y ceramicos.
3. Pulido y restauración de opticas.
4. Limpieza full de interiores.
5. Polarizados.
6. Ploteo.`;

alert(presentacionDeServicios);

//Ingreso del servicio requerido
let servicioRequerido = Number(prompt("Ingresa el número del servicio que desea cotizar"));

switch (servicioRequerido) { //verificando si eligió un servicio correcto
    case 1:
        alert("Elegiste Abrillantado.");
        console.log("El precio es de $600");
        break;
    case 2:
        alert("Elegiste Tratamientos acrilicos y ceramicos.");
        console.log("El precio es de $1000");
        break;
    case 3:
        alert("Elegiste Pulido y restauracion de opticas.");
        console.log("El precio es de $150");
        break;
    case 4:
        alert("Elegiste Limpieza full de interiores.");
        console.log("El precio es de $700");
        break;
    case 5:
        alert("Elegiste Polarizados.");
        console.log("El precio es de $650");
        break;
    case 6:
        alert("Elegiste Ploteo.");
        console.log("El precio es de $1200");
        break;
    case 0:
        alert("Volver al menú principal");
        break;
    default:
        alert("Opción no válida");
}

//Proceso de pago
let pagosDisponibles = `Ingresa la forma de pago que tenemos a continuación:
Tarjeta de Crédito: 3 cuotas sin interés.
Transferencia: 20% de descuento.
Efectivo: 30% de descuento.`;

console.log(pagosDisponibles);

let formaDePago = prompt("Ingresa la forma de pago");

const precioBaseServicio = {
    "Abrillantado": 600,
    "Tratamientos acrilicos y ceramicos": 1000,
    "Pulido y restauracion de opticas": 150,
    "Limpieza full de interiores": 700,
    "Polarizados": 650,
    "Ploteo": 1200
};

//función para calcular el descuento según el método de pago elegido
function calcularDescuento(formaDePago, precioBaseServicio) {
    let descuento = 0;

    if (formaDePago === "tarjeta") {
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



