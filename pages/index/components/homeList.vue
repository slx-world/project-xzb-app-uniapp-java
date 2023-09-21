<!-- 列表 -->
<template>
  <view class="homeList">
    <view
      class="card"
      v-for="(item, index) in list.data"
      :key="index"
      @click="handleToInfo(item)"
    >
      <view class="card-content">
        <image class="leftCardContent" :src="item.serveItemImg"></image>
        <view class="rightCardContent">
          <view class="title">
            {{ item.serveItemName }}
          </view>
          <view class="serviceTime">
            <text>预约时间</text>
            <text>{{ handleTime(item.serveStartTime) }}</text>
          </view>
        </view>
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
          ￥{{ (Number(item.ordersAmount) * 0.997 * 0.3).toFixed(2) }}
        </view>
        <view
          class="robBtn btn-red"
          @click.stop="handleRob(item.id)"
          v-if="!orderType"
          >立即抢单</view
        >
        <view class="btn-box" v-else>
          <view class="btn-gray" @click.stop="handleRejectOrder(item.id)"
            >拒单</view
          >
          <view class="btn-red" @click.stop="handleReceiveOrder(item.id)"
            >接单</view
          >
        </view>
      </view>
    </view>
    <view class="footer">- 已 经 到 底 了 -</view>
    <!-- 提示窗示例 -->
    <uni-popup ref="alertDialog" type="dialog" :is-mask-click="false">
      <view class="dialog">
        <view class="img" :class="isRob ? 'success' : 'fail'"></view>
        <view class="content">{{
          isRob ? '抢单成功' : msg ? msg : '很遗憾，抢单失败'
        }}</view>
        <view class="footer" @click="handleClose">确定</view>
      </view>
      <!-- <image
        class="dialogImg"
        :src="
          isRob
            ? '../../../static/new/img_chenggong@2x.png'
            : '../../../static/new/img_shibai@2x.png'
        "
        @click="handleClose"
      ></image> -->
    </uni-popup>
  </view>
</template>

<script setup>
import { ref, reactive, onMounted, watch, watchEffect } from 'vue';
import { onShow } from '@dcloudio/uni-app';
import { robOrder, receiveOrder } from '../../api/order.js';
const emit = defineEmits(['refresh']); //子组件向父组件事件传递
// 获取父组件值、方法
const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
  type: {
    type: Number,
  },
});
const isRob = ref(true);
let list = reactive({
  data: [],
});
const orderType = ref(null);
const alertDialog = ref(null);
const msg = ref('');
//进入派单详情
const handleToInfo = (item) => {
  console.log(item, '进入详情');
  // uni.navigateTo({
  //   url: '/pages/orderInfo/index?id=' + item.id + '&type=dispatch',
  // });
};
//拒单
const handleRejectOrder = (id) => {
  console.log('点击了拒单');
  uni.navigateTo({
    url: '/pages/cancel/index?id=' + id + '&type=dispatch',
  });
};
//接单
const handleReceiveOrder = (id) => {
  receiveOrder({
    id: id,
  })
    .then((res) => {
      console.log(res, '接单');
      if (res.code === 200) {
        uni.showToast({
          title: '接单成功!',
          duration: 1000,
          icon: 'none',
        });
        emit('refresh');
      } else {
        uni.showToast({
          title: '接单失败!',
          duration: 1000,
          icon: 'none',
        });
      }
    })
    .catch((err) => {
      uni.showToast({
        title: err.msg || '接单失败!',
        duration: 1000,
        icon: 'none',
      });
      console.log(err, '接单失败');
    });
};
const handleClose = () => {
  alertDialog.value.close();
  emit('refresh');
};
const handleTime = (val) => {
  return val ? val.replace(/:\d{2}$/, '') : '';
};
const handleRob = (id) => {
  robOrder({
    id: id,
  })
    .then((res) => {
      console.log(res, '抢单');
      if (res.code === 200) {
        isRob.value = true;
      } else {
        isRob.value = false;
      }
      alertDialog.value.open();
      // emit('refresh');
    })
    .catch((err) => {
      if (err.code === 608) {
        isRob.value = false;
        msg.value = err.msg;
        alertDialog.value.open();
      } else {
        uni.showToast({
          title: err.msg || '接单失败!',
          duration: 1000,
          icon: 'none',
        });
      }
      // emit('refresh');
      console.log(err, 'errrrr');
    });
};
watchEffect(() => {
  list.data = props.data;
  orderType.value = props.type;
  console.log(list.data, props, '++++++++++++++');
});
watch(
  () => props.type,
  () => {
    // list.data = props.data;
    console.log(props.type, '=================');
  }
);
</script>
<style src="../index.scss" lang="scss"></style>
