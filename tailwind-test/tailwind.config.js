module.exports = {
  node: "jit",
  purge: ["./src/**/*.html"],
  darkMode: false,
  content: [],
  theme: {
    extend: {
      colors:{
        twitter: 'blue'
      },
      spacing: {
        '15': '3.75rem'
      }
    },
  },
  plugins: [],
};
