<template>
  <div class="slider_item">
    <div class="slider_item__title">Зможеш обрати свій варіант №{{slide_title}}</div>
    <div class="slider_item__content">
      <ul class="slider_item__list">
        <li class="slider_item__list_item" v-for="({title, description}, index) in items" :key="index">
          <CheckItem :title="`${title}`" :description="`${description}`"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CheckItem from '~/components/CheckItem.vue';

export default {
  name: "SliderItem",
  components: ['CheckItem'],
  props: {
    slide_title: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      items: [
        {
          title: 'CPA',
          description: '$25 і вище'
        },
        {
          title: 'REVSHARE',
          description: 'Піднімай до 60%'
        },
        {
          title: 'Особлива підтримка для кожного 24/7',
          description: 'У вас буде свій персональний менеджер'
        },
      ],
    }
  },
}
</script>

<style scoped>
.slider_item__title {
  color: #fcfcfd;
  font-family: Gilroy, sans-serif;
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 1.6;
  max-width: 22rem
}

.slider_item__title:not(:last-child) {
  margin-bottom: 6.5rem
}

.slider_item__list_item:not(:last-child) {
  margin-bottom: 2.5rem
}
</style>
