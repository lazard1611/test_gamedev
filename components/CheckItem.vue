<template>
  <div class="check_item">
    <div class="check_item__pic">
      <IconFrame iconName="check" classes="icon_frame--small gray"/>
    </div>
    <div class="check_item__text">
      <div class="check_item__text_title">{{title}}</div>
      <div class="check_item__text_descrip">{{description}}</div>
    </div>
  </div>
</template>

<script>
import IconFrame from "~/components/IconFrame.vue";

export default {
  name: "CheckItem",
  components: ['IconFrame'],
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped>

.check_item {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex
}

.check_item__pic {
  border-radius: 100%;
  flex-shrink: 0;
  overflow: hidden;
}

.check_item__pic:not(:last-child) {
  margin-right: 2.5rem
}

.check_item__text_title {
  font-family: Gilroy, sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.14
}

.check_item__text_descrip {
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.7
}
</style>
