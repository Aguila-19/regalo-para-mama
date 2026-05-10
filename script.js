function mostrarMensaje() {
  const mensaje = document.getElementById("mensaje");

  mensaje.innerHTML = 
    "Gracias por tu amor, tus consejos, tus abrazos y por estar siempre para nosotros. Te amamos muchísimo, mamá 💖";
}

function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.classList.add("corazon");
  corazon.innerHTML = "❤️";

  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.fontSize = Math.random() * 20 + 20 + "px";

  document.body.appendChild(corazon);

  setTimeout(() => {
    corazon.remove();
  }, 5000);
}

setInterval(crearCorazon, 400);