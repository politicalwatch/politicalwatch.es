<template>
  <div class="c-search">
    <div class="c-search__header">
      <nuxt-link :to="localePath('index')" class="c-search__logo">
        <logo />
      </nuxt-link>
      <span class="c-search__button-close" @click="close" />
    </div>
    <div class="c-search__form">
      <input ref="search" class="c-search__form-input" type="search" placeholder="Buscar..." @change="search">
      <button class="c-search__form-button">
        <iconSearch />
      </button>
    </div>
    <div class="c-search__results c-content">
      <div v-if="tipiResults.length > 0" class="c-search__result">
        <h3>Actividad en el congreso</h3>
        <ul>
          <li v-for="item in tipiResults" :key="item.url">
            <a target="_blank" :title="item.full" :href="item.url">{{ item.title }}</a>
            <span v-for="tag in item.tags" :key="tag" class="c-search__tag">{{ tag }}</span>
          </li>
        </ul>
        <a target="_blank" :href="tipiMore" class="c-link">Ver más</a>
      </div>
      <div v-if="ompResults.length > 0" class="c-search__result">
        <h3>Propuestas electorales</h3>
        <ul>
          <li v-for="item in ompResults" :key="item.url">
            <a target="_blank" :title="item.full" :href="item.url">{{ item.title }}</a>
            <span v-for="tag in item.tags" :key="tag" class="c-search__tag">{{ tag }}</span>
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
      ompResults: [],
      tipiMore: '',
      ompMore: ''
    }
  },
  mounted () {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 27) {
        this.close()
      }
    })
    this.$refs.search.focus()
  },
  methods: {
    close () {
      window.scrollTo(0, 0)
      this.$emit('closed')
    },
    trimTitle (title) {
      if (title.length > 150) {
        title = title.substring(0, 147) + '...'
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
          full: initiative.title,
          url: 'https://tipiciudadano.es/initiatives/' + initiative.id,
          tags: initiative.topics.slice(0, 3)
        }
        this.tipiResults.push(result)
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
            const result = {
              title: this.trimTitle(data[count].body),
              full: data[count].body,
              url: '',
              tags: data[count].topics.slice(0, 3)
            }
            this.ompResults.push(result)
            count++
          }
        })
    },
    search (event) {
      const term = event.target.value
      this.tipiSearch(term)
      this.ompSearch(term)
    }
  }
}
</script>
