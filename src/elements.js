import { Box, ChakraProvider, Flex, Image, Link, Spacer, Text, VStack, HStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import Font from './custom_font';
import theme from './custom_theme';
import { ScrollToTop } from './ScrollToTop';


function BasePage(props) {
  return (
    <Box bgColor={props.bgColor ? props.bgColor : 'rgb(204, 204, 204)'} maxWidth='100vw' minHeight='100vh' color='black'>
      <ScrollToTop />
      <NavBar/>
      <Box height='50vh'/>
      {props.children}
      <Box height='100vh'/>
      <Box p='1rem' textStyle='normal' textAlign='left'>
        {props.title}
      </Box>
    </Box>
  );
}

function NavBar(props) {
  return (
    <Flex height='3rem' position='fixed' top='0' left='0' right='0' color={props.color}>
      <Box m='1rem'>
        <TopAlignedText textStyle='normal'>
          <MyLink to='/'>GERNEDGE</MyLink>
        </TopAlignedText>
      </Box>
      <Spacer />
      <Box m='1rem'>
      <HStack spacing='2rem'>
        <TopAlignedText textStyle='normal'>
          <MyLink to='/archive'>Archive</MyLink>
        </TopAlignedText>
        <TopAlignedText textStyle='normal'>
          <MyLink to='/info'>Info</MyLink>
        </TopAlignedText>
      </HStack>
      </Box>
    </Flex>
  );
}

function ArchiveButton(props) {
  return (
    <VStack>
      <Image width='100%' src={'/images/' + props.name + '/' + props.coverImage} alt={props.name + '-cover'}/>
      <Link as={RouterLink} to={'/archive/' + props.name} textStyle='normal'>{props.title}</Link>
    </VStack>
  );
}

function TopAlignedText(props) {
  return (
    <Text position='relative' top='-0.38em' textStyle={props.textStyle}>
      {props.children}
    </Text>
  );
}

function MyLink(props) {
  return (
    <Link as={RouterLink} textStyle={props.textStyle} to={props.to} _hover={{textDecoration: 'none', color: props.hoverColor}}>
      {props.children}
    </Link>
  );
}

function MyExternalLink(props) {
  return (
    <Link textStyle={props.textStyle} color={props.color} href={props.href} isExternal _hover={{textDecoration: 'none', color: props.hoverColor}}>
      {props.children}
    </Link>
  );
}


export {BasePage, NavBar, ArchiveButton, TopAlignedText, MyLink, MyExternalLink};