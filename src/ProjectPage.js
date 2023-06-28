import React from 'react';
import {useParams} from "react-router-dom";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  HStack,
  Code,
  Grid,
  Image,
  Flex,
  Spacer,
  Heading,
  GridItem,
  useMediaQuery,
  Center
} from '@chakra-ui/react';
import {BasePage, NavBar, ArchiveButton} from './elements';
import Project_45_14 from './Project_45_14';
import Gallery from './Gallery';
import MobileGallery from './MobileGallery';
import AccidentalBursts from './AccidentalBursts';

const send_nudes_images = [
  '/images/send_nudes/01.jpg',
  '/images/send_nudes/02.jpg',
  '/images/send_nudes/03.jpg'
];

const units_images = [
  '/images/units/01.jpg',
  '/images/units/02.jpg',
  '/images/units/03.jpg',
  '/images/units/04.jpg',
  '/images/units/05.jpg'
];

const content = {
  'accidental_bursts': {
    'title': 'Accidental Bursts',
    'webTitle': 'ACCIDENTAL BURSTS',
    'content': (
      <AccidentalBursts phone={false}/>
    ),
    'phoneContent': (
      <AccidentalBursts phone={false}/>
    )
  },
  'three_men_contemplating': {
    'title': 'Three Men Contemplating',
    'webTitle': 'THREE MEN CONTEMPLATING',
    'content': (
      <Box width='100%' position='relative' p='56.25% 0 0 0'>
        <iframe src="https://player.vimeo.com/video/826495543?h=4b9f6b8cc2&autoplay=1&title=0&byline=0&portrait=0" 
                style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0}} frameborder="0" 
                allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </Box>
    ),
    'phoneContent': (
      <Center height='100%' width='100%'>
        <iframe src="https://player.vimeo.com/video/826495543?h=4b9f6b8cc2&autoplay=1&title=0&byline=0&portrait=0" 
                style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0}} frameborder="0" 
                allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </Center>
    )
  },
  'units': {
    'title': 'Units, 2021',
    'webTitle': 'UNITS',
    'noScroll': true,
    'content': (
      <Gallery images={units_images}/>
    ),
    'phoneContent': (
      <MobileGallery images={units_images}/>
    )
  },
  '45_14': {
    'title': '45.588620, 14.447503, 2021',
    'webTitle': '45.588620, 14.447503',
    'content': (
      <Project_45_14 phone={false}/>
    ),
    'phoneContent': (
      <Project_45_14 phone={true}/>
    )
  },
  'field_recording': {
    'bgColor': 'white',
    'title': 'FR_200607',
    'webTitle': 'FR_200607',
    'content': (
      <Box width='100%' position='relative' p='56.25% 0 0 0'>
        <iframe src="https://player.vimeo.com/video/655024508?h=e226ff68bd&autoplay=1&title=0&byline=0&portrait=0"
                style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0}/*"position:absolute;top:0;left:0;width:100%;height:100%;"*/} frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </Box>
    ),
    'phoneContent': (
      <Center height='100%' width='100%'>{/*<Box width='100%' position='relative' p='56.25% 0 0 0'>*/}
        <iframe src="https://player.vimeo.com/video/655024508?h=e226ff68bd&autoplay=1&title=0&byline=0&portrait=0"
                style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0}/*"position:absolute;top:0;left:0;width:100%;height:100%;"*/} frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </Center>
    )
  },
  'memory_induced': {
    'title': 'Memory Induced, colour video and sound, 2020',
    'phoneTitle': 'Memory Induced, 2020',
    'webTitle': 'MEMORY INDUCED',
    'content': (
      <Box mx='auto' mt={'0'/*'31.25vw'*/} width='50%' position='relative' p='37.5% 0 0 0'>
        <iframe src="https://player.vimeo.com/video/600951447?h=1939fc6cc1&autoplay=1&title=0&byline=0&portrait=0"
                style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0}} frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </Box>
    ),
    'phoneContent': (
      <Box width='100%' height='100%'>
        {/*<Box mt={'0'/*'31.25vw'* /} width='100%' position='relative' p='37.5% 0 0 0'>*/}
        <iframe src="https://player.vimeo.com/video/600951447?h=1939fc6cc1&autoplay=1&title=0&byline=0&portrait=0"
                style={{width: document.documentElement.clientWidth-32, height: '100%', position: 'absolute', top: 0, left: '16px', right: '16px'}} frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </Box>
    )
  },
  'send_nudes': {
    'title': 'Send Nudes, 2019',
    'webTitle': 'SEND NUDES',
    'noScroll': true,
    'content': (
      <Gallery imageBorder={true} images={send_nudes_images}/>
    ),
    'phoneContent': (
      <MobileGallery imageBorder={true} images={send_nudes_images}/>
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

  const [normal] = useMediaQuery(['(min-width: 30em)']);

  return (
    <BasePage title={!normal && content[id].phoneTitle ? content[id].phoneTitle : content[id].title}
              webTitle={content[id].webTitle}
              bgColor={content[id].bgColor}
              noScroll={content[id].noScroll}
              /*noPhone={normal}*/>
      {!normal && content[id].phoneContent ? content[id].phoneContent : content[id].content}
    </BasePage>
  );
}


export default ProjectPage;