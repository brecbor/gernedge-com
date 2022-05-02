import { Grid, GridItem, Image, VStack, HStack, Box, useDimensions, Text } from '@chakra-ui/react';
import React from 'react';
import { TopAlignedText } from './elements';


function Project_45_14() {
  /*const image5Ref = React.useRef();
  const dimensions = useDimensions(image5Ref);
  console.log(dimensions);*/
  /* TEST 2:
  let img1_height = (document.body.clientWidth/3 - 8) * 1.5;
  let img2_height = (document.body.clientWidth/3 - 16) * 1.5;
  let img3_pt = img1_height;
  let img3_height = img1_height/2 + img2_height - img3_pt;
  console.log('img: ' + img1_height);
  console.log('img: ' + img2_height);
  console.log('img: ' + img3_pt);
  console.log('img: ' + img3_height);*/

  const image1Ref = React.useRef();
  const image1Dim = useDimensions(image1Ref, true);

  const image2Ref = React.useRef();
  const image2Dim = useDimensions(image2Ref, true);

  const img2_pt = image1Dim && image1Dim.contentBox.height ? image1Dim.contentBox.height/2 : '50vh';

  const img3_pt = image1Dim && image2Dim && image1Dim.contentBox.height ? image1Dim.contentBox.height : '50vh';
  const img3_height = image2Dim && image2Dim.paddingBox.height ? image2Dim.paddingBox.height : 100;
  console.log('img3_pt: '+ img3_pt)

  const img4_pt = image2Dim ? document.documentElement.clientHeight - image2Dim.contentBox.height/2 : '50vh';
  // hidden pixels: document.documentElement.scrollTop
  // height: document.documentElement.clientHeight

  const text_pt = document.documentElement.clientHeight - document.documentElement.clientWidth/6;

  return (
    <VStack spacing={0}>
      <Grid templateColumns='repeat(6, 1fr)' gap='0'>
        <GridItem rowStart={1} rowEnd={2} colStart={5} colEnd={7}>
          <Image ref={image1Ref} pl='8px' width='100%' src='/images/45_14/1.jpg' alt='45_14/1'/>
        </GridItem>
        <GridItem rowStart={1} rowEnd={2} colStart={3} colEnd={5}>
          <Image ref={image2Ref} pl='8px' pr='8px' pt={img2_pt} width='100%' src='/images/45_14/2.jpg' alt='45_14/1'/>
        </GridItem>
        <GridItem rowStart={1} rowEnd={2} colStart={1} colEnd={3}>
          <Image pt={img3_pt} height={img3_height} src='/images/45_14/3.jpg' alt='45_14/1'/>
        </GridItem>
      </Grid>
      <Image pt={img4_pt} width='100%' src='/images/45_14/4.jpg' alt='45_14/1'/>
      <Box height='50vh'/>
      <Box position='relative'>
        <Image position='relative' width='100%' src='/images/45_14/6.png' alt='45_14/1'/>
        <Box position='absolute' top={'-13vw' /*image5Ref == null ? 0 : image5Ref.contentBox.height / 2*/} width='100%'>
          <Image mx='auto' width='17%' src='/images/45_14/5.jpg' alt='45_14/1'/>
        </Box>
      </Box>
      <Box height='50vh'/>
      <Box>
        <Grid ml='16px' templateColumns='repeat(3, 1fr)' gap='0'>
          <GridItem rowStart={1} rowEnd={2} colStart={1} colEnd={2}>
            <Image pr='16px' width='100%' src='/images/45_14/7.jpg' alt='45_14/1'/>
          </GridItem>
          <GridItem rowStart={1} rowEnd={2} colStart={2} colEnd={3}>
            <Image pr='16px' width='100%' src='/images/45_14/8.jpg' alt='45_14/1'/>
          </GridItem>
          <GridItem rowStart={1} rowEnd={2} colStart={3} colEnd={4}>
            <Image pr='16px' width='100%' src='/images/45_14/9.jpg' alt='45_14/1'/>
          </GridItem>
          <GridItem rowStart={2} rowEnd={3} colStart={2} colEnd={4}>
            <Image mt='64px' width='100%' src='/images/45_14/10.jpg' alt='45_14/1'/>
          </GridItem>
        </Grid>
      </Box>
      <Box width='100%' pr='50vw'>
        <Image mt='64px' float='right' pl='16px' width='33vw' src='/images/45_14/11.jpg' alt='45_14/1'/>
      </Box>
      <Box width='100%' pr='50vw'>
        <Image mt='64px' float='right' pl='16px' width='33vw' src='/images/45_14/12.jpg' alt='45_14/1'/>
      </Box>
      <Box width='100%' alignItems='left'>
        <Box pl='16px' pt={text_pt} width={{base: '100vw', sm: '50vw'}} pr={{base: '16px', sm: 0}} float='left' textAlign='justify' textStyle='normal'>
          <Text lineHeight='32px'>
            &emsp;With my retreats to nature I am developing a method of deepening our connectedness with it. I take the concept of the dérive as a basis of my work, which theorist and philosopher Guy Debord describes as aimless, random drifting through a place, guided by whim and an awareness of how different spaces draw you in or repel you. The work can be read very concretely, tied to a particular moment and place. When in nature, I make my way through and, inevitably, I also leave a trace.
          </Text>
          <Text textStyle='normal' lineHeight='32px'>
            &emsp;Through this productive experience, the thought becomes embodied in a medium that has its limitations but is, nevertheless, prolonged by it. I would see the same things with or without the camera. I would experience the same things with or without the camera. But it is my desire to experience profoundly and through the mediation of the camera to think photographically. In this sense, the series is a dialogue between transience and eternity. The view of the sky might be one of the few shared visions we still have with our ancestors and is therefore eternal. But the land, the trees... they are in constant change. Without memory and without future – just silence.
          </Text>
        </Box>
      </Box>
    </VStack>
  );
};

export default Project_45_14;