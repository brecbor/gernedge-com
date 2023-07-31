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
  {img: '/images/cycle/1.jpg', row: 1, col: 1},
  {img: '/images/cycle/2.jpg', row: 1, col: 2},  
  {img: '/images/cycle/3.jpg', row: 1, col: 3},
  {img: '/images/cycle/4.jpg', row: 1, col: 4},
  {img: '/images/cycle/5.jpg', row: 1, col: 5},
  {img: '/images/cycle/6.jpg', row: 1, col: 6},
  {img: '/images/cycle/7.jpg', row: 2, col: 6},
  {img: '/images/cycle/8.jpg', row: 2, col: 5},
  {img: '/images/cycle/9.jpg', row: 2, col: 4},
  {img: '/images/cycle/10.jpg', row: 2, col: 3},
  {img: '/images/cycle/11.jpg', row: 2, col: 2},
  {img: '/images/cycle/12.jpg', row: 2, col: 1},  
];

function Cycle(props) {
  const [normal] = useMediaQuery(['(min-width: 30em)']);

  if(!normal) {
    return (
      <VStack width='100%' spacing={0}>
        {images.map((img) => (
          <Image width='100%' src={img.img} alt='cycle'/>
        ))}
        <Image src='/images/cycle/Fire.jpg' alt='fire' width='100%'/>
        <Box height='100vh'/>
      </VStack>
    );
  }

  return (
    <VStack spacing='0'>
      <Center height='100vh' width='100%'>
        <Grid templateColumns='repeat(6, 1fr)' templateRows='repeat(2, 1fr)' p='16px' gap='16px' width='100%'>
          {images.map((image) => (
            <GridItem colStart={image.col} colEnd={image.col+1} rowStart={image.row} rowEnd={image.row+1}>
              <Image src={image.img} alt='cycle'/>
            </GridItem>
          ))}
        </Grid>
      </Center>
      <Box height='50vh'/>
      <Image src='/images/cycle/Fire.jpg' alt='fire' width='100%'/>
    </VStack>
  );
}

export default Cycle;
