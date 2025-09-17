/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
const config = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '*': 'prettier --write --ignore-unknown'
}

export default config
