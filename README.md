## Installation 

```bash
npm install --save-dev @mellkam/eslint-config
```

```bash
yarn add -D @mellkam/eslint-config
```

```bash
pnpm add -D @mellkam/eslint-config
```

## Peer dependencies

- eslint
- prettier
- typescript


## Eslint config example

```javascript
module.exports = {
	root: true,
	extends: ['@mellkam/eslint-config'],
	parserOptions: {
		project: './tsconfig.json',
	},
};

```

## Prettier config example

```javascript
module.exports = require('@mellkam/eslint-config/prettier');
```

