<!-- 订单页面 -->
<template>
  <view class="order">
    <!-- 状态筛选 -->
    <UniTab
      :tabBars="tabBars"
      @getTabIndex="getTabIndex"
      :statusNum="statusNum.data"
      isShowHistory
    ></UniTab>
    <!-- 订单列表 -->
    <scroll-view
      :scroll-y="icCanScroll"
      class="scrollList"
      :class="homeList.data.length ? '' : 'noData'"
      @scroll="handleScroll"
      @scrolltolower="handleLoad"
      :upper-threshold="50"
      ref="scrollView"
      :scroll-top="scrollTop"
    >
      <HomeList
        v-if="homeList.data.length"
        :data="homeList.data"
        @refresh="getRobOrderList"
      ></HomeList>
      <Empty v-else></Empty>
    </scroll-view>
    <UniFooter :pagePath="'pages/pickup/index'"></UniFooter>
  </view>

  <!-- end -->
</template>

<script setup>
import { ref, reactive, nextTick } from 'vue';
import { onShow } from '@dcloudio/uni-app';
import { useStore } from 'vuex';

// 基本数据
import { DeliveryData } from '@/utils/commonData.js';
//接口
import { getOrder, getOrderStatusNum } from '@/pages/api/order.js';

// 导入组件
//空数据
import Empty from '@/components/empty/index.vue';
//订单列表
import HomeList from './components/homeList';
// 底部导航
import UniFooter from '@/components/uni-footer/index.vue';
// tab切换
import UniTab from '@/components/uni-tab/index.vue';
// 导航组件
import UniNav from '@/components/uni-nav/index.vue';
// ------定义变量------
const store = useStore();
const emit = defineEmits(''); //子组件向父组件事件传递
const users = store.state.user;
const statusNum = reactive({
  data: [],
});
const isHaveMore = ref(false);
const tabBars = DeliveryData;
const icCanScroll = ref(true);
const homeList = reactive({
  data: [],
});
const scrollTop = ref(0);
const scrollView = ref(null);
// ------生命周期------
onShow(() => {
  // if (users.tabIndex) {
  //   tabIndex.value = users.tabIndex;
  // }
  getTabIndex(users.tabIndex);
  getOrderStatusNumFunc();
});
//上拉加载
const handleLoad = () => {
  // console.log(users.tabIndex, '上拉加载');
  if (isHaveMore.value) {
    getListData(
      tabBars[users.tabIndex].value,
      homeList.data[homeList.data.length - 1].sortBy
    );
  }

  // console.log(homeList.data[homeList.data.length - 1].id, '上拉加载');
};
//获取各个状态下的订单数量
const getOrderStatusNumFunc = () => {
  getOrderStatusNum().then((res) => {
    statusNum.data = [res.data.noServed, res.data.serving];
    // console.log(res, '获取各个状态下的订单数量');
  });
};
//获取订单列表数据
const getListData = (val, id) => {
  // console.log(val, id, 'val, id');
  getOrder(val, id).then((res) => {
    if (res.data.ordersServes.length === 10) {
      isHaveMore.value = true;
    } else {
      isHaveMore.value = false;
    }
    homeList.data = homeList.data.concat(res.data.ordersServes);
    console.log(res, homeList.data, '66666666666');
  });
};
// ------定义方法------
const getRobOrderList = () => {};
//回到顶部
const scrollToTop = () => {
  scrollTop.value = scrollTop.value === 0 ? 1 : 0;
};
// 获取tab切换当前的index
const getTabIndex = (index) => {
  // console.log(index, 'indexxxxxx');
  scrollToTop();
  store.commit('user/setTabIndex', index);
  homeList.data = [];
  getListData(tabBars[index].value, '');
  // console.log(tabBars[index].value, 'index');
};
</script>
<style src="../../styles/expressage.scss" lang="scss" scoped></style>
<style src="./index.scss" lang="scss" scoped></style>
