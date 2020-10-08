module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-sass-guidelines'
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'max-nesting-depth': null,
    'order/properties-alphabetical-order': null,
    'no-descending-specificity': null
  }
}
