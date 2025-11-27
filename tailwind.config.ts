import type { Config } from 'tailwindcss';

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores personalizadas: Roxo Escuro, Roxo Vibrante, Roxo Botão
        lumi: {
          dark: '#1D1A39', 
          light: '#5B41C2',
          button: '#7D5AFC',
        },
      },
      backgroundImage: {
        // O gradiente roxo
        'lumi-gradient': 'linear-gradient(135deg, var(--tw-color-lumi-dark), var(--tw-color-lumi-light))',
      },
    },
  },
  plugins: [],
} satisfies Config;