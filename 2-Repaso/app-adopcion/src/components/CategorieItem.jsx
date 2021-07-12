import React, { useEffect, useState } from 'react'
import {
  Wrap,
  WrapItem,
  Flex,
  Stack,
  Center,
  Avatar,
  Text
} from "@chakra-ui/react"
import CategorieList from './CategorieList'

const CategorieItem = () => {
  const [categories, setCategories] = useState([])
  const [tipo, setTipo] = useState([])

  const categoriesInfo = async () => {
    const url = 'http://localhost:3004/categories'
    const resp = await fetch(url)
    const data = await resp.json()
    setCategories(data)
  }

  useEffect(() => {
    categoriesInfo()
  }, [])

  const handleList = (name) => {
    setTipo(name)
    console.log(name)
  }

  return (
    <Wrap ml={3} spacing="40px" justify="center" >

      {
        categories.map(mascota => {
          return (
            <WrapItem key={mascota.name}
              w="240px"
              bg={"brand.black"}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
              ml={5}
              mr={15}
              cursor="pointer"
              opacity={0.8}
              _hover={{
                opacity: "1",
              }}
              onClick={() => handleList(mascota.name)}
            >
              <Flex justify={"center"} mt={2} mb={2}>
                <Stack direction={"row"}>
                  <Center w="100px">
                    <Avatar
                      size={"xl"}
                      ml={5}
                      src={mascota.image}
                      alt={mascota.nome}
                      css={{
                        border: "2px solid white",
                      }}
                      bg={"brand.green"}
                    />
                  </Center>
                  <Center w="100px">
                    <Text ml={5} color="brand.white" textStyle="h4">
                      {mascota.section}
                    </Text>
                  </Center>
                </Stack>
              </Flex>
            </WrapItem>
          )
        })
      }

      <CategorieList tipo={tipo} />
    </Wrap>
  )
}

export default CategorieItem
