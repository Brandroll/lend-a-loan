/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        isidorasans: ["var(--isidorasans-font)"],
        isidorasans_regular: ["var(--isidorasans-regular-font)"],
        isidorasans_medium: ["var(--isidorasans-medium-font)"],
        isidorasans_semi_bold: ["var(--isidorasans-semi-bold-font)"],
      },
      fontSize: {
        banner: "50px",
        "13px": "13.68px",
        "22px": "22px",
        "18px": "18px",
        "19px": "19px",
        "20px": "20px",
        "15px": "15px",
        "16px": "16px",
        "22px": "22px",
        "24px": "24px",
        "25px": "25px",
        "35px": "35px",
        "36px": "36px",
        "30px": "30px",
        "28px": "28px",
        "40px": "40px",
        "50px": "50px",
      },
      padding: {
        "95px": "95px",
      },
      colors: {
        "brand-blue": "#61C0CD",
        "brand-blue-light": "#d2f7fc",
        "gray-bg": "#F2F2F2",
        footer: "#171719",
        " dark": "#54595F",
        "footer-link": "#6A6A6D",
      },
      maxWidth: {
        "site-full": "1200px",
      },
    },
  },
  plugins: [],
};
