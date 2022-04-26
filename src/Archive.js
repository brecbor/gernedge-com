import React from 'react';
import { ChakraProvider, Box, Text, Link, VStack, HStack, Code, Grid, Image, Flex, Spacer, Heading, useBreakpointValue, useMediaQuery } from '@chakra-ui/react';
import Font from './custom_font'
import theme from './custom_theme'
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Link as RouterLink } from 'react-router-dom';
import {ScrollToTop} from './ScrollToTop';
import {BasePage, NavBar, ArchiveButton} from './elements';

const projects = [
  {name: 'units', title: 'UNITS', coverImage:'03.jpg'},
  {name: '45_14', title: '45.588620, 14.447503', coverImage:'1.jpg'},
  {name: 'memory_induced', title: 'MEMORY INDUCED', coverImage:'1.jpg'},
  {name: 'field_recording', title: 'FR_200607', coverImage:'1.jpg'},
  null,
  {name: 'send_nudes', title: 'SEND NUDES', coverImage:'02.jpg'},
];

function Archive() {
  const [isMd, isLg] = useMediaQuery(['(min-width: 30em)', '(min-width: 62em)']);

  const n_columns = isLg ? 3 : (isMd ? 2 : 1);
  //const n_columns = useBreakpointValue({ base: 1, md: 2, lg: 3 });
  console.log(n_columns);

  let archive_buttons = [];
  for(let i=0; i<n_columns; i++) {
    archive_buttons.push([]);
    for(let j=i; j<projects.length; j+=n_columns) {
      if(projects[j] !== null) {
        archive_buttons[i].push(<ArchiveButton name={projects[j].name} title={projects[j].title}
                                               coverImage={projects[j].coverImage}/>);
      }
    }
  }
  let columns = [];
  for(let i=0; i<n_columns; i++) {
    columns.push(
      <VStack w={(100 / n_columns).toString() + '%'} spacing='48px'>
        {archive_buttons[i]}
      </VStack>
    );
  }
  return (
    <BasePage title='Archive'>
      <HStack m={{base: '0', sm: '16px'}} spacing='16px' alignItems='top'>
        {columns}
      </HStack>
    </BasePage>
  );
}

export default Archive;
