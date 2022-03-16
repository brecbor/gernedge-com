import React from 'react';
import { ChakraProvider, Box, Text, Link, VStack, Code, Grid, Image, Flex, Spacer, Heading } from '@chakra-ui/react';
import Font from './custom_font'
import theme from './custom_theme'
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Link as RouterLink } from 'react-router-dom';

function Info() {
  return (
    <ChakraProvider theme={theme}>
      <Box bgColor='rgb(204, 204, 204)' maxWidth='100vw' minHeight='100vh'>
        <Flex height='65px' position='fixed' top='0' left='0' right='0'>
          <Box m='16px'>
            <Link as={RouterLink} to='/' fontSize='24pt' lineHeight='1' fontWeight='bold'>GERNEDGE</Link>
          </Box>
          <Spacer />
          <Box m='16px'>
            <Text fontSize='24pt' lineHeight='1' fontWeight='bold'>
              <Link as={RouterLink} to='/info'>Archive</Link> | <Link as={RouterLink} to='/info'>Info</Link>
            </Text>
          </Box>
        </Flex>
        <Box height='50vh'/>
        <VStack spacing='96pt' m='16px' textStyle='normal' fontSize='24px' textAlign='justify'>
          <VStack spacing='48pt'>
            <Text>Jernej Šimec (1997) — an inquisitive visual artist using light as a tool for exploring the common
              ground between photography and humanity, thus reinterpreting the notion of existence and challenging our
              perceptions of nature. During his studies, he completed a full year at the Academy of Fine Arts in Warsaw
              where he also attended a 5-month workshop Art Made by Walking, which influenced his work by blurring the
              line between life and art. Since 2021 he is contributing photos
              to <Link color='#6cffd7' href='https://postplaneta.com/' isExternal>POST_PLANETA</Link>
              . He is available for
              commissioned work all around the world.</Text>
            <Text width='100%'>For inquiries on prints, collaborations or commissioned work please contact me
              on <Link color='#6cffd7' href='mailto:jernej.simec@gmail.com' isExternal>e-mail</Link> or <Link color='#6cffd7' href='https://www.instagram.com/jernejsimec/' isExternal>Instagram</Link>.
            </Text>
          </VStack>
          <Box m='16px' width='100%'>
            <Image width='60vw' src='images/tmp.jpg' alt='jernej'/>
          </Box>
        </VStack>
        <Box height='100vh'/>
        <Box p='16px' textStyle='normal' fontSize='24pt' textAlign='left'>
          Info
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default Info;
