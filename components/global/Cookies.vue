<template>
  <section v-if="isOpen" class="c-cookies">
    <div class="o-container">
      <p>Usamos Google Analytics para conocer el impacto de nuestros proyecto e investigaciones en el ecosistema digital, con el objetivo de seguir mejorando y adaptándonos a un mundo cada vez más cambiante. Con este formulario te solicitamos tu consentimiento de uso.</p>
      <a
        href="#"
        class="c-button"
        @click="accept"
      >Aceptar</a>
      <a
        href="#"
        class="c-button c-button--outline"
        @click="deny"
      >Rechazar</a>
    </div>
  </section>
</template>

<script>
import { bootstrap } from 'vue-gtag'

export default {
  name: 'Cookies',
  data () {
    return {
      isOpen: false
    }
  },
  created () {
    this.isOpen = !this.getGDPR()
  },
  methods: {
    deny () {
      if (process.browser) {
        this.isOpen = false
        localStorage.setItem('GDPR:accepted', false)
      }
    },
    accept () {
      if (process.browser) {
        bootstrap().then(() => {
          this.isOpen = false
          localStorage.setItem('GDPR:accepted', true)
          location.reload()
        })
      }
    },
    getGDPR () {
      if (process.browser) {
        return localStorage.getItem('GDPR:accepted')
      }
    }
  }
}
</script>
