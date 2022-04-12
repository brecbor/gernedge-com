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


const content = {
  'units': {
    'title': 'Units, 2021',
    'content': (
      <Image width='50vw' src='/images/tmp.jpg' alt='jernej'/>
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
    'title': 'Vistula river, 2020',
    'content': (
      <Box width='100%' position='relative' p='56.25% 0 0 0'>
        <iframe src="https://player.vimeo.com/video/655024508?h=e226ff68bd&autoplay=1&title=0&byline=0&portrait=0"
                style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0}/*"position:absolute;top:0;left:0;width:100%;height:100%;"*/} frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </Box>
    )
  },
};


function ProjectPage() {
  let { id } = useParams();
  console.log(window.screen.height);
  console.log(window.screen.width);

  return (
    <BasePage title={content[id].title} bgColor={content[id].bgColor}>
      {content[id].content}
    </BasePage>
  );
}


export default ProjectPage;