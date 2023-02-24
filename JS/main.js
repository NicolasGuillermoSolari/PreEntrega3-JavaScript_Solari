class Propiedades {
  constructor(propDireccion, propAmbientes, propPrecio) {
    this.propDireccion = propDireccion;
    this.propAmbientes = propAmbientes;
    this.propPrecio = propPrecio;

    this.generarEstadia();
  }
  generarEstadia() {
    this.semanas = []; //crea lista de semanas con el bucle de abajo

    for (let i = 0; i < 12; i++) {
      const semana = new Estadia(i, false); // todas las semans vacias al inicio, por eso false
      this.semanas.push(semana); // manda el nuevo asiento creado a la lista de semanas
    }
  }
}

class Estadia {
  constructor(id, reservado) {
    this.id = id;
    this.reservado = reservado;
  }
}

/* INICIO DELPROGRAMA*/
let prop1 = new Propiedades("Av.Libertador 6299", 2, 1500);
let prop2 = new Propiedades("Guatemala 5000", 2, 1200);
let prop3 = new Propiedades("Av.Libertador 6100", 1, 600);
let prop4 = new Propiedades("Av.Libertador 6300", 1, 500);

const listaDeAlquileres = [prop1, prop2, prop3, prop4];

/*Funciones*/
function obtenerDireccion(direccion) {
  const propEncontrada = listaDeAlquileres.find(
    (casita) => casita.propDireccion == direccion
  );
  return propEncontrada;
}

function hayEstadiaDisponible(direccion, semanas) {
  const estadiaDisponibles = propiedades.semanas.filter((semana) => {
    return !semana.reservado;
  });
  return estadiaDisponibles.length >= semanas;
}

function calcualarTotalEstadia(direccion, semanas) {
  return semanas * direccion.propPrecio;
}

function ocuparEstadia(direccion, semanas) {
  const semanas = direccion.semanas;

  for (const semana of semanas) {
    if (!semana.reservado) {
      semana.reservado = true;
      cantidadDeSemanas--;
    }

    if (cantidadDeSemanas === 0) {
      break;
    }
  }

  vuelo.asientos = asientos;
}

let direccion = prompt(
  "ingrese la dirección del alquiler que desea. Sí no ponga SALIR"
);

while (direccion !== "SALIR") {
  const alquilar = obtenerDireccion(direccion);
  console.log(alquilar);

  direccion = prompt(
    "ingrese otra dirección que también desea alquilar. Sí no ponga SALIR"
  );
  if (direccion != undefined) {
    let cantidadDeSemanas = parseInt(
      prompt("ingrese cantidad de semanas que quiere alquilar")
    );
    while (
      cantidadDeSemanas >= 0 ||
      !hayEstadiaDisponible(direccion, semanas)
    ) {
      cantidadDeSemanas = parseInt(
        prompt("ingrese cantidad de semanas que quiere alquilar")
      );
      const total = calcualarTotalEstadia(direccion, semanas);
      alert(
        "El total del alquiler de la dirección " + direccion + " es " + total
      );
      ocuparEstadia(direccion, semanas);
    }
  } else {
    alert("Dirección inválida");
  }
}
