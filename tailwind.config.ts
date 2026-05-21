import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2d6a4f',
        'primary-hover': '#40916c',
        'primary-muted': 'rgba(45, 106, 79, 0.08)',
        cream: '#fef9f3',
        'cream-surface': '#fff5e6',
        'cream-elevated': '#ffffff',
        'ff-text': '#2d3436',
        'ff-text-secondary': '#636e72',
        'ff-text-muted': '#b2bec3',
        'ff-border': '#ffe0b2',
        'ff-paw': '#e17055',
        'ff-cream-accent': '#fdcb6e',
        'ff-soft-blue': '#74b9ff',
        'ff-success': '#27ae60',
        'ff-warning': '#f39c12',
        'ff-danger': '#e74c3c',
        'ff-info': '#3498db',
      },
      fontFamily: {
        sans: ['Nunito', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'card': '16px',
        'button': '12px',
        'input': '8px',
        'pill': '20px',
      },
      boxShadow: {
        'accent': '0 4px 20px rgba(45, 106, 79, 0.08)',
        'card': '0 4px 20px rgba(45, 106, 79, 0.06)',
        'soft': '0 2px 12px rgba(0, 0, 0, 0.04)',
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            color: theme('colors.ff-text-secondary'),
            maxWidth: 'none',
            h1: { fontWeight: '800', letterSpacing: '-0.025em', color: theme('colors.ff-text'), fontFamily: 'Nunito, system-ui, sans-serif' },
            h2: { fontWeight: '700', letterSpacing: '-0.025em', marginTop: '2em', color: theme('colors.ff-text'), fontFamily: 'Nunito, system-ui, sans-serif' },
            h3: { fontWeight: '600', marginTop: '1.5em', color: theme('colors.ff-text'), fontFamily: 'Nunito, system-ui, sans-serif' },
            a: { color: theme('colors.primary'), textDecoration: 'none' },
            'a:hover': { textDecoration: 'underline' },
            code: { backgroundColor: theme('colors.cream-surface'), color: theme('colors.primary'), padding: '0.2em 0.4em', borderRadius: '0.25em', fontSize: '0.875em' },
            pre: { backgroundColor: theme('colors.ff-text'), color: theme('colors.cream'), padding: '1em', borderRadius: '0.5em', overflow: 'auto' },
            strong: { color: theme('colors.ff-text') },
            blockquote: { borderLeftColor: theme('colors.primary'), color: theme('colors.ff-text-secondary') },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
