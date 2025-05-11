// Makes the dot in "Under Construction." blink
const dot = document.getElementById('dot');
let dots = 1;

setInterval(() => {
  dots = (dots % 3) + 1;
  dot.textContent = '.'.repeat(dots);
}, 500);
