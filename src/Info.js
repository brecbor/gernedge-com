import React from 'react';
import { ChakraProvider, Box, Text, Link, VStack, Code, Grid, Image, Flex, Spacer, Heading } from '@chakra-ui/react';
import Font from './custom_font'
import theme from './custom_theme'
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Link as RouterLink } from 'react-router-dom';
import {ScrollToTop} from './ScrollToTop';
import { BasePage, NavBar, ArchiveButton, TopAlignedText } from './elements';

function Info() {
  return (
    <BasePage title='Info'>
      <VStack spacing='5vw' m='1.25vw' textStyle='normal' fontSize='1.67vw' textAlign='justify' lineHeight='2.5vw' color='black'>
        <VStack spacing='2.5vw'>
          <TopAlignedText>Jernej Šimec (1997) — an inquisitive visual artist using light as a tool for exploring the common
            ground between photography and humanity, thus reinterpreting the notion of existence and challenging our
            perceptions of nature. During his studies, he completed a full year at the Academy of Fine Arts in Warsaw
            where he also attended a 5-month workshop Art Made by Walking, which influenced his work by blurring the
            line between life and art. Since 2021 he is contributing photos
            to <Link color='#6cffd7' href='https://postplaneta.com/' isExternal>POST_PLANETA</Link>
            . He is available for
            commissioned work all around the world.</TopAlignedText>
          <TopAlignedText width='100%' textAlign='left'>For inquiries on prints, collaborations or commissioned work please contact me
            on <Link color='#6cffd7' href='mailto:jernej.simec@gmail.com' isExternal>e-mail</Link> or <Link color='#6cffd7' href='https://www.instagram.com/jernejsimec/' isExternal>Instagram</Link>.
          </TopAlignedText>
        </VStack>
        <Box m='1.25vw' width='100%'>
          <Image width='50vw' src='images/jerry.jpg' alt='jernej'/>
        </Box>
      </VStack>
    </BasePage>
  );
}

export default Info;
