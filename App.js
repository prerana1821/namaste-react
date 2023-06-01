import React from "react";
import ReactDOM from "react-dom/client";

/* 
  * JSX (transpiled before it reaches the JS) - Parcel - Babel 
  *
  * JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLELement(render)
*/

const JSXHeading = () => (
	<h1 id='heading' className='heading' style={ { color: "white" } }>
		This is a JSX heading
	</h1>
);

const HeadingComponent = () => <h1>This is a component heading.</h1>

// component composition
const HeadingComponent1 = () => {
	return (
		<div>
			<JSXHeading />
			<h1>This is a component heading.</h1>
		</div>
	);
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent1 />);
