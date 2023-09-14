"use strict";
const common_vendor = require("../../../common/vendor.js");
const utils_commonData = require("../../../utils/commonData.js");
if (!Array) {
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_rate2 + _easycom_uni_popup2)();
}
const _easycom_uni_rate = () => "../../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_popup = () => "../../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_rate + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "homeList",
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  emits: ["refresh"],
  setup(__props, { emit }) {
    const alertDialog = common_vendor.ref(null);
    const store = common_vendor.useStore();
    const user = store.state.user;
    const emojiShow = common_vendor.ref(false);
    const input = common_vendor.ref(null);
    const focus = common_vendor.ref(true);
    const inputValue = common_vendor.ref("");
    common_vendor.onMounted(() => {
    });
    const keyBoardHeight = common_vendor.ref("");
    let list = common_vendor.reactive({
      data: [
        {
          reply: {
            content: "感谢你的肯定，您的满意就是我们的追求",
            time: "2022.07.12  18:08"
          },
          orderInfo: {
            id: "7364734677776",
            time: "2026.5.26 12:30",
            address: "北京市昌平区红旗大街124号五星大厦19层109室4号五星大厦19层109室",
            imgUrl: "https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/3b59ab0c-59fc-4c96-a645-eda33696204b.png"
          },
          imgUrl: [
            "https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/3b59ab0c-59fc-4c96-a645-eda33696204b.png",
            "https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/3b59ab0c-59fc-4c96-a645-eda33696204b.png"
          ],
          headUrl: "https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/3b59ab0c-59fc-4c96-a645-eda33696204b.png",
          nickName: "戴龙",
          score: 4,
          content: "按时上门,打扫非常干净,态度极佳,技能专业,效果超出预期。师傅清洗得非常千净，动作麻利。",
          time: "2022.07.12  18:08"
          // serveStartTime: '2023-7-28 11:48:00',
          // serveAddress: '金燕龙',
          // serveFee: '666',
        },
        {
          reply: {
            content: "感谢你的肯定，您的满意就是我们的追求",
            time: "2022.07.12  18:08"
          },
          orderInfo: {
            id: "7364734677776",
            time: "2026.5.26 12:30",
            address: "北京市昌平区红旗大街124号五星大厦19层109室4号五星大厦19层109室",
            imgUrl: "https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/3b59ab0c-59fc-4c96-a645-eda33696204b.png"
          },
          imgUrl: [
            "https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/3b59ab0c-59fc-4c96-a645-eda33696204b.png",
            "https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/3b59ab0c-59fc-4c96-a645-eda33696204b.png"
          ],
          headUrl: "https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/3b59ab0c-59fc-4c96-a645-eda33696204b.png",
          nickName: "戴龙",
          score: 4,
          content: "按时上门,打扫非常干净,态度极佳,技能专业,效果超出预期。师傅清洗得非常千净，动作麻利。",
          time: "2022.07.12  18:08"
          // serveStartTime: '2023-7-28 11:48:00',
          // serveAddress: '金燕龙',
          // serveFee: '666',
        }
      ]
    });
    const handleHideKeyBoard = () => {
      if (!emojiShow.value) {
        common_vendor.index.hideKeyboard();
        focus.value = false;
      } else {
        focus.value = true;
      }
      emojiShow.value = !emojiShow.value;
    };
    const handleSubmit = () => {
      console.log("提交了");
      if (!inputValue.value.length) {
        return;
      } else {
        alertDialog.value.close();
      }
    };
    const handleClickEmoji = (item) => {
      inputValue.value = inputValue.value + item;
    };
    const handleBlur = () => {
      console.log(input.value, "----------");
    };
    const handleFocus = () => {
      emojiShow.value = false;
    };
    const handleReply = () => {
      alertDialog.value.open();
      focus.value = true;
      common_vendor.index.onKeyboardHeightChange((res) => {
        console.log("键盘高度变化12：", user.keyBoardHeight, res.height);
        keyBoardHeight.value = user.keyBoardHeight || res.height;
        store.commit("user/setKeyBoardHeight", user.keyBoardHeight || res.height);
      });
    };
    const handleToInfo = (item) => {
      console.log(item, "进入详情");
      common_vendor.index.navigateTo({
        url: "/pages/orderInfo/index?id=" + item.id
      });
    };
    common_vendor.watchEffect(() => {
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(list).data, (item, k0, i0) => {
          return common_vendor.e({
            a: item.headUrl,
            b: common_vendor.t(item.nickName),
            c: "72f12c67-0-" + i0,
            d: common_vendor.p({
              readonly: true,
              value: item.score,
              margin: 5,
              color: "#D2DBE7",
              ["active-color"]: "#F74347"
            }),
            e: common_vendor.t(item.score),
            f: common_vendor.t(item.content),
            g: common_vendor.t(item.time),
            h: common_vendor.o(handleReply, item.id),
            i: item.imgUrl.length
          }, item.imgUrl.length ? {
            j: common_vendor.f(item.imgUrl, (item1, index, i1) => {
              return {
                a: item1,
                b: index
              };
            })
          } : {}, {
            k: item.orderInfo.imgUrl,
            l: common_vendor.t(item.orderInfo.id),
            m: common_vendor.t(item.orderInfo.time),
            n: common_vendor.t(item.orderInfo.address),
            o: common_vendor.t(item.reply.content),
            p: common_vendor.t(item.reply.time),
            q: item.id,
            r: common_vendor.o(($event) => handleToInfo(item), item.id)
          });
        }),
        b: focus.value,
        c: common_vendor.o(handleFocus),
        d: common_vendor.o(handleBlur),
        e: inputValue.value,
        f: common_vendor.o(($event) => inputValue.value = $event.detail.value),
        g: `${emojiShow.value ? "../../../static/new/btn_wenzi@2x.png" : "../../../static/new/btn_biaoqing@2x.png"}`,
        h: common_vendor.o(handleHideKeyBoard),
        i: !inputValue.value.length,
        j: common_vendor.n(!inputValue.value.length ? "disabled" : ""),
        k: common_vendor.o(handleSubmit),
        l: `${keyBoardHeight.value}px`,
        m: common_vendor.f(common_vendor.unref(utils_commonData.ImgList), (item, key, i0) => {
          return {
            a: common_vendor.t(item),
            b: key,
            c: common_vendor.o(($event) => handleClickEmoji(item), key)
          };
        }),
        n: `${keyBoardHeight.value}px`,
        o: common_vendor.sr(alertDialog, "72f12c67-1", {
          "k": "alertDialog"
        }),
        p: common_vendor.p({
          type: "bottom",
          ["is-mask-click"]: true
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/project/小智帮/project-xzb-app-uniapp-java（服务端）/pages/evaluate/components/homeList.vue"]]);
wx.createComponent(Component);
