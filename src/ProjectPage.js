import React from 'react';
import {useParams} from "react-router-dom";
import { ChakraProvider, Box, Text, Link, VStack, HStack, Code, Grid, Image, Flex, Spacer, Heading, GridItem } from '@chakra-ui/react';
import Font from './custom_font'
import theme from './custom_theme'
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Link as RouterLink } from 'react-router-dom';
import {ScrollToTop} from './ScrollToTop';
import {BasePage, NavBar, ArchiveButton} from './elements';
import Archive from './Archive';
import Project_45_14 from './Project_45_14';
import Gallery from './Gallery';


const content = {
  'units': {
    'title': 'Units, 2021',
    'noScroll': true,
    'content': (
      <Gallery images={[
        '/images/units/01.jpg',
        '/images/units/02.jpg',
        '/images/units/03.jpg',
        '/images/units/04.jpg',
        '/images/units/05.jpg'
      ]}/>
    )
  },
  '45_14': {
    'title': '45.588620, 14.447503, 2021',
    'content': (
      <Project_45_14/>
    )
  },
  'field_recording': {
    'bgColor': 'white',
    'title': 'FR_200607, 2020',
    'content': (
      <Box width='100%' position='relative' p='56.25% 0 0 0'>
        <iframe src="https://player.vimeo.com/video/655024508?h=e226ff68bd&autoplay=1&title=0&byline=0&portrait=0"
                style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0}/*"position:absolute;top:0;left:0;width:100%;height:100%;"*/} frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </Box>
    )
  },
  'memory_induced': {
    'title': 'Memory Induced, colour video and sound, 2020',
    'content': (
      <Box mx='auto' mt={'0'/*'31.25vw'*/} width='50%' position='relative' p='37.5% 0 0 0'>
        <iframe src="https://player.vimeo.com/video/600951447?h=1939fc6cc1&autoplay=1&title=0&byline=0&portrait=0"
                style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0}} frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </Box>
    )
  },
  'send_nudes': {
    'title': 'Send Nudes, 2019',
    'noScroll': true,
    'content': (
      <Gallery imageBorder={true} images={[
        '/images/send_nudes/01.jpg',
        '/images/send_nudes/02.jpg',
        '/images/send_nudes/03.jpg'
      ]}/>
    )
  },
};


function ProjectPage() {
  let { id } = useParams();
  console.log('Window height: ' + window.screen.height);
  console.log('Window width:  ' + window.screen.width);
  console.log('Viewport height: ' + window.innerHeight);
  console.log('Viewport width:  ' + window.innerWidth);
  console.log('Document body client width: ' + document.body.clientWidth);
  console.log('Document body scroll width:  ' + document.body.scrollWidth);

  return (
    <BasePage title={content[id].title} bgColor={content[id].bgColor} noScroll={content[id].noScroll}>
      {content[id].content}
    </BasePage>
  );
}


export default ProjectPage;