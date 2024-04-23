const musica = document.getElementById("musica");
const botonPausa = document.getElementById("boton-pausa");

botonPausa.addEventListener("click", () => {
    if (musica.paused) {
        musica.play();
        botonPausa.innerHTML = "<img src=assets/img/mute.png width=30px height=30px>";
    } else {
        musica.pause();
        botonPausa.innerHTML = "<img src=assets/img/altavoz.png width=30px height=30px>";
    }
});