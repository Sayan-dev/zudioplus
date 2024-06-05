import { createTheme } from '@mantine/core';

const theme = createTheme({
  white: '#fff',
  black: '#000',
  fontFamily: 'Mantine',
  fontSizes: {
    xs: '11px',
    sm: '13px',
    md: '15px',
    lg: '18px',
    xl: '22px',
  },
  spacing: {
    xs: '10px',
    sm: '16px',
    md: '24px',
    lg: '30px',
    xl: '22px',
  },
  headings: {
    fontFamily: 'Manrope',
    fontWeight: '600',
    sizes: {
      h1: { fontSize: '48px', lineHeight: '25px', fontWeight: '800px' },
      h2: { fontSize: '48px', lineHeight: '25px', fontWeight: '800px' },
      h3: { fontSize: '48px', lineHeight: '25px', fontWeight: '800px' },
      h4: { fontSize: '48px', lineHeight: '25px', fontWeight: '800px' },
      h5: { fontSize: '48px', lineHeight: '25px', fontWeight: '800px' },
      h6: { fontSize: '48px', lineHeight: '25px', fontWeight: '800px' },
    },
  },
});

export default theme;
