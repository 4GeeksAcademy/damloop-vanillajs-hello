
let quien = [
  'Mi perro ninja',
  'Mi abuela gamer',
  'El cartero en patinete',
  'Mi pájaro con ansiedad',
  'Un vecino que no conozco',
  'Un extraterrestre muy educado'
];


let accion = [
  'se zampó',
  'tiró por la ventana',
  'prendió fuego sin querer',
  'aplastó haciendo yoga',
  'secuestró por diversión',
  'confundió con comida'
];


let queCosa = [
  'mi tarea',
  'mi móvil',
  'el coche',
  'mi bocadillo',
  'mi proyecto de JavaScript',
  'mi dignidad'
];


let cuando = [
  'antes de la clase',
  'mientras estaba durmiendo',
  'cuando estaba haciendo ejercicio (mentira)',
  'durante mi almuerzo',
  'mientras rezaba por aprobar',
  'justo cuando iba a empezar a estudiar'
];


function numeroAleatorio(arreglo) {
  return Math.floor(Math.random() * arreglo.length);
}


function generarExcusa() {
  let parteQuien = quien[numeroAleatorio(quien)];
  let parteAccion = accion[numeroAleatorio(accion)];
  let parteQueCosa = queCosa[numeroAleatorio(queCosa)];
  let parteCuando = cuando[numeroAleatorio(cuando)];

  return parteQuien + " " + parteAccion + " " + parteQueCosa + " " + parteCuando;
}

// Cuando carga la página
window.onload = function () {
  let parrafoExcusa = document.getElementById("excuse");
  parrafoExcusa.innerHTML = generarExcusa();

  let boton = document.getElementById("btn-excuse");

  boton.addEventListener("click", function () {
    parrafoExcusa.innerHTML = generarExcusa();
  });
};

