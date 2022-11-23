/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{tsx,ts}"],
  mode: "jit",
  theme: {
    extend: {
      dropShadow: {
        'glow': '0px 0px 7px #00ADB5',
        'off': 'inset 0px 5px 10px #393E46'
      },
      colors:{
        BG: "#222831",
        noActive: "#393E46",
        active: "#00ADB5"
      }
    },
  },
  plugins: [],
}
