/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        //  * customDarkBg will be used as a background for darkMode
        customDarkBg: 'rgb(38, 39, 43)',

        //  * customDarkBgHover will be used for card hover
        customDarkBgHover: 'rgb(55, 56, 62)',

        //  * customContentTitle will be used as title eg.(About,Pricing..)
        customContentTitle: 'rgb(178, 184, 205)',

        //  * customContentTitle will be used as border
        customGrayBorder: 'rgb(255,255,255,0.1)',

        //  * customGrayText will be used as required
        customGrayText: 'rgb(174, 178, 183)',

        //  * customGrayText will be used  as required
        customDarkBgTransparent: 'rgb(31, 32, 35, 0.7)',
      },
      fontFamily: {
        Inter: 'Inter',
      },
      screens: {
        xs: '530px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xll: '1400px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
