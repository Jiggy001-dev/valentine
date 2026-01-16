let noCount = 0;
let yesSize = 1; // initial scale
const maxYesSize = 2; // maximum scale for YES button

// Array of images for "No" clicks
const noImages = [
  "img/sad teddy2.jpeg",
  "img/sad teddy.jpeg",
  "img/sad teddy 4.jpg",
  "img/sad teddy 3.jpeg",
];

function noClicked() {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.querySelector(".yes");
  const teddy = document.getElementById("teddy");

  // Update NO button text
  if (noCount === 0) {
    noBtn.innerText = "Are you sure?";
  } else if (noCount === 1) {
    noBtn.innerText = "Are you really sure?";
  } else {
    noBtn.innerText = "You've broken my heart 💔";
  }
  noCount++;

  // Increase YES button size up to maxYesSize
  if (yesSize < maxYesSize) {
    yesSize += 0.1; // growth step
    yesBtn.style.transform = `scale(${yesSize})`;
  }

  // Change the teddy image randomly
  const randomIndex = Math.floor(Math.random() * noImages.length);
  teddy.src = noImages[randomIndex];
}

function yesClicked() {
  const yesBtn = document.querySelector(".yes");

  // Reset YES button size back to normal
  yesBtn.style.transform = "scale(1)";
  yesSize = 1;

  document.getElementById("teddy").src = "img/teddy2.jpeg"; // Update if you have hugging teddy
  document.getElementById("question").innerText = "YAY!!! 💖";
  document.getElementById("text").innerText =
    "I LOVE YOU, OLUWASEYI STEPHEN 🥰🐻🐻";

  // Hide YES/NO buttons and show reset
  document.querySelector(".buttons").style.display = "none";
  document.getElementById("resetBtn").style.display = "inline-block";
}

function resetPage() {
  const yesBtn = document.querySelector(".yes");
  const teddy = document.getElementById("teddy");
  const noBtn = document.getElementById("noBtn");

  // Set image to the default one using lowercase folder
  teddy.src = "img/teddy.avif";

  document.getElementById("question").innerText = "Oluwaseyi Stephen 💖";
  document.getElementById("text").innerText = "Will you be my Valentine?";

  // Show YES/NO buttons and hide reset
  document.querySelector(".buttons").style.display = "flex";
  document.getElementById("resetBtn").style.display = "none";

  noBtn.innerText = "No";
  noCount = 0;

  yesBtn.style.transform = "scale(1)";
  yesSize = 1;
}


/* Floating hearts animation */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}, 300);
