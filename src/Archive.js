import React from 'react';
import { ChakraProvider, Box, Text, Link, VStack, HStack, Code, Grid, Image, Flex, Spacer, Heading } from '@chakra-ui/react';
import Font from './custom_font'
import theme from './custom_theme'
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Link as RouterLink } from 'react-router-dom';
import {ScrollToTop} from './ScrollToTop';

function Archive() {
  return (
    <ChakraProvider theme={theme}>
      <ScrollToTop />
      <Box bgColor='rgb(204, 204, 204)' maxWidth='100vw' minHeight='100vh'>
        <Flex height='65px' position='fixed' top='0' left='0' right='0'>
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
        <Box height='50vh'/>


        <HStack m='24px' spacing='24px' alignItems='top'>
          <VStack w='33%' spacing='96pt'>
            <Box w='100%' h='500px' bg='tomato'>
              1a
            </Box>
            <Box w='100%' h='320px' bg='yellow'>
              1b
            </Box>
            <Box w='100%' h='600px' bg='blue.100'>
              1c
            </Box>
          </VStack>

          <VStack w='33%' spacing='96pt'>
            <Box w='100%' h='620px' bg='green.50'>
              2a
            </Box>
            <Box w='100%' h='700px' bg='orange.200'>
              2b
            </Box>
            <Box w='100%' h='550px' bg='aqua'>
              2c
            </Box>
          </VStack>

          <VStack w='33%' spacing='96pt'>
            <Box w='100%' h='300px' bg='pink.300'>
              3a
            </Box>
            <Box w='100%' h='420px' bg='green.100'>
              3b
            </Box>
            <Box w='100%' h='690px' bg='white'>
              3c
            </Box>
          </VStack>
        </HStack>


        <Box height='100vh'/>
        <Box p='24px' textStyle='normal' fontSize='24pt' textAlign='left'>
          Archive
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default Archive;
