

module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Include paths where Tailwind should look for classes
    './node_modules/tw-elements/dist/js/**/*.js', // Add tw-elements paths
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin'), // Ensure this plugin is loaded
  ],
};
