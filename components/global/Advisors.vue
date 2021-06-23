<template>
  <section class="c-team o-container o-section">
    <h2 class="c-team__title">
      {{ $t('blocks.advisors.title') }}
    </h2>
    <div class="c-team__wrapper" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));">
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
          web: '',
          twitter: 'https://twitter.com/avilarenata'
        },
        {
          name: 'Gonzalo Fanjul',
          image: '/images/advisors/gonzalo-fanjul.jpg',
          web: '',
          twitter: 'https://twitter.com/GonzaloFanjul'
        },
        // {
        //   name: 'Irene Milleiro',
        //   image: '/images/advisors/irene-milleiro.jpg',
        //   web: '',
        //   twitter: 'https://twitter.com/irenemilleiro'
        // },
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
          name: 'Diego Álvarez',
          image: '/images/advisors/diego-alvarez.png',
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
          web: '',
          twitter: 'https://twitter.com/elaragon'
        }
      ]
    }
  }
}
</script>
