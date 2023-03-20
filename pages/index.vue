<template>
  <Hero/>
  <Traffic/>
</template>

<script>
import MainDecor from "~/components/MainDecor.vue"
import Hero from "~/components/Hero.vue"
import Traffic from "~/components/Traffic.vue"

export default {
  name: "index",
  components: { Hero, Traffic}
}
</script>

<style scoped>

</style>
