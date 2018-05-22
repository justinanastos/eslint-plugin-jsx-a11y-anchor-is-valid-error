This is a reproducible test case for a bug in [`eslint-plugin-jsx-a11y`](https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/341), possibly caused by [`jsx-ast-utils`](https://github.com/evcohen/jsx-ast-utils).

# Installation

```bash
npm install
```

# Run

```bash
npm start
```

# Result

```
eslint-plugin-jsx-a11y-anchor-is-valid-error:(master)$ npm start

> eslint-plugin-jsx-a11y-anchor-is-valid-error@1.0.0 start ./eslint-plugin-jsx-a11y-anchor-is-valid-error
> eslint index.jsx

Cannot read property 'expression' of undefined
TypeError: Cannot read property 'expression' of undefined
    at extract (./eslint-plugin-jsx-a11y-anchor-is-valid-error/node_modules/jsx-ast-utils/lib/values/expressions/index.js:169:20)
    at ./eslint-plugin-jsx-a11y-anchor-is-valid-error/node_modules/jsx-ast-utils/lib/values/expressions/ObjectExpression.js:23:32
    at Array.reduce (<anonymous>)
    at Object.extractValueFromObjectExpression [as ObjectExpression] (./eslint-plugin-jsx-a11y-anchor-is-valid-error/node_modules/jsx-ast-utils/lib/values/expressions/ObjectExpression.js:21:27)
    at Object.extract [as JSXExpressionContainer] (./eslint-plugin-jsx-a11y-anchor-is-valid-error/node_modules/jsx-ast-utils/lib/values/expressions/index.js:182:21)
    at getValue (./eslint-plugin-jsx-a11y-anchor-is-valid-error/node_modules/jsx-ast-utils/lib/values/index.js:48:27)
    at extractValue (./eslint-plugin-jsx-a11y-anchor-is-valid-error/node_modules/jsx-ast-utils/lib/getPropValue.js:24:12)
    at getPropValue (./eslint-plugin-jsx-a11y-anchor-is-valid-error/node_modules/jsx-ast-utils/lib/getPropValue.js:41:10)
    at ./eslint-plugin-jsx-a11y-anchor-is-valid-error/node_modules/eslint-plugin-jsx-a11y/lib/rules/anchor-is-valid.js:67:48
    at Array.map (<anonymous>)
```