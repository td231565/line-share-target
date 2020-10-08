<template>
  <div>
    <div class="form-item">
      <label>訊息標題</label>
      <input type="text" v-model="msgData.altText" />
    </div>
    <section class="msg__container">
      <ul class="msg__tab mr-2" @drop="setDragItem" @dragover.prevent @dragenter.prevent>
        <li v-for="(m, i) in msgData.contents" :key="i"
          draggable
          @dragstart="getDragIndex(i)"
          @dragover.prevent="getDragoverIndex(i)"
          @click="currentMsgIndex = i"
          class="msg__tab__item"
          :class="{ 'msg__tab__item--active': i === currentMsgIndex }">{{ i + 1 }}</li>
      </ul>
      <SingleMessage :msg="currentMessageObj" />
    </section>
    <button class="mt-3" @click="sendMessageToFriend">Send Message!</button>
  </div>
</template>

<script>
import SingleMessage from './SingleMessage'

export default {
  name: 'FlexTemplate',
  components: {
    SingleMessage
  },
  props: {
    msg: String
  },
  data () {
    return {
      currentMsgIndex: 0,
      dragItemIndex: 0,
      dragOverItemIndex: 0,
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
    currentMessageObj () {
      return this.msgData.contents[this.currentMsgIndex]
    },
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
    getDragoverIndex (idx) {
      this.dragOverItemIndex = idx
    },
    getDragIndex (idx) {
      this.dragItemIndex = idx
    },
    setDragItem () {
      const dragItem = this.msgData.contents.splice(this.dragItemIndex, 1)[0]
      this.msgData.contents.splice(this.dragOverItemIndex, 0, dragItem)
      this.currentIndex = this.dragOverItemIndex
    },
    // 對好友及群組發送訊息
    sendMessageToFriend () {
      this.$emit('shareMessage', this.resultMsgTemplate)
    },
    // 轉成純文字儲存進 DB
    saveMessageTemplate () {
      // const msg = JSON.stringify(this.msgData)
      // do upload
      // 預計使用 fire store
    }
  }
}
</script>

<style scoped lang="scss">

</style>
