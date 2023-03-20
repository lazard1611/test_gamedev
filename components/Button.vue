<template>
  <a v-if="link" class="btn" :href="`${url ? url : '#'}`" :class="`${classes}`">
    {{ label }}
  </a>
  <button v-if="btn" class="btn" :class="`${classes}`" :id="`${id}`" type="submit">{{ label }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    btn: {
      type: Boolean
    },
    link: {
      type: Boolean
    },
    label: {
      type: String,
      required: true,
    },
    classes: {
      type: String,
      required: true,
    },
    url: {
      type: String,
    },
    id: {
      type: String,
      required: false,
    }
  },
}
</script>

<style scoped>
</style>
