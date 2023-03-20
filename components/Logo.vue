<template>
  <a href="#" class="logo">
    <img class="logo__img" src="../assets/images/logo.svg" alt="logo">
  </a>
</template>

<script>
export default {
name: "Logo"
}
</script>

<style scoped>
.logo__img {
  display: block;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%
}

.logo {
  display: block;
}

@media screen and (min-width: 768px) {
  .logo {
    width: 22.2rem
  }
}

@media screen and (max-width: 767px) {
  .logo {
    margin-right: 2rem;
    width: 14.8rem
  }
}
</style>
