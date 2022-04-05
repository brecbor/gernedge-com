import { Grid, GridItem, Image, VStack, Box, useDimensions } from '@chakra-ui/react';
import React from 'react';


function Project_45_14() {
  const image5Ref = React.useRef();
  const dimensions = useDimensions(image5Ref);
  console.log(dimensions);

  return (
    <VStack spacing={0}>
      <Grid templateRows='repeat(5, 15.63vw)' templateColumns='repeat(6, 1fr)' gap='0'>
        <GridItem rowStart={1} rowEnd={5} colStart={5} colEnd={7}>
          <Image pl='1.25vw' width='100%' src='/images/45_14/1.jpg' alt='45_14/1'/>
        </GridItem>
        <GridItem rowStart={1} rowEnd={6} colStart={3} colEnd={5}>
          <Image pl='1.25vw' pr='1.25vw' pt='24.06vw' width='100%' src='/images/45_14/2.jpg' alt='45_14/1'/>
        </GridItem>
        <GridItem rowStart={1} rowEnd={6} colStart={1} colEnd={2}>
          <Image pr='1.25vw' pt='47.19vw' width='100%' src='/images/45_14/3.jpg' alt='45_14/1'/>
        </GridItem>
      </Grid>
      {/*<Box width='100%' height='50vh'/>*/}
      <Image pt='50vh' width='100%' src='/images/45_14/4.jpg' alt='45_14/1'/>
      <Box height='50vh'/>
      <Box position='relative'>

        <Image position='relative' width='100%' src='/images/45_14/6.png' alt='45_14/1'/>
        <Box position='absolute' top={0 /*image5Ref == null ? 0 : image5Ref.contentBox.height / 2*/} width='100%'>
          <Image ref={image5Ref} mx='auto' width='17%' src='/images/45_14/5.jpg' alt='45_14/1'/>
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