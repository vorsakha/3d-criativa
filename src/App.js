import React from "react"
import {Route, Switch} from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Instagram from "./components/Instagram"



export default function App() {
    return(
        <div id="container">
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/portfolio">
                    <Portfolio />
                </Route>

                <Route path="/contact">
                    <Contact />
                </Route>

                <Route path="/socials">
                    <Instagram />
                </Route>
            </Switch>
        </div>

    )
}