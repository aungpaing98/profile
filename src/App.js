import { Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Works from "./components/Works";

export default function App() {
  return (
    <div className="container">
      <NavBar />
        <Switch>
          <Route path="/works" component={Works} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
    </div>
  );
}
