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
import { Link as RouterLink } from "react-router-dom";
import Font from './custom_font'
import theme from './custom_theme'
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
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
      <NavBar color='rgb(204, 204, 204)'/>
      <Image src='/images/background.jpg' alt='background' minHeight='100vh' minWidth='100vw'/>
      <Box position='absolute' bottom='0' left='0' m='16px'>
        <Text textStyle='small' lineHeight='1'>Code by Bor Brecelj. &copy; Images Jernej Šimec.</Text>
      </Box>
    </Box>
  );
}

export default App;
