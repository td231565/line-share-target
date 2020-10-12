<template>
  <div>
    <div class="image">
      <div :style="`background-image: url(${msg.url})`" class="msg__item__image"></div>
    </div>
    <div class="main">
      <label for="">圖片網址</label>
      <input type="text" v-model.trim="msg.url">
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleMessage',
  props: {
    msg: {
      type: Object
    }
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  mounted () {
  },
  created () {
  }
}
</script>

<style lang='scss' scoped>

</style>
