<template>
  <view class="empty">
    <view class="image"></view>
    <!-- <image class="aimage" src="../../static/new/empty.png"></image> -->
    <view class="content">暂无相关内容哦～</view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
// 获取父组件数据
const props = defineProps({});
// ------定义变量------
const emit = defineEmits(); //子组件向父组件事件传递
</script>
<style lang="scss" scoped>
.empty {
  .content {
    font-size: 26rpx;
    color: var(--color-black-15);
  }
  .image {
    width: 320rpx;
    height: 288rpx;
    background-image: url('../../static/new/empty.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 114rpx !important;
    margin-bottom: 43rpx !important;
  }
}
</style>
