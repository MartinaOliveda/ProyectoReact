function seleccionar(opcion){
    let habitaciones = localStorage.getItem(opcion);

    habitaciones = habitaciones.replace("{","");
    habitaciones = habitaciones.replace("}","");
    habitaciones = habitaciones.replaceAll('"',"");
    habitaciones = habitaciones.replaceAll(':',": ");
    habitaciones = habitaciones.split(",");

    let codigo = habitaciones[0];
    let camasCantidad = habitaciones[1];
    let camasTipo = habitaciones[2];
    let sofa = habitaciones[3];
    let jacuzzi = habitaciones[4];
    let aireAcondicionado = habitaciones[5];
    let telefonoExterno = habitaciones[6];
    let guardarropa = habitaciones[7];
    let precioNoche = habitaciones[8];

    let container = document.getElementById("infoContainer");

    container.innerHTML = '';

    let habitacionSeleccionada = document.createElement("h2");
    let pCodigo = document.createElement("p");
    let pCamasCantidad = document.createElement("p");
    let pCamasTipo = document.createElement("p");
    let pSofa = document.createElement("p");
    let pJacuzzi = document.createElement("p");
    let pAire = document.createElement("p");
    let pTelefono = document.createElement("p");
    let pGuardarropa = document.createElement("p");
    let pPrecioNoche = document.createElement("p");

    // Informacion de la reserva
    let reserva = document.createElement("h2");
    let cantHabitaciones = document.createElement("p");
    let cantAdultos = document.createElement("p");
    let cantNinos = document.createElement("p");
    let cantNinos1 = document.createElement("p");

    let infoReserva = [];
    infoReserva.push("Cantidad de Habitaciones: " + document.getElementById("cantHabitaciones").value);
    infoReserva.push("Cantidad de Adultos: " + document.getElementById("cantAdultos").value);
    infoReserva.push("Cantidad de niños (3-11 años): " + document.getElementById("cantNinos").value);
    infoReserva.push("Cantidad de niños (0-2 años): " + document.getElementById("cantNinos1").value);
    infoReserva = sessionStorage.setItem("infoReserva", infoReserva);

    reserva.innerHTML = "<hr>Tu Reserva";
    cantHabitaciones.innerHTML = "Cantidad de habitaciones a reservar: " + document.getElementById("cantHabitaciones").value;
    cantAdultos.innerHTML = "Cantidad de adultos: " + document.getElementById("cantAdultos").value;
    cantNinos.innerHTML = "Cantidad de niños (3-11): " + document.getElementById("cantNinos").value;
    cantNinos1.innerHTML = "Cantidad de niños (0-2): " + document.getElementById("cantNinos1").value;

    habitacionSeleccionada.innerHTML = opcion.toUpperCase();
    /* pCodigo.innerHTML = codigo;
    pCamasCantidad.innerHTML = camasCantidad;
    pCamasTipo.innerHTML = camasTipo;
    pSofa.innerHTML = sofa;
    pJacuzzi.innerHTML = jacuzzi;
    pAire.innerHTML = aireAcondicionado;
    pTelefono.innerHTML = telefonoExterno;
    pGuardarropa.innerHTML = guardarropa;
    pPrecioNoche.innerHTML = precioNoche;

    container.appendChild(habitacionSeleccionada);
    container.appendChild(pCodigo);
    container.appendChild(pCamasCantidad);
    container.appendChild(pCamasTipo);
    container.appendChild(pSofa);
    container.appendChild(pJacuzzi);
    container.appendChild(pAire);
    container.appendChild(pTelefono);
    container.appendChild(pGuardarropa);
    container.appendChild(pPrecioNoche);

    container.appendChild(reserva);
    container.appendChild(cantHabitaciones);
    container.appendChild(cantAdultos);
    container.appendChild(cantNinos);
    container.appendChild(cantNinos1);
     */

$('.container').append(habitacionSeleccionada);
$('.container').append(pCodigo);
$('.container').append(pCamasCantidad);
$('.container').append(pCamasTipo);
$('.container').append(pSofa);
$('.container').append(pJacuzzi);
$('.container').append(pAire);
$('.container').append(pTelefono);
$('.container').append(pGuardarropa);
$('.container').append(pPrecioNoche);

$('.container').append(reserva);
$('.container').append(cantHabitaciones);
$('.container').append(cantAdultos);
$('.container').append(cantNinos);
$('.container').append(cantNinos1);

}