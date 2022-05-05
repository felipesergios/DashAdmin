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


import DasboardScreen from "./components/DashboardScreen";



export default function App(){
  return(
    <ChakraProvider>
    <Router>
    <Switch>
        

        <Route path="/admin">
          <DasboardScreen/>
        </Route>

        <Route path="/">
          <AuthScreen/>
        </Route>

    </Switch>
    </Router>
    </ChakraProvider>
    
  )
}
