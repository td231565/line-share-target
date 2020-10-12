<template>
  <div class="msg__item">
    <div class="msg__item__image mr-2">
      <div :style="`background-image: url(${msg.url})`" class="msg__item__image"></div>
    </div>
    <div class="msg__item__main">
      <div class="form-item">
        <label class="mr-1">圖片網址</label>
        <input type="text" v-model.trim="msg.url" />
      </div>
      <div class="form-item">
        <input type="checkbox" name="使用連結" id="" v-model="isLinkAction" />
        <label>使用連結</label>
      </div>
      <div class="form-item" v-if="isLinkAction">
        <label class="mr-1">連結網址</label>
        <input type="text" v-model.trim="msg.action" />
      </div>
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
      isLinkAction: false
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
