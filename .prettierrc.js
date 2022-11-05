module.exports = {
  tabWidth: 2,
  singleQuote: false,
  overrides: [
    {
      files: "*.yaml",
      options: {
        bracketSpacing: false,
        singleQuote: true,
        printWidth: 300,
      },
    },
  ],
};
