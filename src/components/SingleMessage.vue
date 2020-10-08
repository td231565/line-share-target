<template>
  <div>
    <div :style="`background-image: url(${msg.url})`" class="msg__item__image"></div>
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
