import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/logo.png";
import userIcon from "./images/user.jpeg";
import "./Assignment.css";

const nestedHeader = React.createElement(
  "div",
  { className: "title", key: "title" },
  [
    React.createElement("h1", { key: "h1" }, "This is h1"),
    React.createElement("h2", { key: "h2" }, "This is h2"),
    React.createElement("h3", { key: "h3" }, "This is h3"),
  ]
);

const nestedHeaderJSX = (
  <div className='title'>
    <h1>This is h1</h1>
    <h2>This is h2</h2>
    <h3>This is h3</h3>
  </div>
);

const NestedHeaderComponent = () => {
  return (
    <div className='title'>
      <h1 style={{ color: "yellow" }}>This is h1</h1>
      <h2 style={{ color: "pink" }}>This is h2</h2>
      <h3 style={{ color: "orange" }}>This is h3</h3>
    </div>
  );
};

const Header = () => {
  return (
    <div id='header'>
      <div>
        <img src={logo} id='logo' alt='precodes' srcset='' />
      </div>
      <input type='text' name='search' id='search' placeholder='Search...' />
      <div>
        <img src={userIcon} id='user' alt='user' />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
