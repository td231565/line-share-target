<template>
  <div id="app">
    <button @click="switchUserLogin">{{ isLogin ? 'logout' : 'login' }}</button>
    <FlexTemplate v-if="isLogin" />
  </div>
</template>

<script>
import liff from '@line/liff'
import FlexTemplate from './components/FlexTemplate.vue'

export default {
  name: 'App',
  components: {
    FlexTemplate
  },
  data () {
    return {
      liffId: '1654944538-wRrGzXyX',
      isLogin: false
    }
  },
  methods: {
    switchUserLogin () {
      this.isLogin ? liff.logout() : liff.login()
    },
    initLiff () {
      liff.init({ liffId: this.liffId }).then(() => {
        this.isLogin = liff.isLoggedIn()
      })
    }
  },
  created () {
    this.initLiff()
  }
}
</script>

<style lang="scss">

</style>
