<template>
  <div class="c-search">
    <div class="c-search__header">
      <span class="c-search__button-close" @click="close"><search /></span>
    </div>
    <div class="c-search__form">
      <input class="c-search__form-input" type="search" placeholder="Buscar..." @change="search" /><button class="c-search__form-button"><iconSearch /></button>
    </div>
    <div class="c-search__results">
      <div v-if="tipiResults.length > 0" class="c-search__result">
        <h2>En Tipi</h2>
        <ul>
          <li v-for="item in tipiResults" v-bind:key="item">
            <img src="https://placekitten.com/g/80/80" />
            <p>{{ item }}</p>
          </li>
        </ul>
      </div>
      <div v-if="p2030Results.length > 0" class="c-search__result">
        <h2>En Parlamento2030</h2>
        <ul>
          <li v-for="item in p2030Results" v-bind:key="item">
            <img src="https://placekitten.com/g/80/80" />
            <p>{{ item }}</p>
          </li>
        </ul>
      </div>
      <div v-if="ompResults.length > 0" class="c-search__result">
        <h2>En OpenManifestoProject</h2>
        <ul>
          <li v-for="item in ompResults" v-bind:key="item">
            <img src="https://placekitten.com/g/80/80" />
            <p>{{ item }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import iconSearch from '~/assets/images/icon-search.svg?inline'

export default {
  components: {
    iconSearch
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
      this.tipiResults = ['result 1', 'result 2', 'result 3']
      this.p2030Results = ['result 1', 'result 2', 'result 3']
      this.ompResults = ['result 1', 'result 2', 'result 3']
    }
  }
}
</script>
