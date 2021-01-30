import NavBar from "./components/Navbar";
import Home from "./components/Home";
import AddItem from "./components/AddItem";
import CategoryProducts from "./components/CategoryProducts";
import TypeProducts from "./components/TypeProducts";
import Users from "./components/users/Users";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/style.css";
import "./css/fashion.css";

function App() {
  return (
    <Router>
      <NavBar />
      <br />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/items/add">
          <AddItem />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route exact path="/:id">
          <CategoryProducts />
        </Route>
        <Route path="/:id/:cat">
          <TypeProducts />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
