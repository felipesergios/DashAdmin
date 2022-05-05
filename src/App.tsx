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
import RoutesApp from "./routes";

let isAuth = true

export default function App(){
  return(
    <ChakraProvider>
   
   {isAuth ? <DasboardScreen>
     <RoutesApp/>
   </DasboardScreen> : <AuthScreen />}   
    </ChakraProvider>
    
  )
}
