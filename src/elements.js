import {
  Box,
  ChakraProvider,
  Flex,
  Image,
  Link,
  Spacer,
  Text,
  VStack,
  HStack,
  Button,
  useMediaQuery,
  Center
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import React, { useEffect } from 'react';
import Font from './custom_font';
import theme from './custom_theme';
import { ScrollToTop } from './ScrollToTop';
import Archive from './Archive';

const next_project = {
  'Units, 2021': '/archive/45_14',
  '45.588620, 14.447503, 2021': '/archive/memory_induced',
  'Memory Induced, 2020': '/archive/field_recording',
  'Memory Induced, colour video and sound, 2020': '/archive/field_recording',
  'FR_200607': '/archive/send_nudes',
  'Send Nudes, 2019': '/info',
  'Info': '/archive/units',
};

function BasePage(props) {
  useEffect(() => {
    document.title = props.webTitle ? 'Gernedge | ' + props.webTitle : 'Gernedge';
  }, [props.webTitle]);

  const [normal] = useMediaQuery(['(min-width: 30em)']);

  if(!normal) {
    return (
      <Box bgColor={/*props.bgColor ? props.bgColor : */'rgb(204, 204, 204)'} maxWidth='100vw' minHeight='100%'
           color='black'>
        {props.title==='Info' ? null :
          (<Flex position='fixed' top='0' left='0' right='0'>
          <Box p='16px' textStyle='normal' textAlign='left'>
            {props.title}
          </Box>
        </Flex>)}
        {props.title==='Info' ? (
          <Box width='100%' minHeight='100vh'>
            {props.children}
          </Box>
          ) : (
          <Center width='100%' minHeight='100vh'>
            {props.children}
          </Center>
        )}
        <Flex height='48px' position='fixed' bottom='0' left='0' right='0' >
          <Box m='16px'>
            <TopAlignedText textStyle='normal'>
              <MyLink to='/'>Index</MyLink>
            </TopAlignedText>
          </Box>
          <Spacer />
          <Box m='16px'>
            <TopAlignedText textStyle='normal'>
              <MyLink to={next_project[props.title]}>&rarr;</MyLink>
            </TopAlignedText>
          </Box>
        </Flex>
      </Box>
    );
  }

  if(props.noScroll) {
    return (
      <Box bgColor={props.bgColor ? props.bgColor : 'rgb(204, 204, 204)'} maxWidth='100vw' height='100vh'
           color='black'>
        <ScrollToTop/>
        <NavBar/>
        <Box height='100%'>
          {props.children}
        </Box>
        <Flex position='fixed' bottom='0' left='0' right='0'>
          <Box p='16px' textStyle='normal' textAlign='left'>
            {props.title}
          </Box>
        </Flex>
      </Box>
    );
  }
  else {
    return (
      <Box bgColor={props.bgColor ? props.bgColor : 'rgb(204, 204, 204)'} maxWidth='100vw' minHeight='100vh'
           color='black'>
        <ScrollToTop/>
        <NavBar/>
        <Box height='50vh'/>
        {props.children}
        <Box height='100vh'/>
        <Box p='16px' textStyle='normal' textAlign='left'>
          {props.title}
        </Box>
      </Box>
    );
  }
}

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {scrolledTop: true, scrolledBottom: false};
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = () => {
    const scrolledTop = document.documentElement.scrollTop < 1;
    this.setState({
      scrolledTop: scrolledTop,
      scrolledBottom: Math.abs(document.documentElement.scrollHeight - document.documentElement.clientHeight
                                - document.documentElement.scrollTop) < 1,
    });
  };

  render() {
    return (
      <Flex height='48px' position='fixed' top='0' left='0' right='0' color={this.props.color}
            visibility={this.state.scrolledTop || this.state.scrolledBottom ? 'visible' : 'hidden'}>
        <Box m='16px'>
          <TopAlignedText textStyle='normal'>
            <MyLink to='/'>GERNEDGE</MyLink>
          </TopAlignedText>
        </Box>
        <Spacer />
        <Box m='16px'>
          <HStack spacing='32px'>
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
}

function ArchiveButton(props) {
  return (
    <VStack spacing={0}>
      <MyLink width='100%' to={'/archive/' + props.name} textStyle='normal'>
        <Image width='100%' src={'/images/' + props.name + '/' + props.coverImage} alt={props.name + '-cover'}/>
      </MyLink>
      <Box>
        <MyLink to={'/archive/' + props.name} textStyle='normal'>{props.title}</MyLink>
      </Box>
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
    <Link as={RouterLink} textStyle={props.textStyle} to={props.to}
          _hover={{textDecoration: 'none', color: props.hoverColor}}
          _active={{textDecoration: 'none'}}
          _focus={{textDecoration: 'none'}}>
      {props.children}
    </Link>
  );
}

function MyExternalLink(props) {
  return (
    <Link textStyle={props.textStyle} color={props.color} href={props.href} isExternal
          _hover={{textDecoration: 'none', color: props.hoverColor}}
          _active={{textDecoration: 'none'}}
          _focus={{textDecoration: 'none'}}>
      {props.children}
    </Link>
  );
}


export {BasePage, NavBar, ArchiveButton, TopAlignedText, MyLink, MyExternalLink};
