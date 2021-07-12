import React from 'react'
import CategorieItem from '../components/CategorieItem'
import CategorieList from '../components/CategorieList'
import { Flex,
         Text,
         Heading, 
         VStack, 
         StackDivider
       } from "@chakra-ui/react"

const AdopcionHome = () => {
    return (

        <Flex direction="column" mt={2} alignItems="center">
            <Heading mt={5} mb={5}>
               Adopta una adorable mascota
            </Heading>
            <Text mb={5} textStyle="h3">Categoría de mascotas</Text>
            <VStack 
                divider={<StackDivider borderColor="gray.200"/>}
                spacing={4}
                align="center">
               <CategorieItem />
               <CategorieList />
            </VStack>
        </Flex>
        
    )
}

export default AdopcionHome
