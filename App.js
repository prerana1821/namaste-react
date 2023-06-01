import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
	"h1",
	{ id: "heading" },
	"This is the heading"
);

/* 
  * JSX (transpiled before it reaches the JS) - Parcel - Babel 
  *
  * JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLELement(render)
*/

const jsxHeading = (
	<h1 id='heading' className='heading' style={ { color: "white" } }>
		This is a JSX heading
	</h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
