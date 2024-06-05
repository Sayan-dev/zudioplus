/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'sans': ['Manrope'],
      'serif': ['Manrope'],
      'mono': ['Manrope'],
      'display': ['Manrope'],
      'body': ['Manrope'],
    },
    colors: {
      'white': 'var(--white)',
      'black': 'var(--black)',
      'primary': 'var(--primary)',
    },
    extend: {
      fontFamily: {
        'poppins': 'var(--poppins)',
      },
      fontSize: {
        'xs': '.75rem', // 12px
        'sm': '.875rem', // 14px
        'base': '1rem', // 16px
        'lg': '1.125rem', // 18px
        'xl': '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
        '6xl': '4rem', // 64px
        '7xl': '5rem', // 80px
        '8xl': '6rem', // 96px
        '9xl': '7rem', // 112px
        '10xl': '8rem', // 128px
      },
      colors: {
        'faded': 'var(--faded)',
        'light': 'var(--light)',
        'transparent': 'transparent',
        'dark': 'var(--background-dark)',
        'dark-grey': 'var(--dark-grey)',
        'dark-grey-2': 'var(--dark-grey-2)',
        'dark-line': 'var(--dark-line)',
        'faded-dark': 'var(--faded-dark)',
        'light-grey': 'var(--light-grey)',
        'background-light': 'var(--background-light)',
        'background-dark': 'var(--background-dark)',
        'primary': 'var(--primary)',
        'accent': 'var(--accent)',
      },
      backgroundImage: {
        'review-card': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)',
        'review-card-closed': 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #000000 100%)',
      },
    },
  },
};
