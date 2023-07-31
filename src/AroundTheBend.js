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



const images = [
  '/images/around_the_bend/1.jpg',
  '/images/around_the_bend/2.jpg',
  '/images/around_the_bend/3.jpg',
  '/images/around_the_bend/4.jpg',
  '/images/around_the_bend/5.jpg',
  '/images/around_the_bend/6.jpg',
  '/images/around_the_bend/7.jpg',
  '/images/around_the_bend/8.jpg',
];

function AroundTheBend(props) {
  const [normal] = useMediaQuery(['(min-width: 30em)']);

  if(!normal) {
    return (
      <VStack spacing='0'>
        {images.map((img) => (
          <Image src={img} alt='around_the_bend' width='100%' px='16px' pt='50vh'/>
        ))}
        <Box height='100vh'/>
      </VStack>
    );
  }

  return (
    <VStack spacing='50vh'>
      {images.map((img) => (
        <Image src={img} alt='around_the_bend' width='100%' px='16px'/>
      ))}
    </VStack>
  );
}

export default AroundTheBend;
