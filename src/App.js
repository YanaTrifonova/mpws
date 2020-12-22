import './App.css';
import React from "react";
import {Route, Switch} from 'react-router';
import About from "./pages/about";
import Main from "./pages/main";
import PageNotFound from "./pages/404";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/about" component={About}/>
                <Route exact path="/" component={Main}/>
                <Route path="/" component={PageNotFound}/>
            </Switch>
        </div>
    );
}

export default App;
