// message 格式請參考 Line develop
const msg = {
  type: 'flex',
  altText: '2020 最新優惠！',
  contents: {
    "type": "carousel",
    "contents": [
      {
        "type": "bubble",
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "image",
              "url": "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip1.jpg",
              "size": "full",
              "aspectMode": "cover",
              "gravity": "top"
            }
          ],
          "paddingAll": "0px"
        }
      },
      {
        "type": "bubble",
        "header": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "image",
              "url": "https://cf.shopee.tw/file/d958ed755e191f10f9afb3a2c710894a",
              "gravity": "center",
              "size": "full",
              "aspectRatio": "4:3",
              "aspectMode": "cover"
            }
          ],
          "paddingAll": "0px"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "contents": [],
                  "size": "xl",
                  "wrap": true,
                  "text": "Title Here",
                  "color": "#ffffff",
                  "weight": "bold"
                },
                {
                  "type": "box",
                  "layout": "baseline",
                  "contents": [
                    {
                      "type": "text",
                      "text": "$9,000",
                      "decoration": "line-through",
                      "color": "#dddddd",
                      "size": "md",
                      "flex": 0
                    },
                    {
                      "type": "text",
                      "text": "$5,699",
                      "color": "#ffffff",
                      "size": "md",
                      "flex": 0
                    }
                  ],
                  "spacing": "lg"
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "button",
                      "action": {
                        "type": "uri",
                        "label": "Go shopping",
                        "uri": "http://linecorp.com/"
                      }
                    }
                  ],
                  "backgroundColor": "#dddddd",
                  "cornerRadius": "8px"
                }
              ],
              "spacing": "sm"
            }
          ],
          "paddingAll": "20px",
          "backgroundColor": "#464F69"
        }
      },
      {
        "type": "bubble",
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "image",
              "url": "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip2.jpg",
              "size": "full",
              "aspectMode": "cover",
              "gravity": "top"
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Cony's T-shirts",
                      "size": "xl",
                      "color": "#ffffff",
                      "weight": "bold"
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "baseline",
                  "contents": [
                    {
                      "type": "text",
                      "text": "¥35,800",
                      "color": "#ebebeb",
                      "size": "sm",
                      "flex": 0
                    },
                    {
                      "type": "text",
                      "text": "¥75,000",
                      "color": "#ffffffcc",
                      "decoration": "line-through",
                      "gravity": "bottom",
                      "flex": 0,
                      "size": "sm"
                    }
                  ],
                  "spacing": "lg"
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "filler"
                    },
                    {
                      "type": "box",
                      "layout": "baseline",
                      "contents": [
                        {
                          "type": "filler"
                        },
                        {
                          "type": "icon",
                          "url": "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip14.png"
                        },
                        {
                          "type": "text",
                          "text": "Add to cart",
                          "color": "#ffffff",
                          "flex": 0,
                          "offsetTop": "-2px"
                        },
                        {
                          "type": "filler"
                        }
                      ],
                      "spacing": "sm"
                    },
                    {
                      "type": "filler"
                    }
                  ],
                  "borderWidth": "1px",
                  "cornerRadius": "4px",
                  "spacing": "sm",
                  "borderColor": "#ffffff",
                  "margin": "xxl",
                  "height": "40px"
                }
              ],
              "position": "absolute",
              "offsetBottom": "0px",
              "offsetStart": "0px",
              "offsetEnd": "0px",
              "backgroundColor": "#9C8E7Ecc",
              "paddingAll": "20px",
              "paddingTop": "18px"
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "SALE",
                  "color": "#ffffff",
                  "align": "center",
                  "size": "xs",
                  "offsetTop": "3px"
                }
              ],
              "position": "absolute",
              "cornerRadius": "20px",
              "offsetTop": "18px",
              "backgroundColor": "#ff334b",
              "offsetStart": "18px",
              "height": "25px",
              "width": "53px"
            }
          ],
          "paddingAll": "0px"
        }
      }
    ]
  }
}

export default msg