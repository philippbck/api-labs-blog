import Typography from "typography"

const typography = new Typography({
  title: "Minimal",
  baseFontSize: "16px",
  baseLineHeight: 1.66,
  scaleRatio: 3.66,
  headerFontFamily: ["Montserat", "sans-serif"],
  bodyFontFamily: ["Montserat", "sans-serif"],
  headerWeight: 700,
  googleFonts: [
    {
      name: "Montserat",
      styles: ["700"]
    },
    {
      name: "Open Sans",
      styles: ["400"]
    }
  ]
})

export default typography