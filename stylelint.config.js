module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-recommended-scss',
  ],
  "plugins": [
    "stylelint-order"
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'max-nesting-depth': null,
    'order/properties-alphabetical-order': null,
    'no-descending-specificity': null,
    'selector-max-compound-selectors': null,
    'selector-class-pattern': null,
  }
}
