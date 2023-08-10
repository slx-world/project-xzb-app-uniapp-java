<template>
  <view class="boxBg headTop">
    <view class="headItem score">
      <view class="leftBox">
        <view class="scoreContent">4.7分</view>
        <view class="label">综合评分</view>
      </view>
      <view class="rightBox">
        <view class="commit">
          <view class="label">差评率</view>
          <view class="greyLine">
            <view
              class="redLine"
              :style="{ width: `${200 * 0.333}rpx` }"
            ></view>
          </view>
          <view class="num">33.3%</view>
        </view>
        <view class="commit">
          <view class="label">好评率</view>
          <view class="greyLine">
            <view
              class="redLine"
              :style="{ width: `${200 * 0.333}rpx` }"
            ></view>
          </view>
          <view class="num">33.3%</view>
        </view>
      </view>
    </view>
  </view>
</template>
<script setup>
// 时间处理
import { overTimeFormat } from '@/utils/index.js';
// 获取父组件数据
const props = defineProps({
  baseData: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<style src="./../index.scss" lang="scss" scoped></style>
