<template>
  <view class="order-info">
    <UniNav title="订单详情" @goBack="goBack"></UniNav>
    <!-- 订单状态 -->
    <view
      class="serveStatus"
      :class="
        [1, 2, 3].includes(info.serveStatus) ? 'successStatus' : 'failStatus'
      "
    >
      <view class="status">{{
        orderStatus.filter((item) => item.value === info.serveStatus)[0].label
      }}</view>
      <view class="serveTime" v-if="info.serveStatus === 1">
        请在{{ info.ordersInfo.serveStartTime }}前上门服务
      </view>
    </view>
    <!-- 客户信息 -->
    <view class="customerInfo card">
      <view class="title">客户信息</view>
      <view class="nameAndPhone">
        <text class="name">{{ info.customerInfo.contactsName }}</text>
        <text class="phone">{{ info.customerInfo.contactsPhone }}</text>
      </view>
      <view class="address">
        <view class="location"></view>
        <view class="addressInfo">{{ info.customerInfo.serveAddress }}</view>
      </view>
    </view>
    <!-- 服务信息 -->
    <view class="serveInfo card">
      <view class="title">服务信息</view>
      <view class="content">
        <image
          class="serveImg"
          src="../../static/new/img_success@2x.png"
        ></image>
        <view class="serveTypeBox">
          <view class="serveType">{{ info.serveInfo.serveTypeName }}</view>
          <view class="serveItem">
            <text>{{ info.serveInfo.serveItemName }}</text>
            x
            <text>{{ info.serveInfo.serveNum }}</text>
            小时
          </view>
        </view>
      </view>
      <view class="fee">
        服务费用<text class="feeText">￥{{ info.serveInfo.serveFee }}</text>
      </view>
    </view>
    <!-- 订单信息 -->
    <view class="orderInfo card">
      <view class="title">订单信息</view>
      <view class="orderNum info first">
        <text class="label">订单编号</text>
        <text class="content">{{ info.ordersInfo.serveCode }}</text>
      </view>
      <view class="orderTime info">
        <text class="label">预约时间</text>
        <text class="content">{{ info.ordersInfo.serveStartTime }}</text>
      </view>
    </view>
    <!-- 取消信息 -->
    <view class="orderInfo card" v-if="info.serveStatus === 4">
      <view class="title">取消信息</view>
      <view class="orderNum info first">
        <text class="label">取消时间</text>
        <text class="content">{{ info.cancelInfo.cancelTime }}</text>
      </view>
      <view class="orderTime info">
        <text class="label">取消原因</text>
        <text class="content">{{ info.cancelInfo.cancelReason }}</text>
      </view>
    </view>
    <!-- 退款信息 -->
    <view class="orderInfo card" v-if="info.serveStatus === 5">
      <view class="title">退款信息</view>
      <view class="orderNum info first">
        <text class="label">退款时间</text>
        <text class="content">{{ info.cancelInfo.cancelTime }}</text>
      </view>
      <view class="orderTime info first">
        <text class="label">退款原因</text>
        <text class="content">{{ info.cancelInfo.cancelReason }}</text>
      </view>
      <view class="orderTime info">
        <text class="label">退款金额</text>
        <text class="content">￥{{ info.cancelInfo.refundAmount }}</text>
      </view>
    </view>
    <!-- 服务记录 -->
    <view class="serveRecord card" v-if="[2, 3].includes(info.serveStatus)">
      <view class="title">服务记录</view>
      <view
        class="serveBefore"
        v-if="
          (info.serveStatus === 2 || info.serveStatus === 3) &&
          info.serveInfo.realServeStartTime
        "
      >
        <view class="subTitle">服务前</view>
        <view class="imgList">
          <image
            class="img"
            :src="item"
            :key="index"
            v-for="(item, index) in info.serveInfo.serveBeforeImgs"
          ></image>
        </view>
        <view class="tips">
          <text>补充说明：</text>
          <text>{{ info.serveInfo.serveBeforeIllustrate }}</text>
        </view>
        <view class="time">{{ info.serveInfo.realServeStartTime }}</view>
      </view>
      <view
        class="serveAfter"
        v-if="info.serveStatus === 3 && info.serveInfo.realServeEndTime"
      >
        <view class="subTitle">服务后</view>
        <view class="imgList">
          <image
            class="img"
            :src="item"
            :key="index"
            v-for="(item, index) in info.serveInfo.serveAfterImgs"
          ></image>
        </view>
        <view class="tips">
          <text>补充说明：</text>
          <text>{{ info.serveInfo.serveBeforeIllustrate }}</text>
        </view>
        <view class="time">{{ info.serveInfo.realServeEndTime }}</view>
      </view>
    </view>
    <view class="footer" v-if="[1, 2].includes(info.serveStatus)">
      <view class="btn-gray" v-if="[1].includes(info.serveStatus)"
        >取消订单</view
      >
      <view class="btn-red" v-if="[1, 2].includes(info.serveStatus)">{{
        info.serveStatus === 1 ? '开始服务' : '完成服务'
      }}</view>
    </view>
  </view>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';
// 导航组件
import UniNav from '@/components/uni-nav/index.vue';
import { useStore } from 'vuex';
// 基本数据(订单状态)
import { orderStatus } from '@/utils/commonData.js';
// 获取父组件数据
const props = defineProps({
  tabBars: {
    type: Array,
    default: () => [],
  },
});
// ------定义变量------
const store = useStore();
const users = store.state.user;
const emit = defineEmits(''); //子组件向父组件事件传递
const scrollinto = ref('tab0'); //tab切换
const info = reactive({
  serveStatus: 1,
  customerInfo: {
    serveAddress:
      '北京市昌平区红旗大街124号五星大厦19层109室4号五星大厦19层109室',
    contactsName: '柯胜伦',
    contactsPhone: '17788884444',
  },
  ordersInfo: {
    serveCode: '7364734677776',
    serveStartTime: '2026.5.26 12:30',
  },
  refundInfo: {
    refundReason: '未上门服务',
    refundTime: '2026.5.26 12:30',
    refundAmount: '198',
  },
  cancelInfo: {
    cancelReason: '未上门服务',
    cancelTime: '2026.5.26 12:30',
  },
  serveInfo: {
    serveTypeName: '保洁清洗',
    serveItemName: '日常保洁',
    serveNum: '1',
    serveFee: '198',
    serveBeforeIllustrate: '服务开始说明',
    realServeStartTime: '2022-12-03  12:00',
    serveBeforeImgs: [
      'https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/61032c27-43eb-49cc-86df-ba8cbeb2c27d.png',
      'https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/61032c27-43eb-49cc-86df-ba8cbeb2c27d.png',
      'https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/61032c27-43eb-49cc-86df-ba8cbeb2c27d.png',
    ], //服务开始前照片列表
    serveAfterIllustrate: '服务结束说明',
    realServeEndTime: '2022-12-03  12:00',
    serveAfterImgs: [
      'https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/61032c27-43eb-49cc-86df-ba8cbeb2c27d.png',
      'https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/61032c27-43eb-49cc-86df-ba8cbeb2c27d.png',
      'https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/61032c27-43eb-49cc-86df-ba8cbeb2c27d.png',
    ], //服务结束照片列表
  },
});
let tabIndex = ref(users.tabIndex ? users.tabIndex : 0); //当前tab
// ------定义方法------
// tab选项卡切换轮播
const changeTab = (index) => {
  // 点击的还是当前数据的时候直接return
  if (tabIndex.value == index) {
    return;
  }
  tabIndex.value = index;
  emit('getTabIndex', index);
  // 滑动
  scrollinto.value = 'tab' + index;
};
// 返回上一页
const goBack = () => {
  uni.navigateBack();
};
//把数据、方法暴漏给父组件
defineExpose({
  changeTab,
});
</script>
<style src="./index.scss" lang="scss" scoped></style>
