<template>
  <!-- 公用nav -->
  <view class="navBox">
    <view class="baseSetting">
      <view
        class="item"
        :key="index"
        v-for="(item, index) in baseSetting"
        @click="handleLink(item.path)"
      >
        <image :src="item.url" class="itemImg"></image>
        <view class="itemLabel">{{ item.label }}</view>
      </view>
    </view>
    <view class="bg"></view>
  </view>
  <!-- end -->
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useStore } from 'vuex';

// ------定义变量------
const baseSetting = reactive([
  {
    label: '服务技能',
    url: '../../static/new/btn_top_fwjn@2x.png',
    path: '/pages/serviceSkill/index',
  },
  {
    label: '接单设置',
    url: '../../static/new/btn_top_jdsz@2x.png',
    path: '/pages/getOrder/index',
  },
  {
    label: '服务范围',
    url: '../../static/new/btn_top_fwfw@2x.png',
    path: '/pages/serviceRange/index',
  },
  // {
  //   label: '城市设置',
  //   url: '../../static/new/btn_top_fwjn@2x.png',
  //   path: '',
  // },
]);
// ------方法------
const handleLink = (val) => {
  uni.navigateTo({
    url: val,
  });
};
</script>
<style lang="scss" scoped>
@import url(@/styles/theme.scss);
// 导航
.navBox {
  background-image: linear-gradient(0deg, #f8f8f8 0%, #f74346 50%);
  height: 320rpx;
  .bg {
    background-image: url('../../static/new/img_baanner@2x.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 196rpx;
    width: calc(100% - 44rpx);
    margin: 0 auto;
    margin-top: 34rpx;
  }
  .baseSetting {
    display: flex;
    justify-content: space-between;
    padding: 0 74rpx;
    .item {
      text-align: center;
      margin-top: 37rpx;
      .itemImg {
        width: 56rpx;
        height: 56rpx;
      }
      .itemLabel {
        font-size: 24rpx;
        color: var(--neutral-color-white);
      }
    }
  }
}
</style>
