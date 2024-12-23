import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  important: true,
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  prefix: '',
  theme: {
    fontFamily: {
      // Persian Fonts
      estedad: ['westedad'],
      azar: ['Azarmehr'],
      // English Fonts
      sf: ['sf-ui'],
    },
    fontSize: {
      xxs: ['0.6rem', {lineHeight: '1.2'}],
      xs: ['0.75rem', {lineHeight: '1'}],
      sm: ['0.875rem', {lineHeight: '1.25'}],
      base: ['1rem', {lineHeight: '1.5'}],
      lg: ['1.125rem', {lineHeight: '1.75'}],
      xl: ['1.25rem', {lineHeight: '1.75'}],
      '2xl': ['1.5rem', {lineHeight: '2'}],
      '3xl': ['1.875rem', {lineHeight: '2.25'}],
      '4xl': ['2.25rem', {lineHeight: '2.5'}],
      '5xl': ['3rem', {lineHeight: '1'}],
      '6xl': ['3.75rem', {lineHeight: '1'}],
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        //Core Colors
        // primary: '#0078FF',
        // success: '#3BDBBF',
        // info: '#7239ea',
        // warning: '#f19a1a',
        // danger: '#FA4248',

        primary: 'var(--color-primary)',
        'primary-active': 'var(--color-primary-active)',
        'primary-light': 'var(--color-primary-light)',
        'primary-invers': 'var(--color-primary-invers)',

        success: 'var(--color-success)',
        'success-active': 'var(--color-success-active)',
        'success-light': 'var(--color-success-light)',
        'success-invers': 'var(--color-success-invers)',

        info: 'var(--color-info)',
        'info-active': 'var(--color-info-active)',
        'info-light': 'var(--color-info-light)',
        'info-invers': 'var(--color-info-invers)',

        warning: 'var(--color-warning)',
        'warning-active': 'var(--color-warning-active)',
        'warning-light': 'var(--color-warning-light)',
        'warning-invers': 'var(--color-warning-invers)',

        danger: 'var(--color-danger)',
        'danger-active': 'var(--color-danger-active)',
        'danger-light': 'var(--color-danger-light)',
        'danger-invers': 'var(--color-danger-invers)',

        brand: 'var(--color-brand)',
        'brand-active': 'var(--color-brand-active)',
        'brand-light': 'var(--color-brand-light)',
        'brand-invers': 'var(--color-brand-invers)',
        'brand-click': 'var(--color-brand-click)',
        'brand-hover': 'var(--color-brand-hover)',

        'coal-50': 'var(--color-coal-50)',
        'coal-100': 'var(--color-coal-100)',
        'coal-200': 'var(--color-coal-200)',
        'coal-300': 'var(--color-coal-300)',
        'coal-400': 'var(--color-coal-400)',
        'coal-500': 'var(--color-coal-500)',
        'coal-600': 'var(--color-coal-600)',

        black: 'var(--color-black)',

        // Light Colors
        'light-primary': '#EFF6FF',
        'light-danger': '#3a2434',
        'light-info': '#f8f5ff',
        'light-success': '#e8fff3',
        'light-warning': '#fff8dd',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
} satisfies Config;
