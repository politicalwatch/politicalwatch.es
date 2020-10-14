import Vue from 'vue'

Vue.filter('urldecode', val => val.replace(/-/g, ' '))
