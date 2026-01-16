let noCount = 0;

function noClicked() {
  const noBtn = document.getElementById("noBtn");

  if (noCount === 0) {
    noBtn.innerText = "Are you sure?";
  } else if (noCount === 1) {
    noBtn.innerText = "Are you really sure?";
  } else {
    noBtn.innerText = "You've broken my heart 💔";
  }
  noCount++;
}

function yesClicked() {
  document.getElementById("teddy").src = "Img/teddy.avif"; // Update if you have a hugging teddy image
  document.getElementById("question").innerText = "YAY!!! 💖";
  document.getElementById("text").innerText =
    "I LOVE YOU, OLUWASEYI STEPHEN 🥰🐻🐻";

  // Hide YES/NO buttons and show reset
  document.querySelector(".buttons").style.display = "none";
  document.getElementById("resetBtn").style.display = "inline-block";
}

function resetPage() {
  document.getElementById("teddy").src = "Img/teddy.avif";
  document.getElementById("question").innerText = "Oluwaseyi Stephen 💖";
  document.getElementById("text").innerText = "Will you be my Valentine?";

  // Show YES/NO buttons and hide reset
  document.querySelector(".buttons").style.display = "flex";
  document.getElementById("resetBtn").style.display = "none";

  const noBtn = document.getElementById("noBtn");
  noBtn.innerText = "No";
  noCount = 0;
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
