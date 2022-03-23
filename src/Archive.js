import React from 'react';
import { ChakraProvider, Box, Text, Link, VStack, HStack, Code, Grid, Image, Flex, Spacer, Heading } from '@chakra-ui/react';
import Font from './custom_font'
import theme from './custom_theme'
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Link as RouterLink } from 'react-router-dom';
import {ScrollToTop} from './ScrollToTop';
import {BasePage, NavBar, ArchiveButton} from './elements';

function Archive() {
  return (
    <BasePage title='Archive'>
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
    </BasePage>
  );
}

export default Archive;
