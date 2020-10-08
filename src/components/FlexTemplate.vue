<template>
  <div>
    <label>標題</label>
    <input type="text" v-model="msgObj.altText" />
    <div v-for="(item, idx) in msgObj.contents" :key="`item-${idx}`"
      :style="`background-image: url(${item.url})`"></div>
    <button @click="sendMessageToFriend">Send Message!</button>
  </div>
</template>

<script>
import liff from '@line/liff'
import messageTemplate from './msg'

export default {
  name: 'FlexTemplate',
  props: {
    msg: String
  },
  data () {
    return {
      msgLimit: 5, // 輪播式訊息的內容數量上限
      msgObj: {
        altText: '本季最新優惠',
        contents: [
          {
            type: 'image',
            url: 'https://cf.shopee.tw/file/d958ed755e191f10f9afb3a2c710894a'
          },
          {
            type: 'image',
            url: 'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip1.jpg'
          },
          {
            type: 'image',
            url: 'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip1.jpg'
          }
        ]
      }
    }
  },
  computed: {

  },
  methods: {
    // 對好友及群組發送訊息
    sendMessageToFriend () {
      // 需傳入陣列，最多 5 個子物件，每一物件即為一則 message
      liff.shareTargetPicker([messageTemplate])
    },
    // 轉成純文字儲存進 DB
    saveMessageTemplate () {
      // const msg = JSON.stringify(messageTemplate)
      // do upload
    }
  }
}
</script>

<style scoped lang="scss">

</style>
