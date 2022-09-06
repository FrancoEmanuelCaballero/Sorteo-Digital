import { sorteoDos } from "./dom/sorteo-dos.js";
import sorteo from "./dom/sorteo.js";

const d = document;

//Agregamos el evento a la carga del documento
d.addEventListener("DOMContentLoaded", (e) => {
  //Importamos la funcion draw y le pasamos los parametros que necesita, el btn y cualquier jugador individualmente, No! la lista de jugadores, el jugador
  sorteo("#ganador-btn", ".jugador");
  sorteoDos(
    "sorteo-dos",
    "agregar-jugador",
    "ganador-btn-dos",
    "lista-jugadores",
    "mensaje"
  );
});
