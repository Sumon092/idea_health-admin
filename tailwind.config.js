module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#184e72",

          "secondary": "#39e567",

          "accent": "#7944aa",

          "neutral": "#141924",

          "base-100": "#FFFFFF",

          "info": "#B3CEE6",

          "success": "#14675D",

          "warning": "#ED9107",

          "error": "#E24069",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
