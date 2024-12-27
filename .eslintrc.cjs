module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended", // Only if you're using hooks
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: {
    react: { version: "detect" }, // Automatically detect React version
  },
  rules: {
    "no-unused-vars": "off",
    "react/no-unescaped-entities": "off", // Disable no-unused-vars globally
    // Add any custom rules here
  },
};
