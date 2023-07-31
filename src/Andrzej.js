import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  GridItem,
  Image,
  Flex,
  Spacer,
  Heading,
  useMediaQuery,
  Center,
} from '@chakra-ui/react';



const andrzej_images = [
  '/images/andrzej/1.jpg',
  '/images/andrzej/2.jpg',
  '/images/andrzej/3.jpg'
];

function Andrzej(props) {
  const [normal] = useMediaQuery(['(min-width: 30em)']);

  return (
    <VStack spacing='50vh'>
      {andrzej_images.map((img) => (
        <Box width='100%'>
          <Image src={img} alt='andrzej' width='100%'/>
          <Box height='50vh'/>
          <Center width='100%' height='100vh'> 
            <Image src={img} alt='andrzej' py={{base: '48px', sm: '64px'}} height='100%'/>
          </Center>
        </Box>
      ))}
    </VStack>
  );
}

export default Andrzej;
