import React from "react";

export default function Skillset() {
  return (
    <div>
      <h2 className="title is-2">Skillset</h2>
      <ul>
        <li>
          JavaScript ES6
          <progress className="progress is-primary" value="60" max="100" />
        </li>
        <li>
          React
          <progress className="progress is-primary" value="40" max="100" />
        </li>
        <li>
          MongoDB
          <progress className="progress is-primary" value="30" max="100" />
        </li>
        <li>
          Express.js
          <progress className="progress is-primary" value="30" max="100" />
        </li>
        <li>
          HTML
          <progress className="progress is-primary" value="90" max="100" />
        </li>
        <li>
          CSS
          <progress className="progress is-primary" value="90" max="100" />
        </li>
        <li>
          CSS pre-processing with SASS
          <progress className="progress is-primary" value="30" max="100" />
        </li>
        <li>
          CSS frameworks (Bulma, Bootstrap)
          <progress className="progress is-primary" value="40" max="100" />
        </li>
        <li>
          Git / GitHub
          <progress className="progress is-primary" value="50" max="100" />
        </li>

        <li>
          Currently studying: TypeScript
          <progress className="progress is-primary" max="100" />
        </li>
        <li>
          Currently studying: Testing with Jest
          <progress className="progress is-primary" max="100" />
        </li>
      </ul>
    </div>
  );
}
