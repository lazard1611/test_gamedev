<template>
  <div class="icon_frame" :class="`${classes}`">
    <div class="icon_wrap">
      <Icon :name= "`${iconName}`"/>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon";

export default {
  name: "IconFrame",
  components: ['Icon'],
  props: {
    iconName: {
      type: String,
      required: true,
    },
    classes: {
      type: String,
      required: true,
    }
  },
}
</script>

<style scoped>

.icon_frame {
  -ms-flex-negative: 0;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 1.5rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  overflow: hidden
}

.icon_frame.yellow {
  background-color: #ffc737;
}

.icon_frame.green {
  background-color: #58bd7d;
}

.icon_frame.orange {
  background-color: #ff6838;
}

.icon_frame.gray {
  background: hsla(0, 0%, 100%, .2);
}

@media screen and (max-width: 767px) {

  .icon_frame {
    height: 4.5rem;
    width: 4.5rem
  }

  .icon_frame:not(:last-child) {
    margin-right: 2.5rem
  }

  .icon_wrap {
    height: 2.5rem;
    width: 2.5rem
  }
}

@media screen and (min-width: 768px) {

  .icon_frame:not(.icon_frame--small) {
    height: 6.5rem;
    width: 6.5rem
  }

  .icon_frame.icon_frame--small {
    height: 4.5rem;
    width: 4.5rem;
  }

  .icon_frame:not(:last-child) {
    margin-bottom: 2.5rem
  }

  .icon_wrap {
    height: 3.5rem;
    width: 3.5rem;
  }

  .icon_frame.icon_frame--small .icon_wrap {
    height: 2.5rem;
    width: 2.5rem;
  }
}
</style>
