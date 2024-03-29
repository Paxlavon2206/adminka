// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'admin-gradient': 'linear-gradient(#664aea 1.16%, #5340ad 30.31%, #44397e 53.45%, #3b3461 74.6%, #333046 96.08%)',
      },
      colors: {
        loginBg: 'rgb(102, 74, 234)', 
      },
    },
  },
  plugins: [],
};
