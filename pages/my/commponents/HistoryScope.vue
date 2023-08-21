<template>
  <view class="boxBg">
    <view class="headItem">
      <view class="item" @click="handleHistory">
        <text>我的评价</text>
        <text><icon class="nextIcon"></icon></text>
      </view>
      <view class="item" @click="handleAccount">
        <text>账户设置</text>
        <text><icon class="nextIcon"></icon></text>
      </view>
    </view>
  </view>
</template>
<script setup>
import { useStore } from 'vuex';
const store = useStore(); //vuex获取储存数据
// ------定义方法------
// 账户设置
const handleAccount = () => {
  uni.navigateTo({
    url: '/pages/account/index',
  });
};
// 我的评价
const handleHistory = () => {
  // store.commit('user/setTabIndex', 0);
  // store.commit('user/setTaskStatus', -1);
  uni.navigateTo({
    url: '/pages/evaluate/index',
  });
};
</script>
<style src="./../index.scss" lang="scss" scoped></style>
