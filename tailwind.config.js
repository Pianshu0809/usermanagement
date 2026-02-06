/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}', // This is the standard path for an Angular project
    './projects/**/*.{html,ts}', // Include this if you have a multi-project workspace
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
