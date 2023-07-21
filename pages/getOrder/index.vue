<!-- 服务技能 -->
<template>
  <view class="serviceSkill">
    <!-- nav -->
    <UniNav title="接单设置" @goBack="goBack"></UniNav>
    <view class="switchBox">
      <text>开启接单</text>
      <switch color="#F74347" style="transform: scale(0.7)"></switch>
    </view>
  </view>
</template>

<script setup>
import { ref, reactive } from 'vue';
// 导航组件
import UniNav from '@/components/uni-nav/index.vue';
// 返回上一页
const goBack = () => {
  uni.redirectTo({
    url: '/pages/index/index',
  });
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
