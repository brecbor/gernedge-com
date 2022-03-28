import { Box, ChakraProvider, Flex, Image, Link, Spacer, Text, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import theme from './custom_theme';
import { ScrollToTop } from './ScrollToTop';


function BasePage(props) {
  return (
    <ChakraProvider theme={theme}>
      <ScrollToTop />
      <Box bgColor='rgb(204, 204, 204)' maxWidth='100vw' minHeight='100vh'>
        <NavBar hoverColor='#6cffd7'/>
        <Box height='50vh'/>
        {props.children}
        <Box height='100vh'/>
        <Box p='24px' textStyle='normal' fontSize='24px' textAlign='left'>
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
        <TopAlignedText fontSize='24px'>
          <MyLink to='/' hoverColor={props.hoverColor}>GERNEDGE</MyLink>
        </TopAlignedText>
      </Box>
      <Spacer />
      <Box m='24px'>
        <TopAlignedText fontSize='24px'>
          <MyLink to='/archive' hoverColor={props.hoverColor}>Archive</MyLink> | <MyLink to='/info' hoverColor={props.hoverColor}>Info</MyLink>
        </TopAlignedText>
      </Box>
    </Flex>
  );
}

function ArchiveButton(props) {
  return (
    <VStack>
      <Image width='100%' src={'images/' + props.name + '/' + props.coverImage} alt={props.name + '-cover'}/>
      <Link as={RouterLink} to={'/archive/' + props.name} textStyle='normal' fontSize='24px'>{props.title}</Link>
    </VStack>
  );
}

function TopAlignedText(props) {
  return (
    <Text fontSize={props.fontSize} fontWeight='bold' position='relative' top='-0.38em'>
      {props.children}
    </Text>
  );
}

function MyLink(props) {
  return (
    <Link as={RouterLink} to={props.to} _hover={{textDecoration: 'none', color: props.hoverColor}}>
      {props.children}
    </Link>
  );
}

export {BasePage, NavBar, ArchiveButton, TopAlignedText, MyLink};