/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "index.html"
  ],
  theme: {
    spacing: {
      "spacing-1": "14px",
      "spacing-2": "16px",
      "spacing-3": "24px",
      "spacing-4": "32px",
      "spacing-5": "125px"
    },
    padding:{
      "padding-1":"10px",
    },
    screens: {
      xs: "375px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors:{
      "green":  "hsl(75, 94%, 57%)",
      "white": "hsl(0, 0%, 100%)",
      "grey-700": "hsl(0, 0%, 20%)",
      "grey-800": "hsl(0, 0%, 12%)",
      "grey-900": "hsl(0, 0%, 8%)",
    },
    fontSize: {
      "xs": "14px",
      "s": "16px",
      "m":"20px",
      "l":"24px",
      "xl": "28px",
      "2xl":"32px"
    },
  
    extend: {

      fontFamily: {
          "Inter": ["Inter", "sans-serif"]
      },
      
    },
  },
  plugins: [],
}

