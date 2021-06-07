import { Link, Router } from "@reach/router";
import Home from "./views/Home";
import New from "./views/New";
import Edit from "./views/Edit";
function App() {
  return (
    <div>
      <Link to="/new">Create New</Link> | <Link to="/">Go Back Home</Link>
      <Router>
        <Home path="/" />
        <New path="/new" />
        <Edit path="/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
