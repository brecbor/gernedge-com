import {
  Grid,
  GridItem,
  Image,
  VStack,
  HStack,
  Box,
  useDimensions,
  Flex,
  Button,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import { TitledImage } from './elements';

const accidental_bursts_images = [
  {name: 'IMG_9157', row: 1, column: 1},
  {name: 'IMG_9156', row: 1, column: 2},
  {name: 'IMG_9155', row: 1, column: 3},
  {name: 'IMG_9154', row: 1, column: 4},
  {name: 'IMG_9153', row: 1, column: 5},
  {name: 'IMG_9152', row: 1, column: 6},
  {name: 'IMG_5582', row: 2, column: 1},
  {name: 'IMG_5581', row: 2, column: 2},
  {name: 'IMG_5580', row: 2, column: 3},
  {name: 'IMG_5579', row: 2, column: 4},
  {name: 'IMG_5578', row: 2, column: 5},
  {name: 'IMG_5577', row: 2, column: 6},
  {name: 'IMG_5576', row: 2, column: 7},
]


function AccidentalBursts(props) {
  return (
    <Grid templateColumns='repeat(7, 1fr)' templateRows='repeat(2, 1fr)' gap='16px' m='16px'>
      {accidental_bursts_images.map((img) => (
        <GridItem colStart={img.column} colEnd={img.column+1} rowStart={img.row} rowEnd={img.row+1}>
          <TitledImage src={'/images/accidental_bursts/' + img.name + '.JPG'} title={img.name}/>
        </GridItem>
      ))}
    </Grid>
  );
}

export default AccidentalBursts;