const tanah = document.querySelectorAll(".tanah");
const tikus = document.querySelectorAll(".tikus");
const papanSkor = document.querySelector(".papan-skor");

let tanahSebelumnya;
let Selesai;
// random Tanah

function randomTanah(tanah) {
  const t = Math.floor(Math.random() * tanah.length);
  const tRandom = tanah[t];
  if (tRandom == tanahSebelumnya) {
    randomTanah(tanah);
  }
  tanahSebelumnya = tRandom;
  return tRandom;
}

function randomWaktu(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function munculTikus() {
  const tRandom = randomTanah(tanah);
  const waktu = randomWaktu(300, 1000);
  tRandom.classList.add("muncul");
  setTimeout(() => {
    tRandom.classList.remove("muncul");
    if (!Selesai) {
      munculTikus();
    }
  }, waktu);
}

function mulai() {
  Selesai = false;
  Skor = 0;
  munculTikus();
  setTimeout(() => {
    Selesai = true;
  }, 10000);
}

function pukul() {
  Skor++;
  papanSkor.textContent = Skor;
  this.parentNode.classList.remove("muncul");
}

tikus.forEach((t) => {
  t.addEventListener("click", pukul);
});
