import React from 'react';
import {useParams} from "react-router-dom";
import { ChakraProvider, Box, Text, Link, VStack, HStack, Code, Grid, Image, Flex, Spacer, Heading } from '@chakra-ui/react';
import Font from './custom_font'
import theme from './custom_theme'
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Link as RouterLink } from 'react-router-dom';
import {ScrollToTop} from './ScrollToTop';
import {BasePage, NavBar, ArchiveButton} from './elements';
import Archive from './Archive';


const content = {
  'units': {
    'title': 'Units, 2021',
    'content': (
      <Image width='50vw' src='/images/tmp.jpg' alt='jernej'/>
    )
  },
};


function ProjectPage() {
  let { id } = useParams();

  return (
    <BasePage title={content[id].title}>
      {content[id].content}
    </BasePage>
  );
}


export default ProjectPage;