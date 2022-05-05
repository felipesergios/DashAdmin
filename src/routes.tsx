import * as React from "react"
import {
  ChakraProvider,
  Box,
  theme,
} from "@chakra-ui/react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AuthScreen from "./components/AuthScreen"
import StatsCards from "./components/StatsCard";
import LandingPage from "./components/LandingPage";



export default function RoutesApp(){
  return(
    
    <Router>
    <Switch>

        <Route path="/home">
            <h1>Aqui ficara o painel</h1>
        </Route>

        <Route path="/data">
            <LandingPage/>
        </Route>

        <Route path="/stats">
            <StatsCards/>
        </Route>

    </Switch>
    </Router>
   
    
  )
}
