export function movePlayer() {
  const player = document.getElementById("player");

  document.addEventListener("keydown", function (event) {
    if (event.key === "w") {
      let style = window.getComputedStyle(player);
      let top = style.getPropertyValue("top");
      let value = +top.slice(0, -2);
      player.style.top = `${(value -= 2)}px`;
    }
    if (event.key === "s") {
      let style = window.getComputedStyle(player);
      let top = style.getPropertyValue("top");
      let value = +top.slice(0, -2);
      player.style.top = `${(value += 2)}px`;
    }
    if (event.key === "a") {
      let style = window.getComputedStyle(player);
      let left = style.getPropertyValue("left");
      let value = +left.slice(0, -2);
      player.style.left = `${(value -= 2)}px`;
    }
    if (event.key === "d") {
      let style = window.getComputedStyle(player);
      let left = style.getPropertyValue("left");
      let value = +left.slice(0, -2);
      player.style.left = `${(value += 2)}px`;
    }
  });
}

// W/S control forward and backward, while A/D control strafing left and right.
