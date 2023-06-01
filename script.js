function showAlert() { 
    alert("¡Hola, estas en la mejor pagina del mundo!")
}
document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})