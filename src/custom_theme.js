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
      fontSize: '0.75em' //{base: '0.75em', md: '0.83vw'}
    },
    normal: {
      fontFamily: 'MonumentGrotesk',
      fontWeight: 'bold',
      fontSize: '1em' //{base: '1em', md: '1.25vw'}
    },
    big: {
      fontFamily: 'MonumentGrotesk',
      fontWeight: 'bold',
      fontSize: '1.25em', //{base: '1.25em', md: '1.67vw'},
      lineHeight: '1.5em' //{base: '1.5em', md: '2.5vw'}
    }
  },
});

export default theme