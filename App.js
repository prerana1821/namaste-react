import React from "react";
import ReactDOM from "react-dom/client";

/* 
  * JSX (transpiled before it reaches the JS) - Parcel - Babel 
  *
  * JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLELement(render)
*/

const headingElement = (
	<h1 id='heading' className='heading' style={ { color: "white" } }>
		This is a JSX heading
	</h1>
);

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
			{ JSXHeading() }
			<JSXHeading />
			<JSXHeading></JSXHeading>
			{/* { headingElement } - this is how you call element in JSX */ }
			<h1>This is a component heading.</h1>
		</div>
	);
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent1 />);
