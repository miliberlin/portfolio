import React, { useState, useEffect } from "react";

export default function Game() {
  const [playGame, setPlayGame] = useState(false);
  useEffect(
    () => {
      if (playGame === true) {
        document.getElementById("startGameBtn").remove();
        let player = document.createElement("div");
        player.classList.add("player");
        document.getElementById("canvas").appendChild(player);
      }
      //   effect
      //   return () => {
      //       cleanup
      //   }
    }
    //   , [input]
  );
  return (
    <div id="canvas">
      <button
        id="startGameBtn"
        className="button is-primary"
        onClick={() => setPlayGame(true)}
      >
        Do you want to play a game?
      </button>
    </div>
  );
}
