<template>
  <div>
    <label>標題</label>
    <input type="text" v-model="msgData.altText" />
    <div v-for="(item, idx) in msgData.contents" :key="`item-${idx}`"
      :style="`background-image: url(${item.url})`"></div>
    <button @click="sendMessageToFriend">Send Message!</button>
  </div>
</template>

<script>
import liff from '@line/liff'

export default {
  name: 'FlexTemplate',
  props: {
    msg: String
  },
  data () {
    return {
      msgLimit: 5, // 輪播式訊息的內容數量上限
      msgData: {
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
    resultMsgTemplate () {
      let msg = {
        type: 'flex',
        altText: this.msgData.altText
      }
      msg.contents = this.msgData.contents.map(item => {
        let contentMsg = {}
        if (item.type === 'image') {
          // 產生圖片 bubble
          contentMsg = {
            type: 'bubble',
            body: {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'image',
                  url: item.url,
                  size: 'full',
                  aspectMode: 'cover',
                  gravity: 'top'
                }
              ],
              paddingAll: '0px'
            }
          }
        } else {
          // 產生結尾 bubble
        }
        return contentMsg
      })
      return msg
    }
  },
  methods: {
    // 對好友及群組發送訊息
    sendMessageToFriend () {
      // 需傳入陣列，最多 5 個子物件，每一物件即為一則 message
      liff.shareTargetPicker([this.resultMsgTemplate])
    },
    // 轉成純文字儲存進 DB
    saveMessageTemplate () {
      // const msg = JSON.stringify(this.msgData)
      // do upload
    }
  }
}
</script>

<style scoped lang="scss">

</style>
