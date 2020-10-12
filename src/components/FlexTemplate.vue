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
            url: 'https://cf.shopee.tw/file/d958ed755e191f10f9afb3a2c710894a',
            action: 'https://shopee.tw/%E6%96%B0%E8%89%B2%E4%B8%8A%E5%B8%82-%E7%8F%BE%E8%B2%A8%EF%BD%9CLuMi%F0%9F%92%84-Maybelline-%E5%AA%9A%E6%AF%94%E7%90%B3-%E8%B6%85%E6%8C%81%E4%B9%85%E9%9C%A7%E6%84%9F%E6%B6%B2%E6%85%8B%E5%94%87%E8%86%8F-%E9%9C%A7%E9%9D%A2%E5%94%87%E9%87%89-Catie%E5%B0%8F%E7%B1%B3-i.94902627.2813807242'
          },
          {
            type: 'image',
            url: 'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip1.jpg'
          }
        ],
        // 結尾頁單獨拉出
        endPage: {
          url: 'https://cf.shopee.tw/file/d958ed755e191f10f9afb3a2c710894a',
          action: {
            text: 'Go Shopping!',
            uri: 'https://shopee.tw/lulumibeauty'
          }
        }
      }
    }
  },
  computed: {
    currentMessageObj () {
      return this.msgData.contents[this.currentMsgIndex]
    },
    resultMsgTemplate () {
      const contentFunctions = {
        image: this.createImageTemplateByData,
        end: this.createImageTemplateByData
      }
      return {
        type: 'flex',
        altText: this.msgData.altText,
        contents: {
          type: 'carousel',
          contents: this.msgData.contents.map(item => {
            let contentMsg = contentFunctions[item.type]
            return contentMsg(item)
          })
        }
      }
    }
  },
  methods: {
    createImageTemplateByData (itemData) {
      const imgTemplate = {
        type: 'bubble',
        header: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'image',
              url: itemData.url,
              size: 'full',
              aspectMode: 'cover',
              gravity: 'top'
            }
          ],
          paddingAll: '0px'
        }
      }
      if (itemData.action) {
        imgTemplate.header.contents[0].action = {
          type: 'uri',
          label: 'action',
          uri: 'http://linecorp.com/'
        }
      }
      return imgTemplate
    },
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
  },
  created () {
  }
}
</script>

<style scoped lang="scss">

</style>
