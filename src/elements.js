import { Box, ChakraProvider, Flex, Link, Spacer, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import theme from './custom_theme';
import { ScrollToTop } from './ScrollToTop';


function BasePage(props) {
  return (
    <ChakraProvider theme={theme}>
      <ScrollToTop />
      <Box bgColor='rgb(204, 204, 204)' maxWidth='100vw' minHeight='100vh'>
        <NavBar/>
        <Box height='50vh'/>

        {props.children}

        <Box height='100vh'/>
        <Box p='24px' textStyle='normal' fontSize='24pt' textAlign='left'>
          {props.title}
        </Box>
      </Box>
    </ChakraProvider>
  );
}

function NavBar(props) {
  return (
    <Flex height='65px' position='fixed' top='0' left='0' right='0' bgColor={props.bgColor}>
      <Box m='24px'>
        <Link as={RouterLink} to='/' fontSize='24pt' lineHeight='1' fontWeight='bold'>GERNEDGE</Link>
      </Box>
      <Spacer />
      <Box m='24px'>
        <Text fontSize='24pt' lineHeight='1' fontWeight='bold'>
          <Link as={RouterLink} to='/archive'>Archive</Link> | <Link as={RouterLink} to='/info'>Info</Link>
        </Text>
      </Box>
    </Flex>
  );
}

function ArchiveButton() {
  return (
    <div>bla</div>
  );
}

export {BasePage, NavBar, ArchiveButton};