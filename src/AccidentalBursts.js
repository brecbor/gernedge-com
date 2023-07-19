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
  {name: 'IMG_9157', row: 1, column: 1, ending: '.JPG'},
  {name: 'IMG_9156', row: 1, column: 2, ending: '.JPG'},
  {name: 'IMG_9155', row: 1, column: 3, ending: '.JPG'},
  {name: 'IMG_9154', row: 1, column: 4, ending: '.JPG'},
  {name: 'IMG_9153', row: 1, column: 5, ending: '.JPG'},
  {name: 'IMG_9152', row: 1, column: 6, ending: '.JPG'},

  {name: 'IMG_5582', row: 2, column: 1, ending: '.JPG'},
  {name: 'IMG_5581', row: 2, column: 2, ending: '.JPG'},
  {name: 'IMG_5580', row: 2, column: 3, ending: '.JPG'},
  {name: 'IMG_5579', row: 2, column: 4, ending: '.JPG'},
  {name: 'IMG_5578', row: 2, column: 5, ending: '.JPG'},
  {name: 'IMG_5577', row: 2, column: 6, ending: '.JPG'},
  {name: 'IMG_5576', row: 2, column: 7, ending: '.JPG'},

  {name: 'IMG_0105', row: 4, column: 1, ending: '.jpeg'},
  {name: 'IMG_0106', row: 4, column: 2, ending: '.jpeg'},
  {name: 'IMG_0107', row: 4, column: 3, ending: '.jpeg'},
  {name: 'IMG_0108', row: 4, column: 4, ending: '.jpeg'},
  {name: 'IMG_0109', row: 4, column: 5, ending: '.jpeg'},
  {name: 'IMG_0110', row: 4, column: 6, ending: '.jpeg'},
  {name: 'IMG_0111', row: 4, column: 7, ending: '.jpeg'},
  {name: 'IMG_0112', row: 5, column: 1, ending: '.jpeg'},
  {name: 'IMG_0113', row: 5, column: 2, ending: '.jpeg'},
  {name: 'IMG_0114', row: 5, column: 3, ending: '.jpeg'},
  {name: 'IMG_0115', row: 5, column: 4, ending: '.jpeg'},
  {name: 'IMG_0116', row: 5, column: 5, ending: '.jpeg'},
  {name: 'IMG_0117', row: 5, column: 6, ending: '.jpeg'},
  {name: 'IMG_0118', row: 5, column: 7, ending: '.jpeg'},
  {name: 'IMG_0119', row: 6, column: 1, ending: '.jpeg'},
  {name: 'IMG_0120', row: 6, column: 2, ending: '.jpeg'},
  {name: 'IMG_0121', row: 6, column: 3, ending: '.jpeg'},
  {name: 'IMG_0122', row: 6, column: 4, ending: '.jpeg'},
  {name: 'IMG_0123', row: 6, column: 5, ending: '.jpeg'},
  {name: 'IMG_0124', row: 6, column: 6, ending: '.jpeg'},
  {name: 'IMG_0125', row: 6, column: 7, ending: '.jpeg'},
  {name: 'IMG_0126', row: 7, column: 1, ending: '.jpeg'},
  {name: 'IMG_0127', row: 7, column: 2, ending: '.jpeg'},
  {name: 'IMG_0128', row: 7, column: 3, ending: '.jpeg'},
  {name: 'IMG_0129', row: 7, column: 4, ending: '.jpeg'},
  {name: 'IMG_0130', row: 7, column: 5, ending: '.jpeg'},
  {name: 'IMG_0131', row: 7, column: 6, ending: '.jpeg'},
  {name: 'IMG_0132', row: 7, column: 7, ending: '.jpeg'},
  {name: 'IMG_0133', row: 8, column: 1, ending: '.jpeg'},
  {name: 'IMG_0134', row: 8, column: 2, ending: '.jpeg'},
  {name: 'IMG_0135', row: 8, column: 3, ending: '.jpeg'},
  {name: 'IMG_0136', row: 8, column: 4, ending: '.jpeg'},
  {name: 'IMG_0137', row: 8, column: 5, ending: '.jpeg'},
  {name: 'IMG_0138', row: 8, column: 6, ending: '.jpeg'},
  {name: 'IMG_0139', row: 8, column: 7, ending: '.jpeg'},
  {name: 'IMG_0140', row: 9, column: 1, ending: '.jpeg'},
  {name: 'IMG_0141', row: 9, column: 2, ending: '.jpeg'},
  {name: 'IMG_0142', row: 9, column: 3, ending: '.jpeg'},
  {name: 'IMG_0143', row: 9, column: 4, ending: '.jpeg'},
  {name: 'IMG_0144', row: 9, column: 5, ending: '.jpeg'},
  {name: 'IMG_0145', row: 9, column: 6, ending: '.jpeg'},
  {name: 'IMG_0146', row: 9, column: 7, ending: '.jpeg'},
]


function AccidentalBursts(props) {
  return (
    <Grid templateColumns='repeat(7, 1fr)' templateRows='repeat(8, 1fr)' gap='16px' m='16px'>
      {accidental_bursts_images.map((img) => (
        <GridItem colStart={img.column} colEnd={img.column+1} rowStart={img.row} rowEnd={img.row+1}>
          <TitledImage src={'/images/accidental_bursts/' + img.name + img.ending} title={img.name}/>
        </GridItem>
      ))}
    </Grid>
  );
}

export default AccidentalBursts;