<!--  -->
<template>
  <view class="authFail">
    <!-- 导航 -->
    <UniNav :title="title" @goBack="goBack"></UniNav>
    <image class="bImg" src="../../static/new/img_weitongguo@2x.png"></image>
    <view class="content">提交的认证审核末通过</view>
    <view class="content">原因：提交内容重复</view>
    <view class="btn-red" @click="toAuth">重新认证</view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
// 导入组件
// 导航组件
import UniNav from '@/components/uni-nav/index.vue';
const title = ref('实名认证');
// 返回上一页
const goBack = () => {
  uni.navigateBack();
};
const toAuth = () => {
  uni.navigateTo({
    url: '/pages/auth/index',
  });
};
</script>
<style scoped src="./index.scss"></style>
