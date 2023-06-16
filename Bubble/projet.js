const counterDisplay = document.querySelector("h3");
let counter = 0;

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

  const plusMinus = Math.random() > 0.5 ? 1 : -1;

  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
  });

  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

setInterval(bubbleMaker, 1000);
