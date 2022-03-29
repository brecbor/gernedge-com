import React from 'react';
import { ChakraProvider, Box, Text, Link, VStack, HStack, Code, Grid, Image, Flex, Spacer, Heading } from '@chakra-ui/react';
import Font from './custom_font'
import theme from './custom_theme'
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Link as RouterLink } from 'react-router-dom';
import {ScrollToTop} from './ScrollToTop';
import {BasePage, NavBar, ArchiveButton} from './elements';

const projects = [
  {name: 'units', title: 'UNITS', coverImage:'3.jpg'},
  {name: '45_14', title: '45.588620, 14.447503', coverImage:'1.jpg'},
  {name: 'memory_induced', title: 'MEMORY INDUCED', coverImage:'1.jpg'},
  {name: 'field_recording', title: 'FR_200607', coverImage:'1.jpg'},
  null,
  {name: 'send_nudes', title: 'SEND NUDES', coverImage:'1.jpg'},
];

function Archive(props) {
  let archive_buttons = [];
  for(let i=0; i<props.columns; i++) {
    archive_buttons.push([]);
    for(let j=i; j<projects.length; j+=props.columns) {
      if(projects[j] !== null) {
        archive_buttons[i].push(<ArchiveButton name={projects[j].name} title={projects[j].title}
                                               coverImage={projects[j].coverImage}/>);
      }
    }
  }
  let columns = [];
  for(let i=0; i<props.columns; i++) {
    columns.push(
      <VStack w={(100 / props.columns).toString() + '%'} spacing='5vw'>
        {archive_buttons[i]}
      </VStack>
    );
  }
  return (
    <BasePage title='Archive'>
      <HStack m='1.25vw' spacing='1.25vw' alignItems='top'>
        {columns}
      </HStack>
    </BasePage>
  );
}

export default Archive;
