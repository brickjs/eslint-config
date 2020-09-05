# @brickjs/eslint-config

A common configuration for eslint and prettier for BrickJS projects.

Each project should utilize:
- Typescript
- React
- Jest

## .eslintrc

```json
{
  "extends": "@brickjs/eslint-config"
}
```

## .prettierrc.js

```javascript
module.exports = {
  ...require('@brickjs/eslint-config/prettier-config'),
};
```
