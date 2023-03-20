<template>
  <div class="main_decor__wrap">
    <div class="main_decor main_decor--pos_1_mod">
      <img class="main_decor__img" src="../assets/images/main_decor_1.svg" alt="decor">
    </div>
    <div class="main_decor main_decor--pos_2_mod">
      <img class="main_decor__img" src="../assets/images/main_decor_2.svg" alt="decor">
    </div>
    <div class="main_decor main_decor--pos_3_mod">
      <img class="main_decor__img" src="../assets/images/main_decor_3.svg" alt="decor">
    </div>
    <div class="main_decor main_decor--pos_4_mod">
      <img class="main_decor__img" src="../assets/images/main_decor_4.svg" alt="decor">
    </div>
    <div class="main_decor main_decor--pos_5_mod">
      <img class="main_decor__img" src="../assets/images/main_decor_5.svg" alt="decor">
    </div>
    <div class="main_decor main_decor--pos_6_mod">
      <img class="main_decor__img" src="../assets/images/main_decor_6.svg" alt="decor">
    </div>
  </div>

</template>

<script>
export default {
name: "MainDecor"
}
</script>

<style scoped>

.main_decor {
  opacity: .4;
  position: absolute
}

.main_decor__img {
  display: block;
  height: 100%;
  -o-object-fit: contain;
  object-fit: contain;
  width: 100%
}

.main_decor.main_decor--pos_1_mod {
  z-index: -1
}

.main_decor.main_decor--pos_2_mod {
  z-index: -2
}

.main_decor.main_decor--pos_3_mod {
  z-index: -3
}

.main_decor.main_decor--pos_4_mod {
  z-index: -1
}

.main_decor.main_decor--pos_5_mod {
  z-index: -3
}

.main_decor.main_decor--pos_6_mod {
  z-index: -2
}

@media screen and (min-width: 768px) {
  .main_decor.main_decor--pos_1_mod {
    height: 34.2rem;
    right: -30.3rem;
    top: 23rem;
    width: 43.8rem
  }

  .main_decor.main_decor--pos_2_mod {
    height: 26.3rem;
    right: -25rem;
    top: 41.5rem;
    width: 33.7rem
  }

  .main_decor.main_decor--pos_3_mod {
    height: 38rem;
    right: -37rem;
    top: 31.4rem;
    width: 49.7rem
  }

  .main_decor.main_decor--pos_4_mod {
    bottom: 1rem;
    height: 21.4rem;
    left: -10rem;
    -webkit-transform: matrix(-1, -.06, .07, -1, 0, 0);
    transform: matrix(-1, -.06, .07, -1, 0, 0);
    width: 27.4rem
  }

  .main_decor.main_decor--pos_5_mod {
    bottom: -6rem;
    height: 23.7rem;
    left: -9.8rem;
    width: 31.1rem
  }

  .main_decor.main_decor--pos_6_mod {
    bottom: -3rem;
    height: 16.5rem;
    left: -8.4rem;
    -webkit-transform: matrix(.97, .24, -.29, .96, 0, 0);
    transform: matrix(.97, .24, -.29, .96, 0, 0);
    width: 21.1rem
  }

  .main_decor {
    -webkit-filter: blur(10rem);
    filter: blur(10rem)
  }
}

@media screen and (max-width: 767px) {
  .main_decor.main_decor--pos_1_mod {
    height: 10.7rem;
    right: -9rem;
    top: 19.1rem;
    width: 12.8rem
  }

  .main_decor.main_decor--pos_2_mod {
    height: 8.2rem;
    right: -7rem;
    top: 24.5rem;
    width: 10rem
  }

  .main_decor.main_decor--pos_3_mod {
    height: 11.9rem;
    right: -11rem;
    top: 21.6rem;
    width: 14.6rem
  }

  .main_decor.main_decor--pos_4_mod {
    bottom: 44.5%;
    height: 10.7rem;
    left: -4rem;
    width: 13.7rem
  }

  .main_decor.main_decor--pos_5_mod {
    bottom: 41%;
    height: 11.9rem;
    left: -3.8rem;
    width: 15.6rem
  }

  .main_decor.main_decor--pos_6_mod {
    bottom: 42%;
    height: 8.2rem;
    left: -2.4rem;
    width: 10.6rem
  }

  .main_decor {
    -webkit-filter: blur(5rem);
    filter: blur(5rem)
  }
}

</style>
