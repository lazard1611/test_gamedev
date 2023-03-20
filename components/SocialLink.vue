<template>
  <a class="social_link" :href="`${url ? url : '#'}`">
    <div class="social_link__icon">
      <Icon :name="`${name}`"/>
    </div>
  </a>
</template>

<script>
export default {
  name: "SocialLink",
  props: {
    name: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: false,
    }
  }
}
</script>

<style scoped>
.social_link {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;

  -ms-flex-negative: 0;
  border-radius: 100%;
  flex-shrink: 0;
  height: 4.5rem;
  overflow: hidden;
  -webkit-transition: background-color .3s ease;
  transition: background-color .3s ease;
  width: 4.5rem
}

.social_link:not(:last-child) {
  margin-right: 1rem
}

.social_link:focus,
.social_link:hover {
  background-color: #353945
}

.social_link__icon {
  height: 2.5rem;
  width: 2.5rem
}

</style>
