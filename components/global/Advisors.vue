<template>
  <section class="c-team o-container o-section">
    <h2 class="c-team__title">
      {{ $t('blocks.advisors.title') }}
    </h2>
    <div class="c-team__wrapper">
      <article
        v-for="(advisor, i) in advisors"
        :key="i"
        class="c-team__member"
      >
        <img :src="advisor.image" :alt="advisor.name" class="c-team__member-avatar">
        <div class="c-team__member-wrapper">
          <h3 class="c-team__member-name">
            {{ advisor.name }}
          </h3>
        </div>
        <ul class="c-team__member-social">
          <li v-if="advisor.web">
            <a :href="advisor.web" target="_blank"><web /></a>
          </li>
          <li v-if="advisor.twitter">
            <a :href="advisor.twitter" target="_blank"><twitter /></a>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script>
import web from '~/assets/images/member-web.svg?inline'
import twitter from '~/assets/images/member-twitter.svg?inline'

export default {
  name: 'Advisors',
  components: {
    web,
    twitter
  },
  data () {
    return {
      advisors: [
        {
          name: 'Renata Ávila',
          image: '/images/advisors/renata-avila.jpeg',
          web: 'https://es.wikipedia.org/wiki/Renata_%C3%81vila_Pinto',
          twitter: 'https://twitter.com/avilarenata'
        },
        {
          name: 'Gonzalo Fanjul',
          image: '/images/advisors/gonzalo-fanjul.jpg',
          web: '',
          twitter: 'https://twitter.com/GonzaloFanjul'
        },
        {
          name: 'Simona Levi',
          image: '/images/advisors/simona-levi.jpg',
          web: 'https://es.wikipedia.org/wiki/Simona_Levi',
          twitter: 'https://twitter.com/X_Net_'
        },
        {
          name: 'Diego Álvarez',
          image: '/images/advisors/diego-alvarez.jpg',
          web: 'https://www.tiki-toki.com/timeline/entry/665072/Trayectoria-personal-y-profesional-Diego-lvarez-diegoalsan/',
          twitter: ''
        },
        {
          name: 'Karma Peiró',
          image: '/images/advisors/karma-peiro.jpg',
          web: 'https://www.karmapeiro.com/',
          twitter: 'https://twitter.com/kpeiro'
        },
        {
          name: 'Pablo Aragón',
          image: '/images/advisors/pablo-aragon.jpg',
          web: 'https://elaragon.net/',
          twitter: 'https://twitter.com/elaragon'
        },
        {
          name: 'Teresa Cavero',
          image: '/images/advisors/teresa-cavero.jpg',
          web: '',
          twitter: 'https://twitter.com/teresacaverog'
        },
        {
          name: 'Isabel Kreisler',
          image: '/images/advisors/isabel-kreisler.jpg',
          web: '',
          twitter: 'https://twitter.com/IsabelKreisler'
        },
        {
          name: 'Sergio Salgado',
          image: '/images/advisors/sergio-salgado.jpg',
          web: '',
          twitter: 'https://twitter.com/X_Net_'
        },
        {
          name: 'Déborah Itriago',
          image: '/images/advisors/deborah-itriago.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.c-team__wrapper {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>
