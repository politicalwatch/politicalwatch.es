<template>
  <div 
    v-show="$i18n.locale != 'es'"
    class="c-disclaimer"
    role="alert"
  >
    <SpainFlag />
    <span>
      {{ t(`pages.${origin}.contentOnlyInSpanish`) }}
    </span>
  </div>
</template>

<script setup lang="ts">
import SpainFlag from "@/assets/images/spain.svg?component";

const { origin } = defineProps({
  origin: {
    type: String,
    required: true
  }
});

const { t } = useI18n();
</script>

<style lang="scss" scoped>
.c-disclaimer {
  padding: 15px;
  background-color: #eee;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    width: 25px;
    height: auto;
  }
  span {
    color: #172844; // TODO: Change the color by variable
    font-size: 0.9rem;
  }

}
</style>
