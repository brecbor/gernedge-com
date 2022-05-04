import React from 'react';
import { ChakraProvider, Box, Text, Link, VStack, HStack, Code, Grid, Image, Flex, Spacer, Heading, useBreakpointValue, useMediaQuery } from '@chakra-ui/react';
import Font from './custom_font'
import theme from './custom_theme'
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Link as RouterLink } from 'react-router-dom';
import {ScrollToTop} from './ScrollToTop';
import { BasePage, NavBar, ArchiveButton, MyLink } from './elements';

const projects = [
  {name: 'units', title: 'UNITS', coverImage:'03.jpg'},
  {name: '45_14', title: '45.588620, 14.447503', coverImage:'1.jpg'},
  {name: 'memory_induced', title: 'MEMORY INDUCED', coverImage:'1.jpg'},
  {name: 'field_recording', title: 'FR_200607', coverImage:'1.jpg', phoneCoverImage: 'naslovna-fon.jpg'},
  {name: 'send_nudes', title: 'SEND NUDES', coverImage:'Naslovna.jpg'},
];

// for each number of columns it describes for each project to which column it goes
const column_indices = [null, [0, 0, 0, 0, 0], [0, 1, 0, 1, 0], [0, 1, 2, 0, 2]];

function Archive(props) {
  const [normal, isLg] = useMediaQuery(['(min-width: 30em)', '(min-width: 62em)']);

  const n_columns = isLg ? 3 : (normal ? 2 : 1);
  let phone_archive_buttons = [];

  if(!normal) {
    for(let i=0; i<projects.length; i++) {
      phone_archive_buttons.push(
        <MyLink width='100%' to={'/archive/' + projects[i].name} textStyle='normal'>
          <Image width='100%'
                 src={'/images/' + projects[i].name + '/' + (projects[i].phoneCoverImage ? projects[i].phoneCoverImage : projects[i].coverImage)}
                 alt={projects[i].name + '-cover'}/>
        </MyLink>
      );
      //if(phone_archive_buttons.length > 20) alert('archive_buttons1');
    }
    phone_archive_buttons.push(
      <MyLink width='100%' to='/info' textStyle='normal'>
        <Image width='100%' src='/images/info-fon.jpg' alt='info-cover'/>
      </MyLink>
    );
    //if(phone_archive_buttons.length > 20) alert('archive_buttons1');

    return (
      <VStack w='100%' spacing='0'>
        {phone_archive_buttons}
      </VStack>
    );
  }

  let archive_buttons = [];
  if(archive_buttons.length > 0) alert('archive_buttons0');
  for(let i=0; i<n_columns; i++) {
    archive_buttons.push([]);
    if(archive_buttons.length > 20) alert('archive_buttons2');
  }
  for(let i=0; i<projects.length; i++) {
    let column_index = column_indices[n_columns][i];
    archive_buttons[column_index].push(<ArchiveButton name={projects[i].name} title={projects[i].title}
                                                      coverImage={projects[i].coverImage}/>);
    if(archive_buttons[column_index].length > 20) alert('archive_buttons column_index');
  }

  let columns = [];
  for(let i=0; i<n_columns; i++) {
    columns.push(
      <VStack w={(100 / n_columns).toString() + '%'} spacing='32px'>
        {archive_buttons[i]}
      </VStack>
    );
    if(columns.length > 20) alert('archive columns');
  }
  return (
    <BasePage title='Archive' webTitle={props.webTitle} noPhone={true}>
      <HStack m={{base: '0', sm: '16px'}} spacing='16px' alignItems='top'>
        {columns}
      </HStack>
    </BasePage>
  );
}

export default Archive;
