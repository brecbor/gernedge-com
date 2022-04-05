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
    'title': '45.588620, 14.447503',
    'content': (
      <Project_45_14/>
    )
  },
};


function ProjectPage() {
  let { id } = useParams();
  console.log(window.screen.height);
  console.log(window.screen.width);

  return (
    <BasePage title={content[id].title}>
      {content[id].content}
    </BasePage>
  );
}


export default ProjectPage;