import { Grid, GridItem, Image, VStack, HStack, Box, useDimensions, Flex, Button } from '@chakra-ui/react';
import React from 'react';


class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
    this.len = this.props.images.length;
  }

  handleClick(direction) {
    this.setState({index: (this.state.index + direction + this.len) % this.len});
  }

  render() {
    return (
      <Flex align='center' justify='center' height='100%'>
        <HStack spacing={'32px'/* TODO */}>
          <MyButton fontSize='24px' onClick={() => this.handleClick(-1)}>&larr;</MyButton>
          <Image maxWidth='67vw' maxHeight='90vh' src={this.props.images[this.state.index]} alt='jernej'/>
          <MyButton fontSize='24px' onClick={() => this.handleClick(1)}>&rarr;</MyButton>
        </HStack>
      </Flex>
    );
  }
}

function MyButton(props) {
  return (
    <Button onClick={props.onClick} variant='link' textStyle='normal' color='black'
            _hover={{textDecoration: 'none', color: 'black'}}
            _active={{textDecoration: 'none', color: 'black'}}
            _focus={{textDecoration: 'none', color: 'black'}}
            fontSize={props.fontSize}>
      {props.children}
    </Button>
  );
}

export default Gallery;