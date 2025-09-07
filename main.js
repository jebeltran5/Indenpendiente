document.addEventListener("DOMContentLoaded", () => {
  fetch('menu.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('menu-container').innerHTML = data;
    })
    .catch(error => console.error('Error cargando menú:', error));


fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-container').innerHTML = data;
  })
  .catch(error => console.error('Error cargando pie de página:', error));   

  });