// Part 2: Functions — Parameters, Return, Scope

// Global variable
let animationCount = 0;

// Function with parameters and return value
function calculateNewSize(base, multiplier) {
  return base * multiplier;
}

// Function demonstrating local scope
function logAnimation() {
  let message = `Animation triggered ${animationCount} times.`;
  console.log(message);
}

// Part 3: Combine CSS & JS — Interactive Effects

// Animate the box when button is clicked
const box = document.getElementById("box");
const animateBtn = document.getElementById("animateBtn");

animateBtn.addEventListener("click", () => {
  box.classList.toggle("animate");
  animationCount++;
  logAnimation();

  // dynamically change box size using return value
  box.style.width = calculateNewSize(100, 1.5) + "px";
});

// Modal popup functionality
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", () => {
  modal.classList.add("show");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});
