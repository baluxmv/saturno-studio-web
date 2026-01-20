/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      transitionDuration: {
        '400': '400ms',
      },
      colors: {
        pink: {
          lightest: '#fdf2f4',
          light: '#f8e1e7',
          soft: '#f5d5dc',
          medium: '#e8b4bc',
          accent: '#d4949f',
        },
        'rose-gold': '#b76e79',
        cream: '#fffaf9',
        'text-dark': '#3d2c2e',
        'text-medium': '#5a4547',
        'text-light': '#8a7577',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'float-reverse': 'float 15s ease-in-out infinite reverse',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'bounce-scroll': 'bounce-scroll 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(30px, 20px) rotate(5deg)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.2)' },
        },
        'bounce-scroll': {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
          '50%': { transform: 'translateX(-50%) translateY(10px)' },
        },
      },
    },
  },
  plugins: [],
};
