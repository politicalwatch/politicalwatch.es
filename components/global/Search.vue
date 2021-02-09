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
      <div v-if="searched == true" class="c-search__result">
        <h3>Actividad en el congreso</h3>
        <ul v-if="tipiResults.length > 0">
          <li v-for="item in tipiResults" :key="item.url">
            <a target="_blank" :title="item.full" :href="item.url">{{ item.title }}</a>
            <span v-for="tag in item.tags" :key="tag" class="c-search__tag">{{ tag }}</span>
          </li>
        </ul>
        <a v-if="tipiResults.length > 0" target="_blank" :href="tipiMore" class="c-link">Ver más</a>
        <a v-if="tipiResults.length == 0" target="_blank" href="https://tipiciudadano.es" class="c-link">Buscar actividad parlamentaria</a>
      </div>
      <div v-if="searched == true" class="c-search__result">
        <h3>Propuestas electorales</h3>
        <ul v-if="ompResults.length > 0">
          <li v-for="item in ompResults" :key="item.url">
            <a target="_blank" :title="item.full" :href="item.url">{{ item.title }}</a>
            <span v-for="tag in item.tags" :key="tag" class="c-search__tag">{{ tag }}</span>
          </li>
        </ul>
        <a v-if="ompResults.length > 0" target="_blank" :href="ompMore" class="c-link">Ver más</a>
        <a v-if="ompResults.length == 0" target="_blank" href="https://buscador.openmanifestoproject.org" class="c-link">Buscar propuestas electorales</a>
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
      searched: false,
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
      this.searched = false
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
    deleteSearchWords (text) {
      const stopwords = ['de', 'la', 'que', 'el', 'en', 'y', 'a', 'los', 'del', 'se', 'las', 'por', 'un', 'para', 'con', 'no', 'una', 'su', 'al', 'lo', 'como', 'más', 'pero', 'sus', 'le', 'ya', 'o', 'este', 'sí', 'porque', 'esta', 'entre', 'cuando', 'muy', 'sin', 'sobre', 'también', 'me', 'hasta', 'hay', 'donde', 'quien', 'desde', 'todo', 'nos', 'durante', 'todos', 'uno', 'les', 'ni', 'contra', 'otros', 'ese', 'eso', 'ante', 'ellos', 'e', 'esto', 'mí', 'antes', 'algunos', 'qué', 'unos', 'yo', 'otro', 'otras', 'otra', 'él', 'tanto', 'esa', 'estos', 'mucho', 'quienes', 'nada', 'muchos', 'cual', 'poco', 'ella', 'estar', 'estas', 'algunas', 'algo', 'nosotros', 'mi', 'mis', 'tú', 'te', 'ti', 'tu', 'tus', 'ellas', 'nosotras', 'vosotros', 'vosotras', 'os', 'mío', 'mía', 'míos', 'mías', 'tuyo', 'tuya', 'tuyos', 'tuyas', 'suyo', 'suya', 'suyos', 'suyas', 'nuestro', 'nuestra', 'nuestros', 'nuestras', 'vuestro', 'vuestra', 'vuestros', 'vuestras', 'esos', 'esas', 'estoy', 'estás', 'está', 'estamos', 'estáis', 'están', 'esté', 'estés', 'estemos', 'estéis', 'estén', 'estaré', 'estarás', 'estará', 'estaremos', 'estaréis', 'estarán', 'estaría', 'estarías', 'estaríamos', 'estaríais', 'estarían', 'estaba', 'estabas', 'estábamos', 'estabais', 'estaban', 'estuve', 'estuviste', 'estuvo', 'estuvimos', 'estuvisteis', 'estuvieron', 'estuviera', 'estuvieras', 'estuviémos', 'estuvierais', 'estuvieran', 'estuviese', 'estuvieses', 'estuviémos', 'estuvieseis', 'estuviesen', 'estando', 'estado', 'estada', 'estados', 'estadas', 'estad', 'he', 'has', 'ha', 'hemos', 'habéis', 'han', 'haya', 'hayas', 'hayamos', 'hayáis', 'hayan', 'habré', 'habrás', 'habrá ', ';habremos', 'habréis', 'habrán', 'habría', 'habrías', 'habríamos', 'habríais', 'habrían', 'había', 'habías', 'habíamos', 'habíais', 'habían', 'hube', 'hubiste', 'hubo', 'hubimos', 'hubisteis', 'hubieron', 'hubiera', 'hubieras', 'hubiésemos', 'hubierais', 'hubieran', 'hubiese', 'hubieses', 'hubiémos', 'hubieseis', 'hubiesen', 'habiendo', 'habido', 'habida', 'habidos', 'habidas', 'soy', 'eres', 'es', 'somos', 'sois', 'son', 'sea', 'seas', 'seamos', 'seáis', 'sean', 'seré ', 'serás', 'será', 'seremos', 'seréis', 'serán', 'sería', 'serías', 'seríamos', 'seríais', 'serían', 'era', 'eras', 'éramos', 'erais', 'eran', 'fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron', 'fuera', 'fueras', 'fuéramos', 'fuerais', 'fueran', 'fuese', 'fueses', 'fuésemos', 'fueseis', 'fuesen', 'sintiendo', 'sentido', 'sentida', 'sentidos', 'sentidas', 'siente', 'sentid', 'tengo', 'tienes', 'tiene', 'tenemos', 'tenéis', 'tienen', 'tenga', 'tengas', 'tengamos', 'tengáis', 'tengan', 'tendré', 'tendrás', 'tendrá', 'tendremos', 'tendréis', 'tendrán', 'tendría', 'tendrías', 'tendríamos', 'tendríais', 'tendrían', 'tenía', 'tenías', 'teníamos', 'teníais', 'tenían', 'tuve', 'tuviste', 'tuvo', 'tuvimos', 'tuvisteis', 'tuvieron', 'tuviera', 'tuvieras', 'tuviéramos', 'tuvierais', 'tuvieran', 'tuviese', 'tuvieses', 'tuviésemos', 'tuvieseis', 'tuviesen', 'teniendo', 'tenido', 'tenida', 'tenidos', 'tenidas', 'tened']
      const words = text.split(',')
      const intersection = words.filter(value => stopwords.includes(value))
      intersection.forEach((value) => { words.splice(words.indexOf(value), 1) })
      return words.join(',')
    },
    ompSearch (term) {
      this.ompResults = []
      this.ompMore = ''
      if (term === '') {
        return
      }

      let searchTerm = term.split(' ').join(',').toLowerCase()
      searchTerm = this.deleteSearchWords(searchTerm)
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
              url: 'https://buscador.openmanifestoproject.org/proposal/' + data[count].id,
              tags: data[count].topics.slice(0, 3)
            }
            this.ompResults.push(result)
            count++
          }
        })
    },
    search (event) {
      const term = event.target.value
      this.searched = true
      this.tipiSearch(term)
      this.ompSearch(term)
    }
  }
}
</script>
