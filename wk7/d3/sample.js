const myReactComponent = React.createElement(
  "h1",
  {},
  "I am creating my first React component"
);

const div = React.createElement("h3", {}, "hello world!");

const renderMethod = React.createElement("div", {}, [myReactComponent, div]);
ReactDOM.render(renderMethod, document.getElementById("root"));
