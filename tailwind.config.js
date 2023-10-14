/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: "#000000",
      blue: {
        '400': '#165DFF',//主题蓝
        '300': '#0A84FF'//蓝色
      },
      gray: {
        '50': '#FAFAFA',
        '100': '#F3F3F5',
        '150': '#F2F3F5',
        'blue': '#F2F6FF',//蓝底色
        'red': '#FFEEE7',//红底色
        'green': '#E8FFEA'//绿底色
      },
      red: {
        'warning': '#F53F3F'//警示红
      },
      green: {
        '300': '#00B42A',
      },
      white: '#FFFFFF',
      text: {
        '1': '#1D2129',//一级文字
        '2': '#282828',


      }
    }
  },
  plugins: [],
}

