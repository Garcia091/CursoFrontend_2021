import React from 'react'
import { ChakraProvider, Button } from "@chakra-ui/react"

const App = () => {
    return (
        <ChakraProvider>
            <Button colorScheme="blue">Button</Button>
        </ChakraProvider>
    )
}

export default App
