<!-- 订单页面 -->
<template>
  <view class="order">
    <!-- 手机状态栏 -->
    <uni-nav-bar
      statusBar="false"
      backgroundColor="white"
      height="0"
    ></uni-nav-bar>
    <!-- nav -->
    <!-- 状态筛选 -->
    <UniTab :tabBars="tabBars"></UniTab>
    <!-- 订单列表 -->
    <scroll-view
      :scroll-y="icCanScroll"
      class="scrollList"
      @scroll="handleScroll"
    >
      <HomeList
        v-if="homeList.data.length"
        :data="homeList.data"
        @refresh="getRobOrderList"
      ></HomeList>
    </scroll-view>
    <UniFooter :pagePath="'pages/pickup/index'"></UniFooter>
  </view>

  <!-- end -->
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useStore } from 'vuex';

// 基本数据
import { DeliveryData } from '@/utils/commonData.js';
// 导入组件
//订单列表
import HomeList from './components/homeList';
// 底部导航
import UniFooter from '@/components/uni-footer/index.vue';
// tab切换
import UniTab from '@/components/uni-tab/index.vue';
// ------定义变量------
const store = useStore();
const emit = defineEmits(''); //子组件向父组件事件传递
const tab = ref();
const tabBars = DeliveryData;
let tabIndex = ref(0); //当前tab
const icCanScroll = ref(true);
const homeList = reactive({
  data: [
    {
      serveTypeName: '保洁服务',
      serveItemName: '空调清洗',
      serveStartTime: '2023-7-28 11:48',
      serveAddress: '金燕龙',
      serveFee: '666',
    },
  ],
});
// ------生命周期------
onMounted(() => {});

// ------定义方法------
const getRobOrderList = () => {};
// 获取tab切换当前的index
const getTabIndex = (index) => {};
// 触发选项卡事件
const onChangeSwiperTab = (e) => {};

// 给筛选组件传递，刷新列表
const getList = () => {};
</script>
<style src="../../styles/expressage.scss" lang="scss" scoped></style>
<style src="./index.scss" lang="scss" scoped></style>
