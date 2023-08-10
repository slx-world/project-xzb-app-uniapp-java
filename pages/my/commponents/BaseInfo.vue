<template>
  <view class="nav-bg mnav-bg">
    <view class="headBg"></view>
    <view class="header">
      <view class="headBox">
        <view class="head"
          ><icon v-if="baseData.avatar === ''"></icon
          ><image
            :src="baseData.avatar || '../../../static/new/empty.png'"
            v-else
          ></image
        ></view>
        <view class="info">
          <view class="tit">{{ baseData.name || '吴彦祖' }}</view>
          <view class="account">{{ baseData.account || '177 9987 8876' }}</view>
        </view>
      </view>
    </view>
  </view>
</template>
<script setup>
// 获取父组件数据
const props = defineProps({
  baseData: {
    type: Object,
    default: () => ({}),
  },
});
// ------定义方法------
// 二维码暂时不做
const handleQr = () => {
  // TODO暂时保留
  // uni.navigateTo({
  // 	url:'/pages/my/qrCode'
  // })
  uni.showToast({
    title: '程序员哥哥正在实现中',
    duration: 1000,
    icon: 'none',
  });
};
</script>
<style src="./../index.scss" lang="scss" scoped></style>
