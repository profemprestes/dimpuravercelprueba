import type { Config } from 'tailwindcss';

export default {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                "primary": "#51fbef",      // Neon Cyan
                "secondary": "#ff00ff",    // Magenta
                "accent": "#39ff14",       // Neon Green
                "muted": "#45A29E",        // Muted Teal
                "background": "#171A19",
                "foreground": "#FFFFFF",
                "surface": "rgba(31, 40, 51, 0.45)",
                card: {
                    DEFAULT: '#171A19',
                    foreground: '#FFFFFF',
                },
                popover: {
                    DEFAULT: '#171A19',
                    foreground: '#FFFFFF',
                },
                border: 'rgba(255, 255, 255, 0.1)',
                input: 'rgba(255, 255, 255, 0.1)',
                ring: '#51fbef',
            },
            fontFamily: {
                roboto: ['var(--font-space-grotesk)', 'sans-serif'], // For backward compatibility
                display: ['var(--font-syncopate)', 'sans-serif'],
                body: ['var(--font-space-grotesk)', 'sans-serif'],
                heading: ['var(--font-syncopate)', 'sans-serif'],
                code: ['monospace'],
                orbitron: ['var(--font-space-grotesk)', 'sans-serif'], // Redirect old to new
                'space-grotesk': ['var(--font-space-grotesk)', 'sans-serif'],
                syncopate: ['var(--font-syncopate)', 'sans-serif'],
            },
            borderRadius: {
                "DEFAULT": "0.125rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "2xl": "16px",
                "full": "9999px",
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            boxShadow: {
                'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
                'neon': '0 0 10px rgba(81,251,239,0.4), 0 0 20px rgba(81,251,239,0.2)',
                'neon-strong': '0 0 15px rgba(81,251,239,0.6), 0 0 30px rgba(81,251,239,0.3), inset 0 0 10px rgba(81,251,239,0.1)',
                'neon-magenta': '0 0 10px rgba(255,0,255,0.4), 0 0 20px rgba(255,0,255,0.2)',
                'neon-green': '0 0 10px rgba(57,255,20,0.5), 0 0 20px rgba(57,255,20,0.25)',
            },
            backgroundImage: {
                'cyber-grid': `
            linear-gradient(to right, rgba(81, 251, 239, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(81, 251, 239, 0.05) 1px, transparent 1px)
        `,
            },
            keyframes: {
                'accordion-down': {
                    from: {
                        height: '0',
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)',
                    },
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)',
                    },
                    to: {
                        height: '0',
                    },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [require('tailwindcss-animate'), require('@tailwindcss/forms'), require('@tailwindcss/container-queries')],
} satisfies Config;