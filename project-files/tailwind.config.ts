import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Rattlesnake Systems Brand Colors
        'tactical-black': '#000000',
        'strike-orange': '#FF6B35',
        'military-white': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        'container': '1200px',
      },
    },
  },
  safelist: [
    // Rattlesnake Systems Brand Colors
    'text-tactical-black', 'bg-tactical-black', 'border-tactical-black',
    'text-strike-orange', 'bg-strike-orange', 'border-strike-orange',
    'text-military-white', 'bg-military-white', 'border-military-white',
    
    // Hover variants for brand colors
    'hover:text-tactical-black', 'hover:bg-tactical-black', 'hover:border-tactical-black',
    'hover:text-strike-orange', 'hover:bg-strike-orange', 'hover:border-strike-orange',
    'hover:text-military-white', 'hover:bg-military-white', 'hover:border-military-white',
    
    // Common layout classes
    'max-w-container',
    'flex', 'flex-col', 'grid', 'grid-cols-12',
    'items-center', 'justify-center', 'text-center',
  ],
  plugins: [],
};

export default config; 