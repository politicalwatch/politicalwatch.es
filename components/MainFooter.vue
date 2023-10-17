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
        <p><a href="mailto:info@politicalwatch.es">info@politicalwatch.es</a></p>
      </div>
      <div class="c-footer__social">
        <a href="https://twitter.com/_PoliticalWatch" target="_blank"><twitter /></a>
        <a href="https://www.facebook.com/PoliticalWatch.es/" target="_blank"><facebook /></a>
        <a href="https://github.com/politicalwatch/" target="_blank"><github /></a>
        <a href="https://www.linkedin.com/company/politicalwatch" target="_blank"><linkedin /></a>
      </div>
    </div>
    <div class="c-footer__copyright o-container">
      <p>Political Watch © {{ (new Date()).getFullYear() }} - <a href="/aviso-legal">{{ $t('pages.legal.title') }}</a> - <a href="/politica-de-privacidad">{{ $t('pages.privacy.title') }}</a> - <a href="/politica-de-cookies">{{ $t('pages.cookies.title') }}</a></p>
      <p>{{ $t('global.developedBy') }} - <a target="_blank" href="http://ungrynerd.com">UNGRYNERD</a></p>
    </div>
  </footer>
</template>

<script>
import logo from '~/assets/images/logo-footer.svg?inline'
import twitter from '~/assets/images/icon-twitter.svg?inline'
import facebook from '~/assets/images/icon-facebook.svg?inline'
import github from '~/assets/images/icon-github.svg?inline'
import linkedin from '~/assets/images/icon-linkedin.svg?inline'

export default {
  name: 'MainFooter',
  components: {
    logo,
    twitter,
    facebook,
    linkedin,
    github
  }
}
</script>
