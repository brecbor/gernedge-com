import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: 'MonumentGrotesk',
    body: 'MonumentGrotesk'
    /*{
      fontFamily: 'MonumentGrotesk',
      fontWeight: 'bold',
      lineHeight: '1'
    }*///'MonumentGrotesk, sans-serif',
  },
  textStyles: {
    base: {
      fontFamily: 'MonumentGrotesk',
      fontWeight: 'bold',
    },
    small: {
      fontFamily: 'MonumentGrotesk',
      fontWeight: 'bold',
      fontSize: '0.83vw'
    },
    normal: {
      fontFamily: 'MonumentGrotesk',
      fontWeight: 'bold',
      fontSize: '1.25vw'
    },
    big: {
      fontFamily: 'MonumentGrotesk',
      fontWeight: 'bold',
      fontSize: '1.67vw'
    }
  }
});

export default theme