import React from "react";

export default function ProjectDetail(props) {
  let stack = props.project.stack.map((item) => <span>{item} </span>);
  return (
    <div>
      <p>Name: {props.project.name}</p>
      <p>Stack: {stack}</p>
      <p>
        <a href={props.project.demo_url}>Demo</a>
      </p>
      <p>
        <a href={props.project.git_url}>GitHub</a>
      </p>
      <p>{props.project.description}</p>
    </div>
  );
}
