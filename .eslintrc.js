module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        node: true,
        jest: true
    },
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        'no-eval': 'error',
        'no-implied-eval': 'error',
        'no-new-func': 'error'
    }
};