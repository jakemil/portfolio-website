const smokeContainer = document.getElementById("smoke-container");
const plane = document.getElementById("plane");

// Function to create a smoke puff
function createSmoke() {
  const smoke = document.createElement("div");
  smoke.classList.add("smoke");

  // Position smoke relative to the plane
  const planeRect = plane.getBoundingClientRect();
  smoke.style.left = `${planeRect.left + 30}px`; // Offset behind the plane
  smoke.style.top = `${planeRect.top + 40}px`; // Align with plane's bottom edge

  // Add smoke to the container
  smokeContainer.appendChild(smoke);

  // Remove smoke after animation ends
  setTimeout(() => {
    smoke.remove();
  }, 3000); // Matches the duration of the `smoke-fade` animation
}

// Spawn smoke every 0.5 seconds
setInterval(createSmoke, 500);

// Make the start button clickable
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", () => {
  alert("Starting Jake's World!");
});
