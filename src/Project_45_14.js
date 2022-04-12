import { Grid, GridItem, Image, VStack, Box, useDimensions } from '@chakra-ui/react';
import React from 'react';


function Project_45_14() {
  /*const image5Ref = React.useRef();
  const dimensions = useDimensions(image5Ref);
  console.log(dimensions);*/
  let img1_height = (document.body.clientWidth/3 - 8) * 1.5;
  let img2_height = (document.body.clientWidth/3 - 16) * 1.5;
  let img3_pt = img1_height;
  let img3_height = img1_height/2 + img2_height - img3_pt;
  console.log('img: ' + img1_height);
  console.log('img: ' + img2_height);
  console.log('img: ' + img3_pt);
  console.log('img: ' + img3_height);
  return (
    <VStack spacing={0}>
      <Grid templateColumns='repeat(6, 1fr)' gap='0'>
        <GridItem rowStart={1} rowEnd={2} colStart={5} colEnd={7}>
          <Image pl='0.5rem' width='100%' src='/images/45_14/1.jpg' alt='45_14/1'/>
        </GridItem>
        <GridItem rowStart={1} rowEnd={2} colStart={3} colEnd={5}>
          <Image pl='0.5rem' pr='0.5rem' pt={img1_height/2 + 'px'} width='100%' src='/images/45_14/2.jpg' alt='45_14/1'/>
        </GridItem>
        <GridItem rowStart={1} rowEnd={2} colStart={1} colEnd={3}>
          <Image mt={img3_pt + 'px'} height={img3_height + 'px'} src='/images/45_14/3.jpg' alt='45_14/1'/>
        </GridItem>
      </Grid>
      {/*<Box width='100%' height='50vh'/>*/}
      <Image pt='50vh' width='100%' src='/images/45_14/4.jpg' alt='45_14/1'/>
      <Box height='50vh'/>
      <Box position='relative'>

        <Image position='relative' width='100%' src='/images/45_14/6.png' alt='45_14/1'/>
        <Box position='absolute' top={0 /*image5Ref == null ? 0 : image5Ref.contentBox.height / 2*/} width='100%'>
          <Image mx='auto' width='17%' src='/images/45_14/5.jpg' alt='45_14/1'/>
        </Box>

      </Box>
      {/*<Grid width='100%' templateRows='repeat(5, 15.63vw) 50vh repeat(5, 15.63vw)' templateColumns='repeat(6, 1fr)' gap='0' >
        <GridItem bg='tomato' />
        <GridItem bg='papayawhip' />
        <GridItem bg='papayawhip' />
        <GridItem bg='tomato' />
        <GridItem bg='tomato' />
        <GridItem bg='papayawhip' />
        <GridItem bg='papayawhip' />
        <GridItem bg='tomato' />
        <GridItem bg='tomato' />
        <GridItem bg='papayawhip' />
        <GridItem bg='tomato' />
        <GridItem bg='papayawhip' />
        <GridItem bg='tomato' />
        <GridItem bg='papayawhip' />
        <GridItem bg='papayawhip' />
        <GridItem bg='tomato' />
        <GridItem bg='papayawhip' />
        <GridItem bg='tomato' />
        <GridItem bg='papayawhip' />
        <GridItem bg='tomato' />
        <GridItem bg='tomato' />
        <GridItem bg='papayawhip' />
        <GridItem bg='tomato' />
        <GridItem bg='papayawhip' />
        <GridItem bg='tomato' />
        <GridItem bg='papayawhip' />
        <GridItem bg='papayawhip' />
        <GridItem bg='tomato' />
        <GridItem bg='papayawhip' />
        <GridItem bg='tomato' />
        <GridItem bg='papayawhip' />
        <GridItem bg='tomato' />
        <GridItem bg='tomato' />
        <GridItem bg='papayawhip' />
        <GridItem bg='tomato' />
        <GridItem bg='papayawhip' />
        <GridItem bg='tomato' />
        <GridItem bg='papayawhip' />
        <GridItem bg='papayawhip' />
        <GridItem bg='tomato' />
        <GridItem bg='papayawhip' />
        <GridItem bg='tomato' />
        <GridItem bg='papayawhip' />
        <GridItem bg='tomato' />
      </Grid>*/}
    </VStack>
  );
};

export default Project_45_14;