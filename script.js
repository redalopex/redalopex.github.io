const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

// Make the "No" button run away
noBtn.addEventListener("mouseover", () => {
  const buttonWidth = noBtn.offsetWidth;
  const buttonHeight = noBtn.offsetHeight;

  const maxX = window.innerWidth - buttonWidth;
  const maxY = window.innerHeight - buttonHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

// When "Yes" is clicked
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="text-align:center; margin-top:20vh;">
      <h1>YAY!!! 💖</h1>
      <p>You just made me the happiest person ever 🥰</p>
    </div>
  `;

  createHearts();
});

// Floating hearts animation
function createHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (Math.random() * 20 + 20) + "px";
    heart.style.animation = "floatUp 3s linear forwards";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 3000);
  }, 300);
}
