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
  </view>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { useStore } from 'vuex';
// 设置字符串的长度
import { validateTextLength } from '@/utils/index.js';
import { cancelData } from '@/utils/commonData.js';
// 导入组件
// 导航组件
import UniNav from '@/components/uni-nav/index.vue';
// ------定义变量------
const title = ref('取消原因'); //nav标题
const cancelReason = ref('');
let cancel = ref(null); //原因描述

// ------生命周期------
onMounted(() => {});
// ------定义方法------
// 取消订单原因选择
const handleCause = (value) => {
  cancel.value = value;
  console.log(value, '----------');
};
// 提交原因申请
const handleSubmit = async () => {
  // if (reason !== '') {
  //   // 网络慢的时候添加按钮loading
  //   let times = setTimeout(() => {
  //     uni.showLoading({
  //       title: 'loading',
  //     });
  //   }, 500);
  //   const params = {
  //     id: taskId,
  //     // reason: users.reasonVal.value,
  //     reasonDesc: reasonDesc.value,
  //   };
  //   await taskCancel(params).then((res) => {
  //     store.commit('user/setTabIndex', 0);
  //     uni.redirectTo({
  //       url: '/pages/pickup/index',
  //     });
  //     if (res.code === 200) {
  //       // 操作成功后清除loading
  //       setTimeout(function () {
  //         uni.hideLoading();
  //       }, 500);
  //       clearTimeout(times);
  //       goBack();
  //       return uni.showToast({
  //         title: '申请成功!',
  //         duration: 1000,
  //         icon: 'none',
  //       });
  //     }
  //   });
  // } else {
  //   return uni.showToast({
  //     title: '请选择取消原因!',
  //     duration: 1000,
  //     icon: 'none',
  //   });
  // }
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
</style>
