<!-- 服务技能 -->
<template>
  <view class="serveRecord">
    <!-- nav -->
    <UniNav :title="title" @goBack="goBack"></UniNav>
    <view class="img card">
      <view class="title">服务前照片</view>
      <uni-file-picker limit="3" title="最多上传3张图片"></uni-file-picker>
    </view>
    <view class="remark card">
      <view class="title">补充说明</view>
      <textarea
        @input="handleInput"
        :value="remark"
        :maxlength="50"
        placeholder-style="color:#F76260"
        placeholder="请输入对本次服务前的其他说明补充"
      />
      <view class="limit">
        <text class="min">{{ remark.length }}</text
        >/<text class="max">{{ 50 - remark.length }}</text>
      </view>
    </view>
    <!-- 底部按钮 -->
    <view class="footer">
      <view class="btn-red" @click="handleSubmit">确认提交</view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { getUserSetting, setPickUpStatus } from '../api/setting.js';
import { onShow } from '@dcloudio/uni-app';
// 导航组件
import UniNav from '@/components/uni-nav/index.vue';
const canPickUp = ref(false); //是否开启接单
const title = ref('开始服务');
const remark = ref('');
onShow(() => {});
const handleInput = (e) => {
  remark.value = e.detail.value;
  console.log(e.detail.value, '-----');
};
// 返回上一页
const goBack = () => {
  uni.navigateBack();
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
