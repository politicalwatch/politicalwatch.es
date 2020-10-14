<template>
  <section class="c-team o-container o-section">
    <h2 class="c-team__title">
      {{ $t('blocks.team.title') }}
    </h2>
    <div class="c-team__wrapper">
      <article
        v-for="(member, i) in team"
        :key="i"
        class="c-team__member"
      >
        <img :src="member.avatar" :alt="member.name" class="c-team__member-avatar">
        <div class="c-team__member-wrapper">
          <h3 class="c-team__member-name">
            {{ member.name }}
          </h3>
          <h4 class="c-team__member-position">
            {{ member.position }}
          </h4>
          <p class="c-team__member-email">
            <a :href="`mailto:${member.email}`">{{ member.email }}</a>
          </p>
        </div>
        <ul class="c-team__member-social">
          <li v-if="member.web">
            <a :href="member.web" target="_blank"><web /></a>
          </li>
          <li v-if="member.twitter">
            <a :href="member.twitter" target="_blank"><twitter /></a>
          </li>
          <li v-if="member.github">
            <a :href="member.github" target="_blank"><github /></a>
          </li>
          <li v-if="member.linkedin">
            <a :href="member.linkedin" target="_blank"><linkedin /></a>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script>
import web from '~/assets/images/member-web.svg?inline'
import twitter from '~/assets/images/member-twitter.svg?inline'
import github from '~/assets/images/member-github.svg?inline'
import linkedin from '~/assets/images/member-linkedin.svg?inline'

export default {
  name: 'Team',
  components: {
    web,
    twitter,
    github,
    linkedin
  },
  computed: {
    team () {
      return this.$parent.teamMembers
    }
  }
}
</script>
