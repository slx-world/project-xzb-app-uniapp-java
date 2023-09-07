<!-- 订单取消原因申请 -->
<template>
  <view class="cancel">
    <!-- 自定义头部 -->
    <UniNav :title="title" @goBack="goBack"></UniNav>
    <!-- end -->
    <view class="pageBox">
      <view class="boxCon concelBox">
        <view class="tabConList">
          <view class="item" :key="index" v-for="(item, index) in cancelData">
            <text>{{ item.label }}</text>
            <view class="cause">
              <radio
                color="#F74347"
                style="transform: scale(0.7)"
                value="r1"
                :checked="item.value === cancel"
                @click="handleCause(item.value)"
              />
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- 底部按钮 -->
    <view class="footer">
      <view class="btn-red" @click="handleSubmit">确认提交</view>
    </view>
    <!-- 提示窗示例 -->
    <uni-popup ref="alertDialog" type="bottom" :is-mask-click="false">
      <button class="phone-button" @click="makePhoneCall">
        呼叫 400-000-4000
      </button>
      <button class="phone-button" @click="handleClose">取消</button>
    </uni-popup>
    <!-- 提示窗提示无法取消 -->
    <uni-popup ref="noCancelDialog" :is-mask-click="false" class="freeze">
      <uni-popup-dialog
        mode="base"
        content="当前不可自行取消订单，如需取消需拨打客服热线400-000-4000"
        title=" "
        :animation="false"
        :before-close="true"
        confirmText="联系客服"
        cancelText="我知道了"
        @close="close"
        @confirm="openPhone"
      >
        <template #default>
          <view class="cancelDialog">
            {{ content }}
          </view>
        </template>
      </uni-popup-dialog>
    </uni-popup>
  </view>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { cancelOrder, rejectOrder } from '../api/order';
import { onLoad } from '@dcloudio/uni-app';
// 设置字符串的长度
import { validateTextLength } from '@/utils/index.js';
import { cancelData } from '@/utils/commonData.js';
// 导入组件
// 导航组件
import UniNav from '@/components/uni-nav/index.vue';
// ------定义变量------
const title = ref('取消原因'); //nav标题
const alertDialog = ref(null); //提示窗
const noCancelDialog = ref(null); //不可取消提示框
const content = ref(''); //取消失败弹窗提示语
let cancel = ref(null); //原因描述
const orderId = ref('');
const from = ref('');

// ------生命周期------
onLoad((options) => {
  orderId.value = options.id;
  from.value = options.type;
  title.value = from.value === 'dispatch' ? '拒单原因' : '取消原因';
  console.log(options, '取消订单');
});
// ------定义方法------
// 取消订单原因选择
const handleCause = (value) => {
  cancel.value = value;
  console.log(value, '----------');
};
//打开拨打电话弹窗
const openPhone = () => {
  alertDialog.value.open();
  close();
};
//关闭删除确认提示框
const close = () => {
  noCancelDialog.value.close();
};
const handleClose = () => {
  alertDialog.value.close();
};
// 拨打电话
const makePhoneCall = () => {
  uni.makePhoneCall({
    phoneNumber: '400-000-4000', //仅为示例，并非真实的电话号码
  });
};
//确认提交
const handleSubmit = () => {
  if (from.value === 'dispatch') {
    handleRejectSubmit();
  } else {
    handleCancelSubmit();
  }
};
// 提交取消原因申请
const handleCancelSubmit = async () => {
  if (cancel.value) {
    // 网络慢的时候添加按钮loading
    uni.showLoading({
      title: 'loading',
    });

    const params = {
      id: orderId.value,
      cancelReason: cancelData.filter((item) => item.value === cancel.value)[0]
        .label,
    };
    await cancelOrder(params)
      .then((res) => {
        console.log(res, 'fuckkkkkk');
        if (res.code === 200) {
          // 操作成功后清除loading
          setTimeout(function () {
            uni.hideLoading();
          }, 500);
          clearTimeout(times);
          if (from.value === 'list') {
            goBack();
          } else {
            uni.navigateTo({
              url:
                '/pages/orderInfo/index?id=' +
                orderId.value +
                '&type=' +
                'info',
            });
          }
          cancel.value = '';
          orderId.value = '';

          return uni.showToast({
            title: '取消成功!',
            duration: 1000,
            icon: 'none',
          });
        } else {
          uni.hideLoading();
          return uni.showToast({
            title: res.msg || '请求失败',
            duration: 1000,
            icon: 'none',
          });
        }
      })
      .catch((err) => {
        uni.hideLoading();
        if (err.code == 607) {
          noCancelDialog.value.open();
          content.value = err.msg || '取消失败';
        } else {
          uni.showToast({
            title: err.msg || '请求失败',
            duration: 1000,
            icon: 'none',
          });
        }
      });
  } else {
    return uni.showToast({
      title: '请选择取消原因!',
      duration: 1000,
      icon: 'none',
    });
  }
};
//提交拒单
const handleRejectSubmit = async () => {
  if (cancel.value) {
    // 网络慢的时候添加按钮loading
    uni.showLoading({
      title: 'loading',
    });
    const params = {
      id: orderId.value,
      rejectReason: cancelData.filter((item) => item.value === cancel.value)[0]
        .label,
    };
    await rejectOrder(params)
      .then((res) => {
        console.log(res, 'res');
        if (res.code === 200) {
          // 操作成功后清除loading
          uni.hideLoading();
          if (from.value === 'list' || from.value === 'dispatch') {
            goBack();
          } else {
            uni.navigateTo({
              url:
                '/pages/orderInfo/index?id=' +
                orderId.value +
                '&type=' +
                'info',
            });
          }
          cancel.value = '';
          orderId.value = '';

          return uni.showToast({
            title: '拒单成功!',
            duration: 1000,
            icon: 'none',
          });
        }
      })
      .catch((err) => {
        uni.hideLoading();
        return uni.showToast({
          title: err.msg || '请求失败',
          duration: 1000,
          icon: 'none',
        });
      });
  } else {
    return uni.showToast({
      title: '请选择拒绝原因!',
      duration: 1000,
      icon: 'none',
    });
  }
};

// 返回上一页
const goBack = () => {
  uni.navigateBack();
};
</script>
<style src="../../styles/expressage.scss" lang="scss" scoped></style>
<style lang="scss" scoped>
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 186rpx;
  background: #ffffff;
  box-shadow: 0 0 12rpx 0 #0000001a;
  display: flex;
  font-size: 32rpx;
  justify-content: center;
  .btn-red {
    height: 88rpx;
    width: 408rpx;
    background-color: var(--color-red-bg);
    color: var(--neutral-color-white);
    border-radius: 50rpx;
    text-align: center;
    line-height: 88rpx;
    margin-top: 30rpx;
  }
}
.phone-button {
  width: 720rpx;
  height: 112rpx;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 24rpx;
  font-size: 36rpx;
  font-weight: 500;
  margin-bottom: 20rpx;
  color: #f74c50;
  line-height: 112rpx;
  &:last-child {
    color: #151515;
  }
}
:deep(.uni-popup-dialog) {
  font-weight: 400;
  font-size: 32rpx;
  color: #151515;
  letter-spacing: 0.36rpx;
  width: 556rpx;
  .uni-dialog-title {
    display: none;
  }
  .cancelDialog {
    text-align: center;
  }
  .uni-dialog-content {
    padding: 49rpx 83rpx;
  }
}
</style>
