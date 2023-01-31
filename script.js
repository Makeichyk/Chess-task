const spots = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

drawSpots();

function drawSpots() {
  let a = " ";
  let counter = 1;
  let x = 0;
  let y = 0;

  for (let i = 0; i < spots.length; i++) {
    for (let j = 0; j < spots[i].length; j++) {
      if (counter % 2 !== 0) {
        document.querySelector(
          ".chess-board"
        ).innerHTML += `<div class="spot black-spot" data-x="${
          i + 1
        }" data-y="${j + 1}">${a}</div>`;
        counter++;
      } else {
        document.querySelector(
          ".chess-board"
        ).innerHTML += `<div class= "spot" data-x="${i + 1}" data-y="${
          j + 1
        }">${a}</div>`;
        counter++;
      }
    }
    counter++;
  }

  document
    .querySelectorAll(".spot")
    .forEach((item) => (item.onclick = hoursePosition));
}

function hoursePosition() {
  document.querySelectorAll(".active").forEach(item=> item.classList.remove("active"));
  document.querySelectorAll(".available-spot").forEach(item => item.classList.remove("available-spot"));
  this.classList.add("active");

  let x = this.dataset.x;
  let y = this.dataset.y;

  if (+x - 2 > 0 && +y + 1 <= 8) {
    document
      .querySelector(`.spot[data-x="${+x-2}"][data-y="${+y+1}"]`)
      .classList.add("available-spot");
  }
  if (+x - 1 > 0 && +y + 2 <= 8) {
    document
      .querySelector(`.spot[data-x="${+x-1}"][data-y="${+y+2}"]`)
      .classList.add("available-spot");
  }
  if (+x + 1 <= 8 && +y + 2 <= 8) {
    document
      .querySelector(`.spot[data-x="${+x+1}"][data-y="${+y + 2}"]`)
      .classList.add("available-spot");
  }
  if (+x + 2 <= 8 && +y + 1 <= 8) {
    document
      .querySelector(`.spot[data-x="${+x+2}"][data-y="${+y + 1}"]`)
      .classList.add("available-spot");
  }
  if (+x + 2 <= 8 && +y - 1 > 0) {
    document
      .querySelector(`.spot[data-x="${+x+2}"][data-y="${+y-1}"]`)
      .classList.add("available-spot");
  }
  if (+x + 1 <= 8 && +y - 2 > 0) {
    document
      .querySelector(`.spot[data-x="${+x+1}"][data-y="${+y - 2}"]`)
      .classList.add("available-spot");
  }
  if (+x - 2 <= 8 && +y - 1 > 0) {
    document
      .querySelector(`.spot[data-x="${+x-2}"][data-y="${+y-1}"]`)
      .classList.add("available-spot");
  }
  if (+x - 1 <= 8 && +y - 2 > 0) {
    document
      .querySelector(`.spot[data-x="${+x-1}"][data-y="${+y - 2}"]`)
      .classList.add("available-spot");
  }
}
