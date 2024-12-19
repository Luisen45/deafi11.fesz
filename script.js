// Se ejecuta cuando la página cargue
window.onload = function() {
  // Obtener valor inicial del contador (de LocalStorage)
  let contador = localStorage.getItem('contadorVisitas') || 0;
  contador = parseInt(contador, 10);

  // Mostrar el valor actual del contador
  document.getElementById('contador').textContent = contador;

  // Función para incrementar y guardar el contador
  function incrementarContador() {
    contador++;
    document.getElementById('contador').textContent = contador;
    localStorage.setItem('contadorVisitas', contador);
  }

  // Asignar evento al botón
  document.getElementById('contadorBtn').addEventListener('click', incrementarContador);
};
