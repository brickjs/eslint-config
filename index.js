module.exports = {
  "extends": ["airbnb", "prettier"],
  "plugins": ["prettier", "jest", "@typescript-eslint"],
  "parser": "@typescript-eslint/parser",
  "rules": {
    "no-underscore-dangle": "off", // Allow TS Classes with private properties.
    "import/prefer-default-export": "off", // Prefer named import.
    "react/prop-types": "off", // Use TS to validate props.
    "no-unused-vars": "off", // Will be handled by @typescript-eslint/no-unused-vars.
    "@typescript-eslint/no-unused-vars": ["error"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
    "prettier/prettier": ["error"],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ]
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  "env": {
    "jest/globals": true,
    "browser": true,
    "node": true
  }
}
