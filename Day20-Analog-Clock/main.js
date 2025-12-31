const hrs = document.getElementById("hours");
const mins = document.getElementById("minutes");
const secs = document.getElementById("seconds");
const main = document.getElementById("main");

const hDist = 20;
const mDist = 20;
const sDist = 20;

setInterval(() => {
  let d = new Date();

  const h = d.getHours() % 12;
  const m = d.getMinutes();
  const s = d.getSeconds();

  const filler = (val) => `<p>${val}</p>`.repeat(3);
  hrs.innerHTML = filler(h);
  mins.innerHTML = filler(m);
  secs.innerHTML = filler(s);

  const sDeg = s * 6 - 90;
  const mDeg = m * 6 - 90;
  const hDeg = h * 30 + m * 0.5 - 90;

  secs.style.transform = `rotate(${sDeg}deg) translateX(${sDist}px)`;
  mins.style.transform = `rotate(${mDeg}deg) translateX(${mDist}px)`;
  hrs.style.transform = `rotate(${hDeg}deg) translateX(${hDist}px)`;
}, 1000);
