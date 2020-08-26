import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import Header from "./Components/Header/Header";
import ExplorePage from "./Pages/Explore/ExplorePage";
import MenuPage from "./Pages/Menu/MenuPage";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/explore">
            <ExplorePage />
          </Route>
          <Route path="/menu">
            <MenuPage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
