/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc5fb',
          400: '#38a5f8',
          500: '#0070F3', // ZAVYX Electric Blue
          600: '#0052cc', // Primary Action Blue
          700: '#003d99',
          800: '#002966',
          900: '#000B58', // ZAVYX Deep Navy
          950: '#000638',
        },
        zavyx: {
          navy: '#000B58',
          blue: '#0070F3',
          cyan: '#00A3E0',
          green: '#00A843',
          pink: '#E6007A',
          yellow: '#F5B800',
        },
        accent: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#E6007A', // ZAVYX Magenta Pink
          600: '#db2777',
          700: '#be185d',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#00A843', // ZAVYX Brand Green
          600: '#16a34a',
          700: '#15803d',
        },
        surface: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#000B58',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'premium': '0 10px 30px -10px rgba(2, 132, 199, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        'premium-hover': '0 20px 40px -15px rgba(2, 132, 199, 0.15), 0 8px 12px -4px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 25px -5px rgba(14, 165, 233, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': "radial-gradient(#cbd5e1 1px, transparent 1px)",
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
