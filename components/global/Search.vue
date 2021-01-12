<template>
  <div class="c-search">
    <div class="c-search__header">
      <nuxt-link :to="localePath('index')" class="c-search__logo">
        <logo />
      </nuxt-link>
      <span class="c-search__button-close" @click="close"></span>
    </div>
    <div class="c-search__form">
      <input class="c-search__form-input" type="search" placeholder="Buscar..." @change="search" /><button class="c-search__form-button"><iconSearch /></button>
    </div>
    <div class="c-search__results c-content">
      <div v-if="tipiResults.length > 0" class="c-search__result">
        <h3>En Tipi</h3>
        <ul>
          <li v-for="item in tipiResults" v-bind:key="item">
            <p>{{ item }}</p>
          </li>
        </ul>
         <a href="" class="c-link">Ver más</a>
      </div>
      <div v-if="p2030Results.length > 0" class="c-search__result">
        <h3>En Parlamento2030</h3>
        <ul>
          <li v-for="item in p2030Results" v-bind:key="item">
            <p>{{ item }}</p>
          </li>
        </ul>
         <a href="" class="c-link">Ver más</a>
      </div>
      <div v-if="ompResults.length > 0" class="c-search__result">
        <h3>En OpenManifestoProject</h3>
        <ul>
          <li v-for="item in ompResults" v-bind:key="item">
            <p>{{ item }}</p>
          </li>
        </ul>
         <a href="" class="c-link">Ver más</a>
      </div>
    </div>
  </div>
</template>

<script>
import iconSearch from '~/assets/images/icon-search.svg?inline'
import logo from '~/assets/images/logo.svg?inline'

export default {
  components: {
    iconSearch,
    logo
  },
  data () {
    return {
      tipiResults: [],
      p2030Results: [],
      ompResults: []
    }
  },
  methods: {
    close () {
      this.$emit('closed')
    },
    search (event) {
      this.tipiResults = ['Result hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola hola', 'Result 2', 'Result 3', 'Result 4', 'Result 5']
      this.p2030Results = ['Result 1', 'Result 2', 'Result 3', 'Result 4', 'Result 5']
      this.ompResults = ['Result 1', 'Result 2', 'Result 3', 'Result 4', 'Result 5']
    }
  }
}
</script>
