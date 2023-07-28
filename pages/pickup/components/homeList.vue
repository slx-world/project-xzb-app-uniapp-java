<!-- 列表 -->
<template>
  <view class="homeList">
    <view
      class="card"
      v-for="(item, index) in data"
      :key="index"
      @click="handleToInfo"
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
            <text>服务时间</text>
            <text>{{ item.serveStartTime }}</text>
          </view>
        </view>
        <view class="orderStatus">待上门</view>
      </view>
      <view class="serviceAddress">
        <!-- <view>服务地址</view> -->
        <view class="address">
          <view class="addressContent">{{ item.serveAddress }}</view>
        </view>
      </view>
      <view class="cardFooter">
        <view class="price">
          <text class="price-label">服务费用</text>
          ￥{{ item.serveFee }}
        </view>
        <view class="robBtn btn-red" @click="handleRob(item.id)">立即抢单</view>
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
    serveStartTime: '2023-7-28 11:48',
    serveAddress: '金燕龙',
    serveFee: '666',
  },
]);
const alertDialog = ref(null);
const handleClose = () => {
  alertDialog.value.close();
  emit('refresh');
};
const handleToInfo = () => {
  uni.navigateTo({
    url: '/pages/orderInfo/index',
  });
};
const handleRob = (id) => {
  robOrder({
    id: id,
  }).then((res) => {
    console.log(res, '抢单');
    if (res.code === 200) {
      isRob.value = true;
    } else {
      isRob.value = false;
    }
    alertDialog.value.open();
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
