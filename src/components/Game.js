import React, { useState, useEffect } from "react";
import { movePlayer } from "../game/move.js";
import { addCookie } from "../game/cookies.js";

export default function Game() {
  const [playGame, setPlayGame] = useState(true);
  useEffect(
    () => {
      if (playGame === true) {
        document.getElementById("startGameBtn").remove();

        let player = document.createElement("div");
        player.id = "player";
        document.getElementById("canvas").appendChild(player);
        movePlayer();
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
