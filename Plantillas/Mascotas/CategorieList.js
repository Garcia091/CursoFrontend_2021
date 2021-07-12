import React from "react";
import { Link } from "react-router-dom";
import { Box, Wrap, Image, Text, WrapItem } from "@chakra-ui/react";

const CategorieList = () => {
  return (
    <Wrap spacing="40px" justify="center">
          <WrapItem >
            {/** Section: dogs - cats
             * localhost:300/dogs/dog-1
             * localhost:300/cats/cat-1
             */}  
            <Link to="">
              <Box maxW="sm" rounded="lg" overflow="hidden">
                <Image
                  height={400}
                  width={250}
                  src="https://res.cloudinary.com/db9wh5uvt/image/upload/v1625537710/dog_vlvviz.png"
                  alt="img"
                  opacity={0.6}
                  _hover={{
                    opacity: "1",
                  }}
                />
                <Text color="brand.white" textStyle="h5" mt={-50} ml={5}>
                  Nombre perro
                </Text>
                <Text color="brand.white" textStyle="h6" ml={5}>
                 Perro
                </Text>
              </Box>
            </Link>
          </WrapItem>
    </Wrap>
  );
};

export default CategorieList;