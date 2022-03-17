import React from 'react';
import { ChakraProvider, Box, Text, Link, VStack, Code, Grid, Image, Flex, Spacer, Heading } from '@chakra-ui/react';
import { Link as RouterLink } from "react-router-dom";
import Font from './custom_font'
import theme from './custom_theme'
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import {ScrollToTop} from './ScrollToTop';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ScrollToTop />
      <Box position='relative' maxWidth='100vw' minHeight='100vh'>
        <Flex height='65px' bgColor='#6cffd7' position='fixed' top='0' left='0' right='0'>
          <Box m='16px'>
            <Link as={RouterLink} to='/' fontSize='24pt' lineHeight='1' fontWeight='bold'>GERNEDGE</Link>
          </Box>
          <Spacer />
          <Box m='16px'>
            <Text fontSize='24pt' lineHeight='1' fontWeight='bold'>
              <Link as={RouterLink} to='/info'>Archive</Link> | <Link as={RouterLink} to='/info'>Info</Link>
            </Text>
          </Box>
        </Flex>
        <Image src='images/background_main.jpg' alt='background'/>
        <Box position='absolute' bottom='0' left='0' m='16px'>
          <Text fontSize='16pt' lineHeight='1' fontWeight='bold' color='#6cffd7'>Code by Bor Brecelj. &copy; 2017—2022, Jernej Šimec, all rights reserved.</Text>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
