import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app }) => {
  const getGDPR = localStorage.getItem('GDPR:accepted')

  Vue.use(VueGtag, {
    config: { id: 'G-15GZ6731CG' },
    bootstrap: getGDPR,
    appName: 'PoliticalWatch',
    enabled: getGDPR,
    pageTrackerScreenviewEnabled: true
  }, app.router)
}
