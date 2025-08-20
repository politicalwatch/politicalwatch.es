<template>
  <footer class="c-footer">
    <div class="c-footer__wrapper o-container">
      <NuxtLinkLocale to="index" class="c-footer__logo" aria-label="Home">
        <logo viewBox="0 0 256 88" />
      </NuxtLinkLocale>
      <div class="c-footer__menu">
          <ul>
            <li>
              <NuxtLinkLocale to="/quienes-somos" class="c-footer__menu--item" aria-label="Quiénes somos">
              {{ $t('pages.about.title') }}
              </NuxtLinkLocale>
            </li>
            <li>
              <NuxtLinkLocale to="/investigaciones" class="c-footer__menu--item" aria-label="Investigaciones">
              {{ $t('pages.research.title') }}
              </NuxtLinkLocale>
            </li>
            <li>
              <NuxtLinkLocale to="/transparencia" class="c-footer__menu--item" aria-label="Transparencia">
              {{ $t('pages.transparency.title') }}
              </NuxtLinkLocale>
            </li>
          </ul>
      </div>
      <div class="c-footer__address">
        <p>
          Avda. Cardenal Herrera Oria <br />
          63, 3º Izda - 28034, Madrid
        </p>
        <p><a href="tel:34917314873">+34 91 731 48 73</a></p>
        <p>
          <a href="mailto:info@politicalwatch.es">info@politicalwatch.es</a>
        </p>
      </div>
      <div class="c-footer__social">
        <a
          href="https://www.linkedin.com/company/politicalwatch"
          target="_blank"
          aria-label="LinkedIn"
          ><linkedin
        /></a>
        <a
          href="https://github.com/politicalwatch/"
          target="_blank"
          aria-label="GitHub"
          ><github
        /></a>
      </div>
    </div>
    <div class="c-footer__copyright o-container">
      <p>
        Political Watch © {{ new Date().getFullYear() }} -
        <a href="/aviso-legal">{{ t("pages.legal.title") }}</a> -
        <a href="/politica-de-privacidad">{{ t("pages.privacy.title") }}</a> -
        <a href="/politica-de-cookies">{{ t("pages.cookies.title") }}</a>
      </p>
      <p>
        {{ t("global.developedBy") }} -
        <a target="_blank" href="http://ungrynerd.com">UNGRYNERD</a>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import logo from "@/assets/images/logo-footer.svg?component";
import twitter from "@/assets/images/icon-twitter.svg?component";
import facebook from "@/assets/images/icon-facebook.svg?component";
import github from "@/assets/images/icon-github.svg?component";
import linkedin from "@/assets/images/icon-linkedin.svg?component";

const { t } = useI18n();
</script>
