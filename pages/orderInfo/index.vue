<template>
  <view class="order-info">
    <UniNav title="订单详情" @goBack="goBack"></UniNav>
    <!-- 订单状态 -->
    <view
      class="serveStatus"
      :class="
        [1, 2, 3].includes(info.data.serveStatus) || !info.data.serveStatus
          ? 'successStatus'
          : 'failStatus'
      "
    >
      <view class="status">{{
        info.data.serveStatus
          ? orderStatus.filter(
              (item) => item.value === info.data.serveStatus
            )[0].label
          : '派单中'
      }}</view>
      <view
        class="serveTime"
        v-if="info.data.serveStatus === 1 || !info.data.serveStatus"
      >
        请在{{
          info.data.ordersInfo.serveStartTime
            ? info.data.ordersInfo.serveStartTime.replace(/:\d{2}$/, '')
            : ''
        }}前上门服务
      </view>
    </view>
    <!-- 客户信息 -->
    <view class="customerInfo card">
      <view class="title">客户信息</view>
      <view class="nameAndPhone">
        <text class="name">{{ info.data.customerInfo.contactsName }}</text>
        <text class="phone">{{ info.data.customerInfo.contactsPhone }}</text>
      </view>
      <view class="address">
        <view class="location"></view>
        <view class="addressInfo">{{
          info.data.customerInfo.serveAddress
        }}</view>
      </view>
    </view>
    <!-- 服务信息 -->
    <view class="serveInfo card">
      <view class="title">服务信息</view>
      <view class="content">
        <image
          class="serveImg"
          :src="
            info.data.serveInfo.serveItemImg || '../../static/new/empty.png'
          "
        ></image>
        <view class="serveTypeBox">
          <view class="serveType">{{ info.data.serveInfo.serveTypeName }}</view>
          <view class="serveItem">
            <text>{{ info.data.serveInfo.serveItemName }}</text>
            x
            <text>{{ info.data.serveInfo.serveNum }}</text>
            小时
          </view>
        </view>
      </view>
      <view class="fee">
        服务费用<text class="feeText"
          >￥{{
            (Number(info.data.ordersInfo.ordersAmount) * 0.997 * 0.3).toFixed(2)
          }}</text
        >
      </view>
    </view>
    <!-- 订单信息 -->
    <view class="orderInfo card">
      <view class="title">订单信息</view>
      <view class="orderNum info first">
        <text class="label">订单编号</text>
        <text class="content">{{ info.data.ordersInfo.ordersId }}</text>
      </view>
      <view class="orderTime info">
        <text class="label">预约时间</text>
        <text class="content">{{
          info.data.ordersInfo.serveStartTime
            ? info.data.ordersInfo.serveStartTime.replace(/:\d{2}$/, '')
            : ''
        }}</text>
      </view>
    </view>
    <!-- 取消信息 -->
    <view class="orderInfo card" v-if="info.data.serveStatus === 4">
      <view class="title">取消信息</view>
      <view class="orderNum info first">
        <text class="label">取消时间</text>
        <text class="content">{{ info.data.cancelInfo.cancelTime }}</text>
      </view>
      <view class="orderTime info">
        <text class="label">取消原因</text>
        <text class="content">{{ info.data.cancelInfo.cancelReason }}</text>
      </view>
    </view>
    <!-- 退款信息 -->
    <view class="orderInfo card" v-if="info.data.serveStatus === 4">
      <view class="title">退款信息</view>
      <view class="orderNum info first">
        <text class="label">退款时间</text>
        <text class="content">{{ info.data.cancelInfo.cancelTime }}</text>
      </view>
      <view class="orderTime info first">
        <text class="label">退款原因</text>
        <text class="content">{{ info.data.cancelInfo.cancelReason }}</text>
      </view>
      <!-- <view class="orderTime info">
        <text class="label">退款金额</text>
        <text class="content">￥{{ info.data.cancelInfo.refundAmount }}</text>
      </view> -->
    </view>
    <!-- 服务记录 -->
    <view
      class="serveRecord card"
      v-if="[2, 3].includes(info.data.serveStatus)"
    >
      <view class="title">服务记录</view>
      <view
        class="serveBefore"
        v-if="
          (info.data.serveStatus === 2 || info.data.serveStatus === 3) &&
          info.data.serveInfo.realServeStartTime
        "
      >
        <view class="subTitle">服务前照片</view>
        <view class="imgList">
          <image
            class="img"
            :src="item"
            :key="index"
            @tap="previewImage(item, info.data.serveInfo.serveBeforeImgs)"
            v-for="(item, index) in info.data.serveInfo.serveBeforeImgs"
          ></image>
        </view>
        <view class="tips">
          <text>补充说明：</text>
          <text>{{ info.data.serveInfo.serveBeforeIllustrate }}</text>
        </view>
        <view class="time">{{
          info.data.serveInfo.realServeStartTime
            ? info.data.serveInfo.realServeStartTime.replace(/:\d{2}$/, '')
            : ''
        }}</view>
      </view>
      <view
        class="serveAfter"
        v-if="
          info.data.serveStatus === 3 && info.data.serveInfo.realServeEndTime
        "
      >
        <view class="subTitle">服务后照片</view>
        <view class="imgList">
          <image
            class="img"
            :src="item"
            :key="index"
            @tap="previewImage(item, info.data.serveInfo.serveAfterImgs)"
            v-for="(item, index) in info.data.serveInfo.serveAfterImgs"
          ></image>
        </view>
        <view class="tips">
          <text>补充说明：</text>
          <text>{{ info.data.serveInfo.serveAfterIllustrate }}</text>
        </view>
        <view class="time">{{
          info.data.serveInfo.realServeEndTime
            ? info.data.serveInfo.realServeEndTime.replace(/:\d{2}$/, '')
            : ''
        }}</view>
      </view>
    </view>
    <view
      class="footer"
      :class="[4].includes(info.data.serveStatus) ? 'end' : ''"
      v-if="[1, 2, 4].includes(info.data.serveStatus)"
    >
      <view
        class="btn-gray"
        @click="handleCancel(info.data.id)"
        v-if="[1].includes(info.data.serveStatus)"
        >取消订单</view
      >
      <view
        class="btn-red"
        @click="handleServeRecord(info.data.id, info.data.serveStatus)"
        v-if="[1, 2].includes(info.data.serveStatus)"
        >{{ info.data.serveStatus === 1 ? '开始服务' : '完成服务' }}</view
      >
      <view
        class="btn-gray"
        v-if="[4].includes(info.data.serveStatus)"
        @click="handleDelete(info.data.id)"
        >删除订单</view
      >
    </view>
  </view>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
// 导航组件
import UniNav from '@/components/uni-nav/index.vue';
//接口
import {
  getOrderInfo,
  getDispatchOrderInfo,
  deleteOrder,
  getHistoryOrderInfo,
} from '@/pages/api/order.js';
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
const type = ref(''); //从哪个页面来
let info = reactive({
  data: {
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
  },
});
let tabIndex = ref(users.tabIndex ? users.tabIndex : 0); //当前tab
// ------定义方法------
onLoad((options) => {
  console.log(options, 'options');
  type.value = options.type;
  getOrderInfoFunc(options.id);
});
//预览图片
const previewImage = (url, imgList) => {
  uni.previewImage({
    current: url, // 当前显示的图片链接
    urls: imgList, // 需要预览的图片链接列表，一般是一个数组
  });
};
//获取订单详情
const getOrderInfoFunc = (id) => {
  if (type.value === 'dispatch') {
    getDispatchOrderInfo(id).then((res) => {
      info.data = res.data;
      console.log(res.data, '获取派单订单详情');
    });
  } else if (type.value === 'history') {
    getHistoryOrderInfo(id).then((res) => {
      info.data = res.data;
      console.log(res.data, '获取历史订单订单详情');
    });
  } else {
    getOrderInfo(id).then((res) => {
      info.data = res.data;
      console.log(res.data, '获取订单详情');
    });
  }
};
//跳转到开始服务/完成服务页面
const handleServeRecord = (id, status) => {
  uni.navigateTo({
    url:
      '/pages/serveRecord/index?id=' +
      id +
      '&type=' +
      'info' +
      '&status' +
      status,
  });
};
//删除订单
const handleDelete = (id) => {
  deleteOrder(id)
    .then((res) => {
      uni.showToast({
        title: res.msg || '删除订单成功',
        duration: 1500,
        icon: 'none',
      });
      uni.navigateBack();
    })
    .catch((err) => {
      uni.showToast({
        title: err.msg || '删除订单失败',
        duration: 1500,
        icon: 'none',
      });
    });
};
//取消原因
const handleCancel = (id) => {
  uni.navigateTo({
    url: '/pages/cancel/index?id=' + id + '&type=' + 'info',
  });
};
// 返回上一页
const goBack = () => {
  if (type.value === 'info') {
    uni.redirectTo({
      url: '/pages/pickup/index',
    });
  } else {
    uni.navigateBack();
  }
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
