/*
 *
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm a h1 tag.</h1>
 *          <h2>I'm a h2 tag.</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I'm a h1 tag.</h1>
 *          <h2>I'm a h2 tag.</h2>
 *      </div>
 * </div>
 *
 *
 */

const parent = React.createElement("div", { id: "parent" }, [
	React.createElement("div", { id: "child" }, [
		React.createElement("h1", {}, "I'm a h1 tag"),
		React.createElement("h2", {}, "I'm a h2 tag"),
	]),
	React.createElement("div", { id: "child2" }, [
		React.createElement("h1", {}, "I'm a h1 tag"),
		React.createElement("h2", {}, "I'm a h2 tag"),
	]),
]); // => unreadable code => that's why we use JSX

console.log(parent);

// const heading = React.createElement(
//     "h1",
//     {
//         id: "heading",
//         xyz: "abc",
//         style: { color: "red" },
//     },
//     "Hello world from React"
// );

// console.log(heading); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
