module.exports = {
  extends: ["next/core-web-vitals", "../../.eslintrc.js"],
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourecType: "module"
  }
};