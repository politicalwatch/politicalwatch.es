<template>
  <footer class="c-footer">
    <div class="c-footer__wrapper o-container">
      <nuxt-link :to="localePath('index')" class="c-footer__logo">
        <logo />
      </nuxt-link>
      <div class="c-footer__address">
        <p>
          Avda. Cardenal Herrera Oria <br>
          63, 3º Izda - 28034, Madrid
        </p>
        <p><a href="tel:34917314873">+34 91 731 48 73</a></p>
        <p><a href="mailto:info@politicalwatch.com">info@politicalwatch.com</a></p>
      </div>
      <div class="c-footer__social">
        <a href="#" target="_blank"><facebook /></a>
        <a href="#" target="_blank"><twitter /></a>
        <a href="#" target="_blank"><instagram /></a>
        <a href="#" target="_blank"><youtube /></a>
      </div>
    </div>
    <div class="c-footer__copyright o-container">
      <p>Political Watch © {{ (new Date()).getFullYear() }} - <a href="/aviso-legal">{{ $t('pages.legal.title') }}</a></p>
      <p>{{ $t('global.developedBy') }} - <a target="_blank" href="http://ungrynerd.com">UNGRYNERD</a></p>
    </div>
  </footer>
</template>

<script>
import logo from '~/assets/images/logo-footer.svg?inline'
import twitter from '~/assets/images/icon-twitter.svg?inline'
import facebook from '~/assets/images/icon-facebook.svg?inline'
import youtube from '~/assets/images/icon-youtube.svg?inline'
import instagram from '~/assets/images/icon-instagram.svg?inline'

export default {
  name: 'Footer',
  components: {
    logo,
    twitter,
    facebook,
    youtube,
    instagram
  }
}
</script>
