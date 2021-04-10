const dino = document.getElementById("dino");
const rock = document.getElementById("rock");
const mosfet = document.getElementById("mosfet");
const shock = document.getElementById("shock");
const score = document.getElementById("score");
const current = document.getElementById("current");
const idd = document.getElementById("idd");
const final = document.getElementById("final");


function jump() {
  dino.classList.add("jump-animation");
  setTimeout(() =>
    dino.classList.remove("jump-animation"), 1000);
}

document.addEventListener('keypress', (event) => {
  if (!dino.classList.contains('jump-animation')) {
    jump();
  }
})
setInterval(() => {
  const dinoTop = parseInt(window.getComputedStyle(dino)
    .getPropertyValue('top'));
  const rockLeft = parseInt(window.getComputedStyle(rock)
    .getPropertyValue('left'));
    const mosfetLeft = parseInt(window.getComputedStyle(mosfet)
    .getPropertyValue('left'));
    const shockLeft = parseInt(window.getComputedStyle(shock)
    .getPropertyValue('left'));
    const currentLeft = parseInt(window.getComputedStyle(current)
    .getPropertyValue('left'));
    const iddLeft = parseInt(window.getComputedStyle(idd)
    .getPropertyValue('left'));
    const finalLeft = parseInt(window.getComputedStyle(final)
    .getPropertyValue('left'));
  score.innerText++;

  

  if (rockLeft < 50 && rockLeft > 0 && dinoTop > 150) {
    alert("It is a D-TYPE Mosfet --> Score: " + score.innerText +
      "\n\nPlay again?");
      location.reload();
    
  }
  if (mosfetLeft < 50 && mosfetLeft > 0 && dinoTop > 150) {
    alert("It is a BJT --> Score: " + score.innerText +
      "\n\nPlay again?");
      location.reload();
  }
  if (shockLeft < 50 && shockLeft > 0 && dinoTop < 150) {
        alert("The equation was correct --> Score " + score.innerText +
          "\n\nPlay again?");
          location.reload();
    
  }
  if (currentLeft < 50 && currentLeft > 0 && dinoTop > 150) {
    alert("It is FET a voltage controlled device --> Score " + score.innerText +
      "\n\nPlay again?");
      location.reload();

}
if (iddLeft < 50 && iddLeft > 0 && dinoTop < 150) {
  alert("Ig is appoximatley equal to ZERO --> Score " + score.innerText +
    "\n\nPlay again?");
    location.reload();
}
if (finalLeft < 50 && finalLeft > 0 && dinoTop < 150) {
  alert("1= Depletion Zone, 2 = Enhancement Zone --> Score " + score.innerText +
    "\n\nPlay again?");
    location.reload();
}
if (score.innerText>=820){
  alert("Congratualtions on completing the Game!");
  location.reload();
}
}, 50);
