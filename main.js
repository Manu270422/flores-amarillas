// 💛 CARTA ROMÁNTICA (más larga y profunda)
const texto = "Mi amor… 💛\n\nTe amo mujer mía, quiero que sepas que contigo cada día florece algo hermoso en mi vida 🌼.\n\nNo eres solo alguien importante para mí… eres mi tranquilidad, mi alegría, mi lugar seguro.\n\nCada momento contigo se convierte en un recuerdo que guardo como un tesoro, cada risa tuya ilumina mis días, y cada abrazo tuyo es donde realmente siento que pertenezco.\n\nGracias por existir, por estar conmigo, por ser tú.\n\nTe amo más de lo que las palabras pueden explicar… y esto que ves aquí es solo una pequeña parte de todo lo que siento por ti 💛";

// Limpiar antes de escribir (por si recarga)
const dedicatoria = document.getElementById("dedicatoria");
dedicatoria.innerHTML = "";

let i = 0;

function escribir() {
  if (i < texto.length) {
    if (texto.charAt(i) === "\n") {
      dedicatoria.innerHTML += "<br><br>"; // saltos de línea bonitos
    } else {
      dedicatoria.innerHTML += texto.charAt(i);
    }
    i++;
    setTimeout(escribir, 50); // 🔥 más fluido
  }
}

escribir();


// 🌼 LLUVIA DE PÉTALOS
for(let i=0; i<40; i++) {
  let petal = document.createElement("div");
  petal.className = "petal";
  petal.style.left = Math.random()*100 + "vw";
  petal.style.animationDuration = (5+Math.random()*5) + "s";
  petal.style.animationDelay = Math.random()*5 + "s";
  document.body.appendChild(petal);
}


// 🌼 FLORES INTERACTIVAS
const flores = document.getElementById("flores");
const mensajes = [
  "Eres mi sol 🌞",
  "Siempre floreces en mi vida 🌼",
  "Eres mi alegría 💛",
  "Mi amor eterno 💕"
];

mensajes.forEach((msg) => {
  let flor = document.createElement("button");
  flor.innerText = "🌼";
  flor.style.fontSize = "2em";
  flor.style.margin = "10px";
  flor.style.background = "transparent";
  flor.style.border = "none";
  flor.style.cursor = "pointer";

  flor.onclick = () => alert(msg);

  flores.appendChild(flor);
});


// 📸 MOSTRAR COLLAGE
setTimeout(() => {
  document.getElementById("collage").style.opacity = 1;
}, 4000);


// 💛 OVERLAY + MÚSICA
const overlay = document.getElementById("overlay");
const musica = document.getElementById("musica");

overlay.addEventListener("click", () => {
  musica.play();
  overlay.style.display = "none";
});