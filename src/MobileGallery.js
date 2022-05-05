import {
  Grid,
  GridItem,
  Image,
  VStack,
  HStack,
  Box,
  useDimensions,
  Flex,
  Button,
  Text,
  useMediaQuery,
  Center
} from '@chakra-ui/react';
import React from 'react';
import {useSwipeable} from 'react-swipeable';
import { IconContext } from "react-icons";
import { BsCircleFill, BsCircle } from "react-icons/bs";

function MobileGallery(props) {
  const [index, setIndex] = React.useState(0);
  const n = props.images.length;

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => setIndex((index + 1) % n),
    onSwipedRight: (eventData) => setIndex((index + n - 1) % n),
  });

  /*let empty_dot='○', full_dot='●', dots = [];
  for(let i=0; i<n; i++) {
    if(i == index) {
      dots.push(
        <IconContext.Provider value={{ color: "black", size: '8px' }}>
          <BsCircleFill/>
        </IconContext.Provider>
      );//<BsCircleFill w='8px' h='8px'/>);//<Text pt='2.5px' lineHeight='24px' fontSize='10px'>{full_dot}</Text>);
    }
    else {
      dots.push(
        <IconContext.Provider value={{ color: "black", size: '8px' }}>
          <BsCircle/>
        </IconContext.Provider>
      );//<BsCircle w='8px' h='8px'/>);//<Text lineHeight='24px'  fontSize='16px'>{empty_dot}</Text>);
    }
  }*/

  return (
    <Center height='100%' {...handlers}>
      <VStack px='16px' width='100%' spacing='16px'>
        <Image src={props.images[index]} width='100%' p={props.imageBorder ? '0.5%' : 0} bgColor='white'/>
        <Text fontSize='8px'>{(index+1).toString() + '/' + n}</Text>
      </VStack>
    </Center>
  );
}

export default MobileGallery