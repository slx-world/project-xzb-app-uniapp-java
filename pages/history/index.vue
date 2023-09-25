<!-- 订单页面 -->
<template>
  <view class="historyOrder">
    <!-- nav -->
    <UniNav
      title="历史订单"
      @goBack="goBack"
      rithtText="筛选"
      @handleAll="handletTime"
    ></UniNav>
    <!-- 订单列表 -->
    <scroll-view
      :scroll-y="icCanScroll"
      class="scrollList"
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
      <!-- 普通弹窗 -->
      <uni-popup
        ref="popup"
        background-color="#fff"
        @change="change"
        type="bottom"
      >
        <view class="popup-content">
          <view class="header">
            <view class="tips">选择时间</view>
            <image class="close" src="../../static/new/btn_nav_close@2x.png" />
          </view>
          <view class="time">
            <picker
              fields="day"
              mode="date"
              :value="startTime"
              @change="bindStartDateChange"
              ><view class="startTime">{{
                startTime || '开始时间'
              }}</view></picker
            >

            <view class="zhi">至</view>
            <picker
              fields="day"
              mode="date"
              :value="endTime"
              @change="bindEndDateChange"
              ><view class="endTime">{{ endTime || '结束时间' }}</view></picker
            >
          </view>
          <view class="footer">
            <view class="reset" @click="handleReset">重置</view>
            <view class="confirm" @click="searchDataByTime">确定</view>
          </view>
        </view>
      </uni-popup>
    </scroll-view>
    <UniFooter :pagePath="'pages/pickup/index'"></UniFooter>
  </view>

  <!-- end -->
</template>

<script setup>
import { ref, reactive, nextTick } from 'vue';
import { onShow } from '@dcloudio/uni-app';
import { useStore } from 'vuex';
import { subYears, startOfYear, endOfYear, format } from 'date-fns';

// 基本数据
import { DeliveryData } from '@/utils/commonData.js';
//接口
import { getHistoryOrder } from '@/pages/api/order.js';

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
const popup = ref('');
const isHaveMore = ref(false);
const icCanScroll = ref(true);
const homeList = reactive({
  data: [],
});
const startTime = ref(format(new Date().getTime() - 15552000000, 'yyyy-MM-dd'));
const endTime = ref(format(new Date(), 'yyyy-MM-dd'));
// const startTime = ref(
//   format(startOfYear(subYears(new Date(), 1)), 'yyyy-MM-dd')
// );
// const endTime = ref(format(endOfYear(subYears(new Date(), 1)), 'yyyy-MM-dd'));
const scrollTop = ref(0);
const scrollView = ref(null);
// ------生命周期------
onShow(() => {
  // if (users.tabIndex) {
  //   tabIndex.value = users.tabIndex;
  // }
  // getTabIndex(users.tabIndex);
  getListData();
});
//重置时间
const handleReset = () => {
  startTime.value = '开始时间';
  endTime.value = '结束时间';
};
//按照起始时间查询数据
const searchDataByTime = () => {
  if (startTime.value === '开始时间' || endTime.value === '结束时间') {
    return uni.showToast({
      title: '请选择时间',
      duration: 1000,
      icon: 'none',
    });
  }
  homeList.data = [];
  getListData();
  popup.value.close();
};
//开始时间
const bindStartDateChange = (e) => {
  if (
    new Date(endTime.value).getTime() - new Date(e.detail.value).getTime() >
    31536000000
  ) {
    uni.showToast({
      title: '时间间隔不能大于365天',
      duration: 1000,
      icon: 'none',
    });
  } else {
    startTime.value = e.detail.value;
  }
};
//结束时间
const bindEndDateChange = (e) => {
  if (
    new Date(e.detail.value).getTime() - new Date(startTime.value).getTime() >
    31536000000
  ) {
    return uni.showToast({
      title: '时间间隔不能大于365天',
      duration: 1000,
      icon: 'none',
    });
  } else {
    endTime.value = e.detail.value;
  }
};
// 返回上一页
const goBack = () => {
  uni.navigateBack();
};
const handletTime = () => {
  popup.value.open();
};
//上拉加载
const handleLoad = () => {
  // console.log(users.tabIndex, '上拉加载');
  if (isHaveMore.value) {
    getListData(homeList.data[homeList.data.length - 1].sortTime);
  }

  // console.log(homeList.data[homeList.data.length - 1].id, '上拉加载');
};
//获取订单列表数据
const getListData = (time) => {
  // console.log(val, id, 'val, id');
  const params = {
    minSortTime: startTime.value + ' 00:00:00',
    maxSortTime: endTime.value + ' 23:59:59',
    lastSortTime: time,
  };
  if (!time) delete params.lastSortTime;
  getHistoryOrder(params).then((res) => {
    console.log(res, homeList.data, '66666666666');
    if (res.data.length === 10) {
      isHaveMore.value = true;
    } else {
      isHaveMore.value = false;
    }
    homeList.data = homeList.data.concat(res.data);
  });
};
// ------定义方法------
const getRobOrderList = () => {};
//回到顶部
const scrollToTop = () => {
  scrollTop.value = scrollTop.value === 0 ? 1 : 0;
};
</script>
<style src="../../styles/expressage.scss" lang="scss" scoped></style>
<style src="./index.scss" lang="scss" scoped></style>
