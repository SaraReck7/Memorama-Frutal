document.addEventListener("DOMContentLoaded", () => {
    //...
    /* acá va a ir la lógica de nuestro juego */

    let refresh = document.getElementById('refresh');
    refresh.addEventListener('click', _ => {
                location.reload();
    })
    let tarjetas = [
        {
          nombre: "Avocado",
          imagen:
            "images/aguacate.png"
        },
        {
          nombre: "Pineaple",
          imagen:
            "images/pina.png"
        },
        {
          nombre: "Banana",
          imagen:
            "images/platanos.png"
        },
        {
          nombre: "Strawberry",
          imagen:
            "images/fresa.png"
        },
        {
          nombre: "Orange",
          imagen:
            "images/naranja.png"
        },
        {
          nombre: "Apple",
          imagen:
            "images/manzana.png"
        }
      ];
      
      tarjetas = tarjetas.concat(tarjetas); //duplicamos los elementos del array
      const grid = document.getElementById("grid");
var cartasSeleccionadas = []; //va a ser un array de los índices de cada tarjeta seleccionada
var contadorGanados = 0;
const resultado = document.getElementById("resultado"); //para mostrar los resultados a medida se encuentran los pares
//este es el algoritmo de mezcla Fisher-Yates

function revolverTarjetas(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];    //para el intercambio se utiliza una variable auxiliar
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  tarjetas = revolverTarjetas(tarjetas);
//armamos el tablero de forma dinamica

    function armarTablero() {
    for (let i = 0; i < tarjetas.length; i++) {
     
        const tarjeta = document.createElement("img");
//seteamos la imagen de patron por defecto
tarjeta.setAttribute(
  "src",
  "images/—Pngtree—sweet avocado seamless pattern kawaii_990338.png"
);
tarjeta.setAttribute("data-index", i);
//esto es para agregar las clases al objeto "tarjeta"
tarjeta.classList.add("imagen");
tarjeta.setAttribute("name", tarjetas[i].nombre);
tarjeta.addEventListener("click", voltearTarjeta);
// agregamos el elemento creado a la grilla
grid.appendChild(tarjeta);

  }

  function voltearTarjeta() {
    //obtenemos el índice del array de perros
let index = this.getAttribute("data-index");
cartasSeleccionadas.push(index);
this.setAttribute("src", tarjetas[index].imagen);
if (cartasSeleccionadas.length === 2) {
    setTimeout(validarTarjetasSeleccionadas, 500);
  }
  
  function validarTarjetasSeleccionadas() {
    const listaTarjetas = document.querySelectorAll("img");
    const primeraTarjetaSeleccionadaIndex = cartasSeleccionadas[0];
    const segundaTarjetaSeleccionadaIndex = cartasSeleccionadas[1];
    
    if (primeraTarjetaSeleccionadaIndex == segundaTarjetaSeleccionadaIndex) {
        alert("¡Es la misma tarjeta!");
        //ponemos de vuelva a ambas la imagen del patron por defecto
        listaTarjetas[primeraTarjetaSeleccionadaIndex].setAttribute(
          "src",
          "images/—Pngtree—sweet avocado seamless pattern kawaii_990338.png"
        );
        listaTarjetas[segundaTarjetaSeleccionadaIndex].setAttribute(
          "src",
          "images/—Pngtree—sweet avocado seamless pattern kawaii_990338.png"
        );
      }
    
      else if (listaTarjetas[primeraTarjetaSeleccionadaIndex].name === listaTarjetas[segundaTarjetaSeleccionadaIndex].name) {
        //el atributo "name" guarda el nombre de la raza, si son iguales entonces es correcto
        alert("¡Correcto!");
        //cambiar la imagen por la del patron de finalizacion
        listaTarjetas[primeraTarjetaSeleccionadaIndex].setAttribute(
          "src",
          "images/—Pngtree—sweet avocado seamless pattern kawaii_990338 copia.png"
        );
        listaTarjetas[segundaTarjetaSeleccionadaIndex].setAttribute(
          "src",
          "images/—Pngtree—sweet avocado seamless pattern kawaii_990338 copia.png"
        );
        //evitamos que se pueda volver a hacer click en las mismas
        listaTarjetas[primeraTarjetaSeleccionadaIndex].removeEventListener("click", voltearTarjeta);
        listaTarjetas[segundaTarjetaSeleccionadaIndex].removeEventListener("click", voltearTarjeta);
        contadorGanados = contadorGanados + 2; //sumamos 2 porque fueron 2 las cartas correctas
      }
      else {
        listaTarjetas[primeraTarjetaSeleccionadaIndex].setAttribute(
          "src",
          "images/—Pngtree—sweet avocado seamless pattern kawaii_990338.png"
        );
        listaTarjetas[segundaTarjetaSeleccionadaIndex].setAttribute(
          "src",
          "images/—Pngtree—sweet avocado seamless pattern kawaii_990338.png"
        );
      }
      cartasSeleccionadas = [];
      if (contadorGanados === tarjetas.length) {
        resultado.textContent = "¡Felicidades! ¡Las encontraste todas!";
      } else {
        resultado.textContent = (contadorGanados / 2) + " parejas encontradas"; //hay 2n pares, por ende hay n elementos distintos
      }
  }
  

} 
  //creamos un elemento de tipo <img />

//cada 2 tarjetas se hacen las validaciones

  
}
armarTablero();
});
