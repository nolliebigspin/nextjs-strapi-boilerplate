module.exports = {
  extends: [
    "next/core-web-vitals",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "@typescript-eslint/ban-ts-comment": 0,
  },
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourecType: "module",
    ecmaFeatures: {
      jsx: true,
      globalReturn: false,
    },
    ecmaVersion: 2020,
  },
  plugins: ["@typescript-eslint"],
  env: {
    es6: true,
    node: true,
  },
};