class Reserva {
    constructor(nombre, apellido, estadia, pago, precio, precioFinal){
    this.nombre = nombre;
    this.apellido = apellido;
    this.estadia = estadia;
    this.pago = pago;
    this.precio = precio;
    this.precioFinal = function(option){
        option -=1;

        switch(estadia > 0){
            case (estadia >= 15):
				console.log("El precio por noche tomado en cuenta es de $15000");
                this.precio = (estadia * habitaciones[option].precioNoche)*0.75;
                break;

            case (estadia < 15):
                console.log("El precio por noche tomado en cuenta es de $20000");
                this.precio = estadia * habitaciones[option].precioNoche;
                break;

            default:
                alert("No pudimos procesar su pedido. Por favor intentelo de nuevo.");
                break
        }

        switch(!isNaN(pago)){

            case (pago === 1):
                console.log("Se eligio 1");
                break;

            case (pago === 2):
                console.log("Se eligio 1");
                break;

            case (pago === 3):
                console.log("Se aplica el 10% al precio final por el efectivo como metodo de pago");
                precioFinal = precioFinal * 0.9;
                return precio;

            default:
                break;
    }
}
}
}


class Habitacion {
    constructor (codigo, camasCantidad, camasTipo, sofa, jacuzzi, aireAcondicionado, telefonoExterno, guardarropa, precioNoche) {
        this.codigo = codigo;
        this.camasCantidad = camasCantidad;
        this.camasTipo = camasTipo;
        this.sofa = sofa;
        this.jacuzzi = jacuzzi;
        this.aireAcondicionado = aireAcondicionado;
        this.telefonoExterno = telefonoExterno;
        this.guardarropa = guardarropa;
        this.precioNoche = precioNoche;
    }
}

function reservarHabitacion(option){
    const cliente = new Reserva(
        prompt("Ingrese nombre"),
        prompt("Ingrese apellido"),
        parseInt(prompt("Ingrese tiempo de estadia en cantidad de dias")),
        parseInt(prompt("Metodos de pago disponibles\n\n1- Tarjeta de credito\n2- Transferencia bancaria\n3- Efectivo\n\nSeleccione el metodo de pago a usar"))
    );
    
    calcularPrecio(cliente, option);

    
    let divReserva = document.getElementById('divReserva');


   
    let p = document.createElement('p');
    
    p.innerHTML ="Reserva a nombre de: " 
    + cliente.nombre + " " + cliente.apellido + "<br> Tiempo de estadía: " + cliente.estadia  
    + " días. <br> Precio final por día: $" + cliente.precio / cliente.estadia + "<br> Precio total de la estadía: $" + cliente.precio;
   
    divReserva.appendChild(p);

    let reservas = [];
    reservas.push(cliente.nombre);
    reservas.push(cliente.apellido);
    reservas.push(cliente.estadia);
    reservas.push(cliente.precio);

    localStorage.setItem('infoReserva', JSON.stringify(reservas));

    console.log("infoReserva:\n"+localStorage.getItem('infoReserva'));
}

function calcularPrecio(cliente, option){
    console.log();(
        cliente.nombre+"\n"+
        cliente.apellido+"\n"+
        cliente.pago+"\n"+
        cliente.estadia+"\n"+
        cliente.precio+"\n"+
        cliente.precioFinal(option)
        );
}
function seleccionar(){
    let option = parseInt(prompt("Ingrese tipo de habitación\n\n 1. Clásica\n 2. Estudio\n 3. Family\n 4. Suite"));
    return option;
};

function ordenarPorPrecio(habitaciones) {
    console.log(habitaciones);
    habitaciones.sort((a, b) => (a.precioNoche > b.precioNoche) ? 1 : -1);
    console.log(habitaciones);
    return habitaciones;
};

function showInfo(option){
    console.log(option);
    switch(option > 0) {
        case(option === 1):
            alert(
                "Cantidad de camas: " + clasica.camasQ + 
                "\nTipo de cama: " + clasica.camasT +
                "\nPrecio por noche: $" + clasica.precioNoche);
            break;

        case(option === 2):
        alert(
            "Cantidad de camas: " + family.camasQ + 
            "\nTipo de cama: " + family.camasT +
            "\nPrecio por noche: $" + family.precioNoche);
        break;

        case(option === 3):
            alert(
                "Cantidad de camas: " + suite.camasQ + 
                "\nTipo de cama: " + suite.camasT +
                "\nPrecio por noche: $" + suite.precioNoche);
            break;
        default:
            alert("No hemos podido procesar su pedido. Por favor, asegúrese de ingresar un número del 1 al 4. Muchas Gracias");
            break;
    }

    ordenarPorPrecio(habitaciones);
    reservarHabitacion(option);
}


const clasica = new Habitacion (
    "01",
    1,
    "king",
    false,
    false,
    false,
    false,
    false,
    20000
);

const family = new Habitacion (
    "02",
    3,
    "king" + " twin",
    false,
    false,
    false,
    true,
    false,
    50000
);

const suite = new Habitacion (
    "03",
    1,
    "king",
    true,
    true,
    true,
    true,
    true,
    40000
);

const habitaciones = [clasica, family, suite];
const habitaciones1 = ["clasica", "family", "suite"];

showInfo(seleccionar())

