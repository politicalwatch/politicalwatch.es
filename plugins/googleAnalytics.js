import Vue from 'vue'
import VueGtag from 'vue-gtag'

const getGDPR = localStorage.getItem('GDPR:accepted')

Vue.use(VueGtag, {
  config: { id: 'UA-127864699-4' },
  bootstrap: getGDPR === true,
  appName: 'PoliticalWatch',
  enabled: getGDPR === true
})
