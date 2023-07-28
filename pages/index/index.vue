<!-- 首页 -->
<template>
  <view class="home">
    <!-- 手机状态栏 -->
    <uni-nav-bar statusBar="true" backgroundColor="#F74347"></uni-nav-bar>
    <scroll-view
      :scroll-y="icCanScroll"
      class="scrollList"
      @scroll="handleScroll"
    >
      <!-- 顶部基础配置和背景图 -->
      <view class="navFrame">
        <!-- nav -->
        <UniNav @goBack="goBack"></UniNav>
      </view>
      <!-- 首页筛选 -->
      <HomeFilter
        @handleCanScroll="handleCanScroll"
        :homeFilterList="homeFilterList.data"
        @getList="getList"
      >
      </HomeFilter>
      <!-- 吸顶筛选 -->
      <HomeFilter
        :fixTop="fixTop"
        v-show="fixTop"
        :homeFilterList="homeFilterList.data"
        @getList="getList"
      >
      </HomeFilter>
      <!-- end -->
      <HomeList
        v-if="homeList.data.length"
        :data="homeList.data"
        @refresh="getRobOrderList"
      ></HomeList>
      <Empty v-else></Empty>
    </scroll-view>

    <!-- footer -->
    <UniFooter :pagePath="'pages/index/index'"></UniFooter>
    <!-- end -->
  </view>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { onPullDownRefresh } from '@dcloudio/uni-app';
// 导入接口
import { getRobOrder, getHomeFilter } from '../api/order.js';
// 导入组件
// 导航
import UniNav from '@/components/uni-home-nav/index.vue';
// 底部导航
import UniFooter from '@/components/uni-footer/index.vue';
//空数据
import Empty from '@/components/empty/index.vue';
import HomeFilter from './components/homeFilter';
import HomeList from './components/homeList';
// ------定义变量------
const fixTop = ref(false);
const icCanScroll = ref(true);
let homeFilterList = reactive({
  data: [],
});
let homeList = reactive({
  data: [],
});
// ------生命周期------
onMounted(() => {
  getRobOrderList();
  getHomeFilterList();
});
// ------定义方法------
//下拉刷新
onPullDownRefresh(() => {
  setTimeout(function () {
    uni.stopPullDownRefresh();
  }, 1000);
  console.log('refresh');
});
const getList = (params) => {
  getRobOrderList(params);
};
//获取抢单列表
const getRobOrderList = (params) => {
  getRobOrder(params).then((res) => {
    console.log(res, 1111111);
    homeList.data = res.data.ordersSeizes || [];
  });
};
//获取首页顶部筛选服务项数据
const getHomeFilterList = () => {
  getHomeFilter().then((res) => {
    // console.log(res.data, 'getHomeFilterList');
    homeFilterList.data = res.data;
  });
};
//点击服务类型展开时不可滚动
const handleCanScroll = (val) => {
  icCanScroll.value = !val;
};
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
