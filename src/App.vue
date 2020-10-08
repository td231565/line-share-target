<template>
  <div id="app">
    <div class="state-bar">
      <span class="mr-1">{{ isLogin ? 'already login' : 'please login' }}</span>
      <span v-if="isLoading">讀取中，請稍後</span>
      <button class="state-bar__button"
        @click="switchUserLogin">{{ isLogin ? 'logout' : 'login' }}</button>
    </div>
    <FlexTemplate class="p-2" v-if="isLogin" />
    <h2 v-else>Please login</h2>
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
      isLoading: false,
      liffId: '1654944538-wRrGzXyX',
      isLogin: true
    }
  },
  methods: {
    async switchUserLogin () {
      this.isLoading = true
      await this.isLogin ? liff.logout() : liff.login()
      this.isLogin = !this.isLogin
      this.isLoading = false
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
@import './assets/style.scss';
</style>
