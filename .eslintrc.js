module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': 'eslint:recommended', 
	'overrides': [
	],
	'parserOptions': {
		'ecmaVersion': 'latest'
	},
	'rules': {
		'indent': [
			'warn',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'no-unused-vars': [
			'warn'
		]
	}
};
