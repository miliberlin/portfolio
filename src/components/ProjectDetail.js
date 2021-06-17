import React from "react";

export default function ProjectDetail(props) {
  let stack = props.project.stack.map((item) => <span>{item} </span>);
  return (
    <div className="card">
      <div className="card-content">
        <p className="title">{props.project.name}</p>
        <p className="subtitle">{stack}</p>
        <div className="content">{props.project.description}</div>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">
          <span>
            <a href={props.project.demo_url}>Demo</a>
          </span>
        </p>
        <p className="card-footer-item">
          <span>
            <a href={props.project.git_url}>GitHub</a>
          </span>
        </p>
      </footer>
    </div>
  );
}
