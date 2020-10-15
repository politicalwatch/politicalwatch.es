import Vue from 'vue'

Vue.filter('urldecode', val => val.replace(/-/g, ' '))
Vue.filter('formatDate', (date, locale = 'es', options = { year: 'numeric', month: 'long', day: 'numeric' }) => new Date(date).toLocaleDateString(locale, options))
