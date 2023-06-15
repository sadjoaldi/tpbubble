const bubbleMaker = () => {
  // Créer un élément div
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  // Ajouter la bulle à la page
  document.body.appendChild(bubble);
  const size = Math.random() * 200 + 100 + "px";
  console.log(size);
  // Appliquer des styles CSS pour donner l'apparence d'une bulle
  bubble.style.width = size;
  bubble.style.height = size;

  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  bubble.style.setProperty("--left", Math.random() * 100 + "%");
  // bubble.style.borderRadius = "50%";
  // bubble.style.backgroundColor = "blue";
};

setInterval(bubbleMaker, 300);
