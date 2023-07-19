import React, { useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Image,
  Flex,
  Spacer,
  Heading,
  useMediaQuery,
} from '@chakra-ui/react';
import {ScrollToTop} from './ScrollToTop';
import {BasePage, NavBar, ArchiveButton} from './elements';
import Archive from './Archive';

function App(props) {
  useEffect(() => {
    document.title = props.webTitle ? 'Gernedge | ' + props.webTitle : 'Gernedge';
  }, [props.webTitle]);

  const [normal] = useMediaQuery(['(min-width: 30em)']);
  if(!normal) {
    return (<Archive webTitle='Archive'/>);
  }

  return (
    <Box position='relative' width='100vw' height='100vh' overflow='hidden' color='rgb(204, 204, 204)'>
      <ScrollToTop />
      <NavBar color={'black'/*'rgb(204, 204, 204)'*/}/>
      <Image src='/images/Gernedge.jpg' alt='background' minHeight='100vh' minWidth='100vw'/>
      <Box position='absolute' bottom='0' left='0' m='16px'>
        <Text textStyle='small' lineHeight='1' color='black'>Code by Bor Brecelj. &copy; Images Jernej Šimec.</Text>
      </Box>
      <Flex height='50vh' position='fixed' top='25vh' left='0' right='0' width='100%'>
        <Image src='/images/Gernedge_Main_photo.jpg' alt='main photo' height='100%' margin='auto'/>
      </Flex>
    </Box>
  );
}

export default App;
