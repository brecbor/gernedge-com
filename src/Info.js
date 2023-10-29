import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Image,
  Flex,
  Spacer,
  Heading,
  useMediaQuery,
  GridItem,
} from '@chakra-ui/react';
import { BasePage, NavBar, ArchiveButton, TopAlignedText, MyExternalLink } from './elements';

function Info(props) {
  const [normal] = useMediaQuery(['(min-width: 30em)']);

  return (
    <BasePage title='Info' webTitle={props.webTitle}>
      <Grid width='100%' p='16px' templateColumns='repeat(3, 1fr)' gap='16px' textAlign='justify' color='black'>
        <GridItem colSpan='2'>
          <Image width='100%' src='/images/Info_portrait.jpg' alt='jernej'/>
        </GridItem>
        <GridItem>
        <VStack spacing={{base: '24px', sm: '32px'}} alignItems='left' width='100%'>
          <Text lineHeight={{base: '24px', sm: '32px'}} textStyle='normal'>
            Jernej Šimec is a photographer and visual artist from Slovenia. He holds a degree from <MyExternalLink hoverColor='#6cffd7' href='https://www.aluo.uni-lj.si/'>ALUO</MyExternalLink> in Ljubljana [SI] with a year on <MyExternalLink hoverColor='#6cffd7' href='https://asp.waw.pl/'>Akademia Sztuk Pięknych</MyExternalLink> in Warsaw [PL]. Since 2021 he has been collaborating with Kamila Walendykiewicz on <MyExternalLink hoverColor='#6cffd7' href='https://postplaneta.com/'>POST_PLANETA</MyExternalLink>. He is available for commissioned work all around the world.
          </Text>
          <Text lineHeight={{base: '24px', sm: '32px'}} textStyle='normal'>
            Get in touch via <MyExternalLink hoverColor='#6cffd7' href='mailto:jernej.simec@gmail.com'>e-mail</MyExternalLink> or <MyExternalLink hoverColor='#6cffd7' href='https://www.instagram.com/jernejsimec/'>Instagram</MyExternalLink>.
          </Text>
        </VStack>
        </GridItem>
      </Grid>
    </BasePage>
  );
}

export default Info;
