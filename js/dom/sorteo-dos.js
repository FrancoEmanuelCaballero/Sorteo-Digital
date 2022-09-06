const d = document;

export function sorteoDos(input, agregar, ganador, jugadores, mensaje) {
  const $input = d.getElementById(input),
    $agregar = d.getElementById(agregar),
    $jugadores = d.getElementById(jugadores),
    $mensaje = d.getElementById(mensaje),
    $ganador = d.getElementById(ganador);

  let jugadoresArray = [];

  const addToGame = () => {
    // cuando toque el boton, no tenga q volver a poner el mouse sobre el input#paja
    const inputValue = $input.value;
    // verifico que no eswte vacio
    $input.focus();
    if (inputValue === "" || inputValue.length === 0) {
      /* alert("No has ingresado participante"); */
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No has ingresado participante",
      });
    } else {
      // pongo los nombres en un array para luego hacer el math.random
      jugadoresArray.push(inputValue);

      // pongo los nombre de la lista ordenada de html
      $jugadores.insertAdjacentHTML("beforeend", `<li>${inputValue}</li>`);

      // limpio el input
      $input.value = "";
    }
  };
  const ganadorSorteo = () => {
    $input.focus();
    // obtengo el numero del impostor aleatoriamnete
    const random = Math.floor(Math.random() * jugadoresArray.length);
    // el impostor va a ser el nombre que este en la posicion random
    const jugadorGanador = jugadoresArray[random];
    // limpio el array por las dudas
    jugadoresArray = [];
    // que cuatro segundo despues de tocar el btn desaparezca
    setTimeout(() => {
      // limpio el ul
      $jugadores.innerHTML = "";
    }, 300);
    // message
    /* alert(`El ganador es ${jugadorGanador} 🎉🎉`); */
    Swal.fire(`El ganador es ${jugadorGanador} 🎉🎉`, "Felicitaciones");
  };
  $agregar.addEventListener("click", () => {
    addToGame();
  });
  $ganador.addEventListener("click", () => {
    if (jugadoresArray.length === 0) {
      /* alert("No has ingresado participante") */
      // si toca el btn pero no puso ningun nombre
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No has ingresado participante",
      });
    } else {
      ganadorSorteo();
    }
  });
}
