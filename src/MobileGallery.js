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
import {useSwipeable} from 'react-swipeable'

function MobileGallery(props) {
  const [index, setIndex] = React.useState(0);
  const n = props.images.length;

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => setIndex((index + 1) % n),
    onSwipedRight: (eventData) => setIndex((index + n - 1) % n),
  });

  return (
    <Center height='100%' {...handlers}>
      <VStack px='16px' width='100%'>
        <Image src={props.images[index]} width='100%' p={props.imageBorder ? '0.5%' : 0} bgColor='white'/>
        <Text>{(index+1).toString() + ' / ' + n}</Text>
      </VStack>
    </Center>
  );
}

export default MobileGallery