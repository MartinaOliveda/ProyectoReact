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

function dataBase(){
    localStorage.setItem(habitaciones1[0], JSON.stringify(clasica));
    localStorage.setItem(habitaciones1[1], JSON.stringify(family));
    localStorage.setItem(habitaciones1[2], JSON.stringify(suite));
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

dataBase();