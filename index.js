module.exports = {
	root: true,
	env: { node: true, es2021: true },
	plugins: ['prettier'],
	ignorePatterns: [
		'prisma',
		'vite.config.ts',
		'coverage',
		'dist',
		'node_modules',
		'.eslintrc.js',
	],
	extends: [
		'eslint:recommended',
		'prettier',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:import/typescript',
	],
	parser: '@typescript-eslint/parser',
	rules: {
		'prettier/prettier': ['warn'],
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/no-explicit-any': 'off',
		'no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				destructuredArrayIgnorePattern: '^_',
				caughtErrorsIgnorePattern: '^_',
				args: 'all',
				vars: 'all',
				caughtErrors: 'all',
			},
		],
		'no-console': ['warn', { allow: ['warn', 'error'] }],
		'prefer-const': [
			'error',
			{
				destructuring: 'all',
				ignoreReadBeforeAssign: false,
			},
		],
		'no-var': 'error',
		'object-curly-spacing': ['warn', 'always'],
	},
};
