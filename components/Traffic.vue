<template>
  <section class="section section__traffic">
    <div class="section_in">
      <div class="traffic">
        <h2 class="traffic__title">Тим, хто нагоняє Траф</h2>
        <ul class="traffic__list">
          <li class="traffic__item" v-for="(item, index) in items" :key="index">
            <div class="traffic__item_in">
              <div class="traffic__pic">
                <IconFrame :iconName="`${item.picture}`" classes="yellow"/>
              </div>
              <div class="traffic__item_content">
                <div class="traffic__item_title">{{item.title}}</div>
                <div class="traffic__item_description">{{item.description}}</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import IconFrame from "~/components/IconFrame.vue"

export default {
  name: "Traffic",
  components: ['IconFrame'],
  data() {
    return {
      items: [
        {
          picture: 'megaphone',
          title: 'Круті акції, призи та прибуткова бонусна програма',
          description: 'Ми постійно працюємо над тим, щоб вам було цікаво та вигідно!'
        },
        {
          picture: 'smile',
          title: 'Особлива підтримка для кожного 24/7',
          description: 'У вас буде свій персональний менеджер'
        },
        {
          picture: 'chart_bar',
          title: 'Детальна статистика',
          description: 'Миттєве оновлення, зрозуміла система відображення статистики'
        },
      ],
    }
  },
}
</script>

<style scoped>
.traffic__title {
  font-family: Gilroy, sans-serif;
  font-weight: 700;
  text-align: center
}

.traffic__item_title {
  color: #b1b5c3;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.5
}

.traffic__item_description {
  color: #777e90;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.71
}

@media screen and (max-width: 767px) {
  .traffic {
    padding: 0 1.5rem
  }

  .traffic__title {
    font-size: 2.5rem;
    line-height: 1
  }

  .traffic__title:not(:last-child) {
    margin-bottom: 3.5rem
  }

  .traffic__item:not(:last-child) {
    margin-bottom: 2.5rem
  }

  .traffic__item_in {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: flex-start
  }

  .traffic__pic:not(:last-child) {
    margin-right: 2.5rem
  }

  .traffic__item_title:not(:last-child) {
    margin-bottom: .5rem
  }
}

@media screen and (min-width: 768px) {
  .traffic__title {
    font-size: 3.2rem;
    line-height: 1.25
  }

  .traffic__title:not(:last-child) {
    margin-bottom: 7.5rem
  }

  .traffic__list {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: flex-start;
    margin: 0 -8.2rem -4rem 0
  }

  .traffic__item {
    padding: 0 8.2rem 4rem 0;
    width: 33.3333333333%
  }

  .traffic__pic {
    display: flex;
    justify-content: center;
  }

  .traffic__pic:not(:last-child) {
    margin-bottom: 2.5rem
  }

  .traffic__item_content {
    text-align: center
  }

  .traffic__item_title {
    margin: 0 auto;
    max-width: 25rem
  }

  .traffic__item_title:not(:last-child) {
    margin-bottom: 2.5rem
  }
}
</style>
