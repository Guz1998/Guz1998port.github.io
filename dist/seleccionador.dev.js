"use strict";

/*SELECCIONADOR DE CATEGORIAS*/
//Obtener el elemento del filtro de categorías
var filtroCategorias = document.getElementById("filtro-categorias"); // Agregar un evento de cambio al filtro de categorías

filtroCategorias.addEventListener("change", function () {
  var categoriaSeleccionada = filtroCategorias.value; // Obtener la categoría seleccionada
  // Obtener todos los elementos a filtrar

  var elementos = document.getElementsByClassName("contenedor-edicion"); // Recorrer los elementos y mostrar/ocultar según la categoría seleccionada

  for (var i = 0; i < elementos.length; i++) {
    var elemento = elementos[i];
    var categoriaElemento = elemento.getAttribute("data-categoria"); // Obtener la categoría del elemento

    if (categoriaSeleccionada === "Todos" || categoriaSeleccionada === categoriaElemento) {
      elemento.style.display = "block"; // Mostrar elemento si coincide con la categoría seleccionada o si se selecciona "todos"
    } else {
      elemento.style.display = "none"; // Ocultar elemento si no coincide con la categoría seleccionada
    }
  }
});