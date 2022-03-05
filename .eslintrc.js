module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      globalReturn: false,
    },
    ecmaVersion: 2020,
    project: "./tsconfig.json",
  },
  extends: [
    "eslint:recommended",
    "standard",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": 0,
  },
  plugins: ["@typescript-eslint"],
  env: {
    es6: true,
    node: true,
  },
  ignorePatterns: ["dist", "node_modules", "examples", "scripts"],
};