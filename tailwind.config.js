module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (image) => ({
        home: "url(/images/background.png)",
      }),
    },
    colors: {
      primary: "#040714",
      navColor: "white",
      secondary: "#f9f9f9",
    },
    fontFamily: {
      body: ["Poppins", "sans-serif"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
