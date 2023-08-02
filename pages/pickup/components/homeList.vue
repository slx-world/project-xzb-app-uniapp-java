<!-- 列表 -->
<template>
  <view class="homeList">
    <view
      class="card"
      v-for="item in data"
      :key="item.id"
      @click="handleToInfo(item)"
    >
      <view class="card-content">
        <image
          class="leftCardContent"
          :src="item.serveItemImg || '../../../static/new/empty.png'"
        ></image>
        <view class="rightCardContent">
          <view class="title">
            {{ item.serveTypeName }}-{{ item.serveItemName }}
          </view>
          <view class="serviceTime">
            <text>预约时间</text>
            <text class="content">{{
              item.serveStatus === 1
                ? item.serveStartTime
                : item.serveStatus === 2
                ? item.realServeStartTime
                : item.realServeEndTime
            }}</text>
          </view>
        </view>
        <view
          class="orderStatus"
          :class="[3, 4, 5].includes(item.serveStatus) ? 'gray' : ''"
          >{{
            orderStatus.filter((item1) => item1.value === item.serveStatus)
              .length &&
            orderStatus.filter((item1) => item1.value === item.serveStatus)[0]
              .label
          }}</view
        >
      </view>
      <view class="serviceAddress">
        <!-- <view>服务地址</view> -->
        <view class="address">
          <view class="addressContent">{{ item.serveAddress }}</view>
        </view>
      </view>
      <view class="cardFooter" v-if="[1, 2].includes(item.serveStatus)">
        <!-- <view class="price">
          <text class="price-label">服务费用</text>
          ￥{{ item.serveFee }}
        </view> -->
        <view
          v-if="[1].includes(item.serveStatus)"
          class="robBtn btn-gray"
          @click.stop="handleCancel(item.id)"
          >取消订单</view
        >
        <view
          v-if="[1, 2].includes(item.serveStatus)"
          class="robBtn btn-red"
          @click.stop="handleServeRecord(item.id, item.serveStatus)"
          >{{ item.serveStatus === 1 ? '开始服务' : '完成服务' }}</view
        >
      </view>
    </view>
    <view class="footer">- 已 经 到 底 了 -</view>
    <!-- 提示窗示例 -->
    <uni-popup ref="alertDialog" type="dialog" :is-mask-click="false">
      <view class="dialog">
        <view class="img" :class="isRob ? 'success' : 'fail'"></view>
        <view class="content">{{
          isRob ? '抢单成功' : '很遗憾，抢单失败'
        }}</view>
        <view class="footer" @click="handleClose">确定</view>
      </view>
    </uni-popup>
  </view>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from 'vue';
import { robOrder } from '../../api/order.js';
// 基本数据(订单状态)
import { orderStatus } from '@/utils/commonData.js';
const emit = defineEmits(['refresh']); //子组件向父组件事件传递
// 获取父组件值、方法
const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
});
onMounted(() => {});
const isRob = ref(true);
let data = reactive([
  {
    serveTypeName: '保洁服务',
    serveItemName: '空调清洗',
    serveStartTime: '2023-7-28 11:48:00',
    serveAddress: '金燕龙',
    serveFee: '666',
  },
]);
const alertDialog = ref(null);
const handleClose = () => {
  alertDialog.value.close();
  emit('refresh');
};
const handleToInfo = (item) => {
  console.log(item, '进入详情');
  uni.navigateTo({
    url: '/pages/orderInfo/index?id=' + item.id,
  });
};
const handleCancel = (id) => {
  console.log('fff');
  uni.navigateTo({
    url: '/pages/cancel/index?id=' + id + '&type=' + 'list',
  });
};
const handleServeRecord = (id, status) => {
  uni.navigateTo({
    url:
      '/pages/serveRecord/index?status=' +
      status +
      '&id=' +
      id +
      '&type=' +
      'list',
  });
};
watch(
  () => props.data,
  () => {
    data = props.data;
    console.log(data, 'dddddddddddddddd');
    // console.log(serviceType.data, props.homeFilterList, '-fffffffffff');
  }
);
</script>
<style src="../index.scss" lang="scss"></style>
