module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          overlay: "var(--bg-overlay)",
          primary: "var(--bg-primary)",
          primaryLight: "var(--bg-primary-light)",
          grayLight: "var(--bg-gray-light)",
          grayMedium: "var(--bg-gray-medium)",
          grayMediumTransparent: "var(--bg-gray-medium-transparent)",
          lightGray: "var(--bg-light-gray)",
          offWhite: "var(--bg-off-white)",
          whiteTint: "var(--bg-white-tint)",
          accent: "var(--bg-accent)",
          white: "var(--bg-white)"
        },
        text: {
          black: "var(--text-black)",
          blackTransparent: "var(--text-black-transparent)",
          primary: "var(--text-primary)",
          primaryLight: "var(--text-primary-light)",
          gray: "var(--text-gray)",
          grayMedium: "var(--text-gray-medium)",
          white: "var(--text-white)"
        }
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif']
      }
    }
  },
  plugins: []
};