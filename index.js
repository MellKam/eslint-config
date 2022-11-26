module.exports = {
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
		'@typescript-eslint/no-floating-promises': 'off',
		'no-unused-vars': 'off',
		"@typescript-eslint/no-unused-vars": "warn",
		'no-console': ['warn', { allow: ['warn', 'error'] }],
		'prefer-const': [
			'error',
			{
				destructuring: 'all',
				ignoreReadBeforeAssign: false,
			},
		],
		'no-var': 'error',
		'object-curly-spacing': "off",
		 "@typescript-eslint/object-curly-spacing": "warn"
	},
};
