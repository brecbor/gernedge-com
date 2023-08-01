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
  {name: 'IMG_9157', row: 1, column: 1, ending: '.JPG', phoneRow: 1, phoneColumn: 1},
  {name: 'IMG_9156', row: 1, column: 2, ending: '.JPG', phoneRow: 1, phoneColumn: 2},
  {name: 'IMG_9155', row: 1, column: 3, ending: '.JPG', phoneRow: 1, phoneColumn: 3},
  {name: 'IMG_9154', row: 1, column: 4, ending: '.JPG', phoneRow: 2, phoneColumn: 1},
  {name: 'IMG_9153', row: 1, column: 5, ending: '.JPG', phoneRow: 2, phoneColumn: 2},
  {name: 'IMG_9152', row: 1, column: 6, ending: '.JPG', phoneRow: 2, phoneColumn: 3},

  {name: 'IMG_5582', row: 2, column: 1, ending: '.JPG', phoneRow: 3, phoneColumn: 1},
  {name: 'IMG_5581', row: 2, column: 2, ending: '.JPG', phoneRow: 3, phoneColumn: 2},
  {name: 'IMG_5580', row: 2, column: 3, ending: '.JPG', phoneRow: 3, phoneColumn: 3},
  {name: 'IMG_5579', row: 2, column: 4, ending: '.JPG', phoneRow: 4, phoneColumn: 1},
  {name: 'IMG_5578', row: 2, column: 5, ending: '.JPG', phoneRow: 4, phoneColumn: 2},
  {name: 'IMG_5577', row: 2, column: 6, ending: '.JPG', phoneRow: 4, phoneColumn: 3},
  {name: 'IMG_5576', row: 2, column: 7, ending: '.JPG', phoneRow: 5, phoneColumn: 1},

  {name: 'IMG_0105', row: 4, column: 1, ending: '.jpeg', phoneRow: 6, phoneColumn: 1},
  {name: 'IMG_0106', row: 4, column: 2, ending: '.jpeg', phoneRow: 6, phoneColumn: 2},
  {name: 'IMG_0107', row: 4, column: 3, ending: '.jpeg', phoneRow: 6, phoneColumn: 3},
  {name: 'IMG_0108', row: 4, column: 4, ending: '.jpeg', phoneRow: 7, phoneColumn: 1},
  {name: 'IMG_0109', row: 4, column: 5, ending: '.jpeg', phoneRow: 7, phoneColumn: 2},
  {name: 'IMG_0110', row: 4, column: 6, ending: '.jpeg', phoneRow: 7, phoneColumn: 3},
  {name: 'IMG_0111', row: 4, column: 7, ending: '.jpeg', phoneRow: 8, phoneColumn: 1},
  {name: 'IMG_0112', row: 5, column: 1, ending: '.jpeg', phoneRow: 8, phoneColumn: 2},
  {name: 'IMG_0113', row: 5, column: 2, ending: '.jpeg', phoneRow: 8, phoneColumn: 3},
  {name: 'IMG_0114', row: 5, column: 3, ending: '.jpeg', phoneRow: 9, phoneColumn: 1},
  {name: 'IMG_0115', row: 5, column: 4, ending: '.jpeg', phoneRow: 9, phoneColumn: 2},
  {name: 'IMG_0116', row: 5, column: 5, ending: '.jpeg', phoneRow: 9, phoneColumn: 3},
  {name: 'IMG_0117', row: 5, column: 6, ending: '.jpeg', phoneRow: 10, phoneColumn: 1},
  {name: 'IMG_0118', row: 5, column: 7, ending: '.jpeg', phoneRow: 10, phoneColumn: 2},
  {name: 'IMG_0119', row: 6, column: 1, ending: '.jpeg', phoneRow: 10, phoneColumn: 3},
  {name: 'IMG_0120', row: 6, column: 2, ending: '.jpeg', phoneRow: 11, phoneColumn: 1},
  {name: 'IMG_0121', row: 6, column: 3, ending: '.jpeg', phoneRow: 11, phoneColumn: 2},
  {name: 'IMG_0122', row: 6, column: 4, ending: '.jpeg', phoneRow: 11, phoneColumn: 3},
  {name: 'IMG_0123', row: 6, column: 5, ending: '.jpeg', phoneRow: 12, phoneColumn: 1},
  {name: 'IMG_0124', row: 6, column: 6, ending: '.jpeg', phoneRow: 12, phoneColumn: 2},
  {name: 'IMG_0125', row: 6, column: 7, ending: '.jpeg', phoneRow: 12, phoneColumn: 3},
  {name: 'IMG_0126', row: 7, column: 1, ending: '.jpeg', phoneRow: 13, phoneColumn: 1},
  {name: 'IMG_0127', row: 7, column: 2, ending: '.jpeg', phoneRow: 13, phoneColumn: 2},
  {name: 'IMG_0128', row: 7, column: 3, ending: '.jpeg', phoneRow: 13, phoneColumn: 3},
  {name: 'IMG_0129', row: 7, column: 4, ending: '.jpeg', phoneRow: 14, phoneColumn: 1},
  {name: 'IMG_0130', row: 7, column: 5, ending: '.jpeg', phoneRow: 14, phoneColumn: 2},
  {name: 'IMG_0131', row: 7, column: 6, ending: '.jpeg', phoneRow: 14, phoneColumn: 3},
  {name: 'IMG_0132', row: 7, column: 7, ending: '.jpeg', phoneRow: 15, phoneColumn: 1},
  {name: 'IMG_0133', row: 8, column: 1, ending: '.jpeg', phoneRow: 15, phoneColumn: 2},
  {name: 'IMG_0134', row: 8, column: 2, ending: '.jpeg', phoneRow: 15, phoneColumn: 3},
  {name: 'IMG_0135', row: 8, column: 3, ending: '.jpeg', phoneRow: 16, phoneColumn: 1},
  {name: 'IMG_0136', row: 8, column: 4, ending: '.jpeg', phoneRow: 16, phoneColumn: 2},
  {name: 'IMG_0137', row: 8, column: 5, ending: '.jpeg', phoneRow: 16, phoneColumn: 3},
  {name: 'IMG_0138', row: 8, column: 6, ending: '.jpeg', phoneRow: 17, phoneColumn: 1},
  {name: 'IMG_0139', row: 8, column: 7, ending: '.jpeg', phoneRow: 17, phoneColumn: 2},
  {name: 'IMG_0140', row: 9, column: 1, ending: '.jpeg', phoneRow: 17, phoneColumn: 3},
  {name: 'IMG_0141', row: 9, column: 2, ending: '.jpeg', phoneRow: 18, phoneColumn: 1},
  {name: 'IMG_0142', row: 9, column: 3, ending: '.jpeg', phoneRow: 18, phoneColumn: 2},
  {name: 'IMG_0143', row: 9, column: 4, ending: '.jpeg', phoneRow: 18, phoneColumn: 3},
  {name: 'IMG_0144', row: 9, column: 5, ending: '.jpeg', phoneRow: 19, phoneColumn: 1},
  {name: 'IMG_0145', row: 9, column: 6, ending: '.jpeg', phoneRow: 19, phoneColumn: 2},
  {name: 'IMG_0146', row: 9, column: 7, ending: '.jpeg', phoneRow: 19, phoneColumn: 3},
]


function AccidentalBursts(props) {
  const [normal] = useMediaQuery(['(min-width: 30em)']);

  if(!normal) {
    return (
      <Grid templateColumns='repeat(3, 1fr)' templateRows='repeat(19, 1fr)' gap='16px' m='16px' width='100vw'>
      {accidental_bursts_images.map((img, i) => (
        <GridItem colStart={img.phoneColumn} colEnd={img.phoneColumn+1} rowStart={img.phoneRow} rowEnd={img.phoneRow+1}>
          <TitledImage src={'/images/accidental_bursts/' + img.name + img.ending} title={img.name}/>
        </GridItem>
      ))}
    </Grid>
    );
  }

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