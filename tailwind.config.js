/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#7872B9",
        "purple-light": "#9691D2",
        pale: "#D7C3E6",
        "pale-light": "#F1E6F7",
        aqua: "#EBF5FF",
        "aqua-dark": "#CDE1FF",
        "aqua-light": "#F9FCFF",
        pink: "#FA788C",
        "pink-light": "#FAAAB4",
        orange: "#FACD6E",
        charcoal: "#4D4D52",
        popup: "rgba(74, 70, 117, 0.6)",
        link: "rgba(120, 114, 185, 0.5)",
      },
      fontSize: {
        44: "44px",
        40: "40px",
        24: "24px",
        20: "20px",
        18: "18px",
        16: "16px",
      },
      borderRadius: {
        20: "20px",
        15: "15px",
        10: "10px",
      },
      width: {
        container: "1180px",
      },
      boxShadow: {
        navbar: "0px 5px 25px rgba(130, 145, 159, 0.2)",
        "nav-page": "0px 2px 20px rgba(130, 145, 159, 0.2)",
      },
    },
  },
  plugins: [],
};
