<template>
  <div class="c-search">
    <div class="c-search__header">
      <nuxt-link :to="localePath('index')" class="c-search__logo">
        <logo />
      </nuxt-link>
      <span class="c-search__button-close" @click="close" />
    </div>
    <div class="c-search__form">
      <input class="c-search__form-input" type="search" placeholder="Buscar..." @change="search">
      <button class="c-search__form-button">
        <iconSearch />
      </button>
    </div>
    <div class="c-search__results c-content">
      <div v-if="tipiResults.length > 0" class="c-search__result">
        <h3>En Tipi</h3>
        <ul>
          <li v-for="item in tipiResults" :key="item">
            <p><a target="_blank" :href="item.url">{{ item.title }}</a></p>
          </li>
        </ul>
        <a target="_blank" :href="tipiMore" class="c-link">Ver más</a>
      </div>
      <div v-if="p2030Results.length > 0" class="c-search__result">
        <h3>En Parlamento2030</h3>
        <ul>
          <li v-for="item in p2030Results" :key="item">
            <p><a target="_blank" :href="item.url">{{ item.title }}</a></p>
          </li>
        </ul>
        <a target="_blank" :href="p2030More" class="c-link">Ver más</a>
      </div>
      <div v-if="ompResults.length > 0" class="c-search__result">
        <h3>En OpenManifestoProject</h3>
        <ul>
          <li v-for="item in ompResults" :key="item">
            <p>{{ item }}</p>
          </li>
        </ul>
        <a target="_blank" :href="ompMore" class="c-link">Ver más</a>
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
      ompResults: [],
      tipiMore: '',
      p2030More: '',
      ompMore: ''
    }
  },
  methods: {
    close () {
      this.$emit('closed')
    },
    trimTitle (title) {
      if (title.length > 100) {
        title = title.substring(0, 97) + '...'
      }
      return title
    },
    tipiSearch (term) {
      this.tipiResults = []
      this.tipiMore = ''
      if (term === '') {
        return
      }

      const url = 'https://api.tipiciudadano.es/initiatives/?page=1&title=' + term
      this.tipiMore = 'https://tipiciudadano.es/results/title=' + term
      this.fetch(url, (initiative) => {
        const result = {
          title: this.trimTitle(initiative.title),
          url: 'https://tipiciudadano.es/initiatives/' + initiative.id
        }
        this.tipiResults.push(result)
      })
    },
    p2030Search (term) {
      this.p2030Results = []
      this.p2030More = ''
      if (term === '') {
        return
      }

      const url = 'https://api.parlamento2030.es/initiatives/?page=1&title=' + term
      this.p2030More = 'https://tipiciudadano.es/results/title=' + term
      this.fetch(url, (initiative) => {
        const result = {
          title: this.trimTitle(initiative.title),
          url: 'https://parlamento2030.es/initiatives/' + initiative.id
        }
        this.p2030Results.push(result)
      })
    },
    fetch (url, callback) {
      fetch(url)
        .then(response => response.json())
        .then((data) => {
          let count = 0
          while (count < 5) {
            const initiative = data.initiatives[count]
            callback(initiative)
            count++
          }
        })
    },
    ompSearch (term) {
      this.ompResults = []
      this.ompMore = ''
      if (term === '') {
        return
      }

      const searchTerm = term.split(' ').join(',').toLowerCase()
      const url = 'https://api.openmanifestoproject.org/proposals?threshold=1&page=1&tags=' + searchTerm
      this.ompMore = 'https://buscador.openmanifestoproject.org/results/threshold=1&tags=' + searchTerm

      fetch(url)
        .then(response => response.json())
        .then((data) => {
          let count = 0
          while (count < 5) {
            const item = this.trimTitle(data[count].body)
            this.ompResults.push(item)
            count++
          }
        })
    },
    search (event) {
      const term = event.target.value
      this.tipiSearch(term)
      this.p2030Search(term)
      this.ompSearch(term)
    }
  }
}
</script>
