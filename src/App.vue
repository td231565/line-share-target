<template>
  <div id="app">
    <p>
      {{ isLogin ? 'already login' : 'please login' }}
      <span v-if="isLogin">讀取中，請稍後</span>
    </p>
    <button @click="switchUserLogin">{{ isLogin ? 'logout' : 'login' }}</button>
    <FlexTemplate class="mt-4" v-if="isLogin" />
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
      isLogin: false
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
