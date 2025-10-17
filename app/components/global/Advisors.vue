<template>
  <section class="c-team o-container o-section">
    <h2 class="c-team__title">
      {{ t("blocks.advisors.title") }}
    </h2>
    <div class="c-team__wrapper">
      <article v-for="(advisor, i) in advisors" :key="i" class="c-team__member">
        <NuxtImg
          :src="advisor.image"
          :alt="advisor.name"
          fit="cover"
          sizes="256px xs:256px sm:272px md:336px lg:300px xl:256px"
          loading="lazy"
          class="c-team__member-avatar"
        />
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

<script setup lang="ts">
import web from "@/assets/images/member-web.svg?component";
import twitter from "@/assets/images/member-twitter.svg?component";

const { t } = useI18n();

const advisors = [
  {
    name: "Renata Ávila",
    image: "/images/advisors/renata-avila.jpeg",
    web: "https://es.wikipedia.org/wiki/Renata_%C3%81vila_Pinto",
    twitter: "https://twitter.com/avilarenata",
  },
  {
    name: "Gonzalo Fanjul",
    image: "/images/advisors/gonzalo-fanjul.jpg",
    web: "",
    twitter: "https://twitter.com/GonzaloFanjul",
  },
  {
    name: "Simona Levi",
    image: "/images/advisors/simona-levi.jpg",
    web: "https://es.wikipedia.org/wiki/Simona_Levi",
    twitter: "https://twitter.com/X_Net_",
  },
  {
    name: "Diego Álvarez",
    image: "/images/advisors/diego-alvarez.jpg",
    web: "https://www.tiki-toki.com/timeline/entry/665072/Trayectoria-personal-y-profesional-Diego-lvarez-diegoalsan/",
    twitter: "",
  },
  {
    name: "Karma Peiró",
    image: "/images/advisors/karma-peiro.jpg",
    web: "https://www.karmapeiro.com/",
    twitter: "https://twitter.com/kpeiro",
  },
  {
    name: "Pablo Aragón",
    image: "/images/advisors/pablo-aragon.jpg",
    web: "https://elaragon.net/",
    twitter: "https://twitter.com/elaragon",
  },
  {
    name: "Teresa Cavero",
    image: "/images/advisors/teresa-cavero.jpg",
    web: "",
    twitter: "https://twitter.com/teresacaverog",
  },
  {
    name: "Isabel Kreisler",
    image: "/images/advisors/isabel-kreisler.jpg",
    web: "",
    twitter: "https://twitter.com/IsabelKreisler",
  },
  {
    name: "Sergio Salgado",
    image: "/images/advisors/sergio-salgado.jpg",
    web: "",
    twitter: "https://twitter.com/X_Net_",
  },
  {
    name: "Déborah Itriago",
    image: "/images/advisors/deborah-itriago.jpg",
  },
];
</script>

<style lang="scss" scoped>
.c-team {
  &__title {
    @include th2;

    & {
      margin: 0 0 gap(4) 0;
    }

    @media (min-width: $md) {
      margin-bottom: gap(8);
    }
  }

  &__wrapper {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    @media (min-width: $xs) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      grid-gap: gap(8) gap(4);
    }
  }

  &__member {
    margin-bottom: gap(4);
    width: 100%;
    color: $brand;
    position: relative;

    @media (min-width: $xs) {
      margin-bottom: 0;
    }

    &:hover {
      .c-team__member-wrapper {
        padding: gap(3) gap(2) 0 0;
        width: 80%;
      }
    }

    .zoom {
      width: 352px;
      overflow: hidden;

      img {
        width: 100%;
        transition: transform 0.5s ease;
      }

      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }

    &-avatar {
      display: block;
      width: 100%;
      object-fit: cover;
      aspect-ratio: 1 / 1;
    }

    &-wrapper {
      position: absolute;
      transform: translateY(-99%);
      display: inline-block;
      background: $white;
      padding: gap(2) gap(2) 0 0;
      width: 75%;
      transition: all 0.5s ease;
    }

    &-name {
      font-size: rem(18px);
      font-weight: bold;
      line-height: 1.78;
      margin: 0;
      a {
        color: $brand;
        text-decoration: none;
        &:hover,
        &:active,
        &:visited {
          color: $brand;
        }
      }
    }

    &-position {
      font-size: rem(14px);
      line-height: 1.71;
      font-weight: normal;
      margin: 0;
    }

    &-email {
      @include member-email;
    }

    &-social {
      @include member-social;
    }
  }
}
</style>
