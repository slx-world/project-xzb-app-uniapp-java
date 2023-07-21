<!-- 首页 -->
<template>
  <view class="home">
    <!-- 手机状态栏 -->
    <uni-nav-bar statusBar="true" backgroundColor="#F74347"></uni-nav-bar>
    <scroll-view scroll-y="true" class="scrollList" @scroll="handleScroll">
      <!-- 顶部基础配置和背景图 -->
      <view class="navFrame">
        <!-- nav -->
        <UniNav @goBack="goBack"></UniNav>
      </view>
      <!-- 首页筛选 -->
      <HomeFilter> </HomeFilter>
      <!-- 吸顶筛选 -->
      <HomeFilter :fixTop="fixTop" v-show="fixTop"> </HomeFilter>
      <!-- end -->
      <HomeList></HomeList>
    </scroll-view>

    <!-- footer -->
    <UniFooter :pagePath="'pages/index/index'"></UniFooter>
    <!-- end -->
  </view>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { onPullDownRefresh } from '@dcloudio/uni-app';
import { useStore } from 'vuex';
import { getTimeDate, positionsUploadInit } from '@/utils/index.js';
// 静态数据
import { tabBars } from '@/utils/commonData.js';
// 导入接口
import {
  getHomeInfo,
  getHomeData,
  getDeliveryList,
} from '@/pages/api/index.js';
// 导入组件
// 导航
import UniNav from '@/components/uni-home-nav/index.vue';
// 底部导航
import UniFooter from '@/components/uni-footer/index.vue';
import HomeFilter from './components/homeFilter';
import HomeList from './components/homeList';
// ------定义变量------
const fixTop = ref(false);
// ------生命周期------
onMounted(() => {});
// ------定义方法------
//下拉刷新
onPullDownRefresh(() => {
  setTimeout(function () {
    uni.stopPullDownRefresh();
  }, 1000);
  console.log('refresh');
});
// 监听滚动
const handleScroll = (e) => {
  if (e.detail.scrollTop > 188) {
    fixTop.value = true;
  } else {
    fixTop.value = false;
  }
  // console.log(e, fixTop.value, 'eeeeeeeeee');
};

// 返回上一页
const goBack = () => {
  uni.redirectTo({
    url: '/pages/index/index',
  });
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
<style lang="scss">
body {
  background: var(--color-gray-f8) !important;
}
::v-deep .uni-navbar__header {
  height: 0rpx !important;
}
</style>
