<!-- 列表 -->
<template>
  <view class="homeList">
    <view
      class="card"
      v-for="item in list.data"
      :key="item.id"
      @click="handleToInfo(item)"
    >
      <view class="evaluate">
        <view class="header">
          <view class="left">
            <image :src="item.headUrl"></image>
            <text class="nickName">{{ item.nickName }}</text>
          </view>
          <view class="right">
            <!-- 设置星星间隔 -->
            <uni-rate
              :value="item.score"
              :margin="5"
              color="#D2DBE7"
              active-color="#F74347"
            />
            <text>{{ item.score }}分</text>
          </view>
        </view>
        <view class="content">{{ item.content }}</view>
        <view class="time">
          <text>{{ item.time }}</text>
          <text class="replys" @click.stop="handleReply">回复</text>
        </view>
        <view class="img" v-if="item.imgUrl.length">
          <image
            :src="item1"
            :key="index"
            v-for="(item1, index) in item.imgUrl"
          ></image>
        </view>
        <view class="order">
          <view class="left">
            <image :src="item.orderInfo.imgUrl"></image>
          </view>
          <view class="right">
            <view class="num">
              <text>订单编号 </text>
              <text>{{ item.orderInfo.id }}</text>
            </view>
            <view class="time">
              <text>预约时间 </text>
              <text>{{ item.orderInfo.time }}</text>
            </view>
            <view class="address">{{ item.orderInfo.address }}</view>
          </view>
        </view>
        <view class="reply">
          <view class="content">{{ item.reply.content }}</view>
          <view class="foot">
            <text>{{ item.reply.time }}</text>
            <text>删除</text>
          </view>
        </view>
      </view>
    </view>
    <!-- 加载底部 -->
    <!-- <uni-load-more :status="status" v-if="!isShowMore && isLogin && allOrderList.data.length" /> -->
    <!-- 输入弹出框 -->
    <uni-popup ref="alertDialog" type="bottom" is-mask-click>
      <view class="content" :style="{ bottom: `${keyBoardHeight}px` }">
        <input
          class="uni-input"
          :adjust-position="false"
          focus
          placeholder="自动获得焦点"
        />
      </view>
    </uni-popup>
    <view class="footer">- 已 经 到 底 了 -</view>
  </view>
</template>

<script setup>
import { ref, reactive, onMounted, watch, watchEffect } from 'vue';
// 基本数据(订单状态)
import { orderStatus } from '@/utils/commonData.js';
const emit = defineEmits(['refresh']); //子组件向父组件事件传递
const alertDialog = ref(null);
// 获取父组件值、方法
const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
});
onMounted(() => {});
const keyBoardHeight = ref('');
const isRob = ref(true);
let list = reactive({
  data: [
    {
      reply: {
        content: '感谢你的肯定，您的满意就是我们的追求',
        time: '2022.07.12  18:08',
      },
      orderInfo: {
        id: '7364734677776',
        time: '2026.5.26 12:30',
        address:
          '北京市昌平区红旗大街124号五星大厦19层109室4号五星大厦19层109室',
        imgUrl:
          'https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/3b59ab0c-59fc-4c96-a645-eda33696204b.png',
      },
      imgUrl: [
        'https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/3b59ab0c-59fc-4c96-a645-eda33696204b.png',
        'https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/3b59ab0c-59fc-4c96-a645-eda33696204b.png',
      ],
      headUrl:
        'https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/3b59ab0c-59fc-4c96-a645-eda33696204b.png',
      nickName: '戴龙',
      score: 4,
      content:
        '按时上门,打扫非常干净,态度极佳,技能专业,效果超出预期。师傅清洗得非常千净，动作麻利。',
      time: '2022.07.12  18:08',
      // serveStartTime: '2023-7-28 11:48:00',
      // serveAddress: '金燕龙',
      // serveFee: '666',
    },
  ],
});
const handleTime = (val) => {
  return val ? val.replace(/:\d{2}$/, '') : '';
};
const handleReply = () => {
  alertDialog.value.open();
  // 监听键盘高度变化事件
  uni.onKeyboardHeightChange((res) => {
    keyBoardHeight.value = res.height;
    if (!res.height) alertDialog.value.close();
    console.log('键盘高度变化：', keyBoardHeight.value, res.height);
    // 这里可以根据需要对键盘高度进行处理
  });
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
    url: '/pages/cancel/index?id=' + id + '&type=list',
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
watchEffect(() => {
  // list.data = props.data;
});
</script>
<style src="../index.scss" lang="scss"></style>
