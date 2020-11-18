import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app }) => {
  // const getGDPR = localStorage.getItem('GDPR:accepted')

  Vue.use(VueGtag, {
    config: { id: 'UA-127864699-4' },
    bootstrap: true,
    appName: 'PoliticalWatch',
    enabled: true,
    pageTrackerScreenviewEnabled: true
  }, app.router)
}
