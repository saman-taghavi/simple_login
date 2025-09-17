const functions = ['cn', 'clsx', 'cva']
/** @type {import("prettier").Config} */
module.exports = {
  singleQuote: true,
  trailingComma: 'none',
  printWidth: 140,
  semi: false,
  bracketSameLine: true,
  tailwindFunctions: functions,
  customFunctions: functions,
  plugins: ['prettier-plugin-classnames', 'prettier-plugin-tailwindcss', 'prettier-plugin-merge']
}
