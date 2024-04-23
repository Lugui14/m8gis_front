module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "no-unused-vars": "warn",
    "no-use-before-define": "off",
    "no-multiple-empty-lines": ["warn", { max: 2 }],
    "no-console": "warn",
    "arrow-parens": ["error", "as-needed"],
    "comma-dangle": "off",
    "react/jsx-no-target-blank": "off",
    "react/display-name": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
