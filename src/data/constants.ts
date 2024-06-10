const CONST_VALUE: Record<string, Record<string, string | string[]>> = {
  appShellTitle: {
    '/catalog': 'All Items',
  },
  pageTitle: {
    landing: 'Landing | Zudio+',
    clothing: 'Clothings | Zudio+',
    cart: 'Clothings | Zudio+',

    orders: 'Orders | Zudio+',
  },

  environment: {
    local: 'LOCAL',
    production: 'PROD',
  },
  message: {
    loginLoading: 'Data will be loaded in 3 seconds, you cannot close this yet',
    loginSuccess: 'Notification will close in 2 seconds, you can close this notification now',
  },
  theme: {
    dark: 'dark',
    light: 'light',
    white: 'white',
    transparent: 'transparent',
  },
};

export default CONST_VALUE;
