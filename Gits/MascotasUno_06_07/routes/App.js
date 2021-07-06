import React from 'react'
import { ChakraProvider, Button } from "@chakra-ui/react"
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AdopcionHome from '../containers/AdopcionHome'
import theme from '../styles/theme'

const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <Router>
                <Switch>
                    <Route exact path="/" component={AdopcionHome} />
                </Switch>
            </Router>
        </ChakraProvider>
    )
}

export default App
