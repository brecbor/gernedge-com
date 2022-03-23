import React from 'react';
import { ChakraProvider, Box, Text, Link, VStack, Code, Grid, Image, Flex, Spacer, Heading } from '@chakra-ui/react';
import { Link as RouterLink } from "react-router-dom";
import Font from './custom_font'
import theme from './custom_theme'
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import {ScrollToTop} from './ScrollToTop';
import {BasePage, NavBar, ArchiveButton} from './elements';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ScrollToTop />
      <Box position='relative' maxWidth='100vw' minHeight='100vh'>
        <NavBar bgColor='#6cffd7'/>
        <Image src='images/background_main.jpg' alt='background'/>
        <Box position='absolute' bottom='0' left='0' m='16px'>
          <Text fontSize='16pt' lineHeight='1' fontWeight='bold' color='#6cffd7'>Code by Bor Brecelj. &copy; 2017—2022, Jernej Šimec, all rights reserved.</Text>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
