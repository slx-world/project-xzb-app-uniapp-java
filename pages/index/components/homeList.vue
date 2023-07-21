<!-- 列表 -->
<template>
  <view class="homeList">
    <view class="card" v-for="(item, index) in data" :key="index">
      <view class="card-content">
        <image class="leftCardContent" :src="item.imgUrl"></image>
        <view class="rightCardContent">
          <view class="title">
            {{ item.serviceFirst }}-{{ item.serviceSecond }}
          </view>
          <view class="serviceTime">
            <text>服务时间</text>
            <text>{{ item.time }}</text>
          </view>
          <view class="serviceAddress">
            <view>服务地址</view>
            <view class="address">
              <view
                :id="`addressContent` + index"
                class="addressContent"
                :class="`${isShowMoreThan2[index] ? 'moreThan2' : ''}`"
                >{{ item.address }}</view
              >
              <view class="toggle" v-if="isShowMoreThan2List[index]">
                <view
                  class="icon"
                  :class="isOpen ? 'up' : 'down'"
                  @click="handleOpen(index)"
                ></view>
                <view class="toggleText">展开</view>
              </view>
            </view>
          </view>
        </view>
      </view>
      <view class="cardFooter">
        <view class="price">￥{{ item.tips }}</view>
        <view class="robBtn btn-red">立即抢单</view>
      </view>
    </view>
    <view class="footer">- 已 经 到 底 了 -</view>
  </view>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';

const isOpen = ref(false); //展开收起
const isShowMoreThan2 = ref([]); //控制是否隐藏以及正常显示
const isShowMoreThan2List = ref([]); //控制展开按钮是否显示

onMounted(() => {
  data.forEach((item, index) => {
    checkContentOverflow(index);
  });
});
const checkContentOverflow = (index) => {
  const query = uni.createSelectorQuery().in(this);
  query
    .select(`#addressContent${index}`)
    .boundingClientRect((data) => {
      // 更新 isShowMoreThan2 数组的值
      isShowMoreThan2.value[index] = data.height > 32;
      isShowMoreThan2List.value[index] = data.height > 32;
    })
    .exec();
};

const data = reactive([
  {
    serviceFirst: '保洁清洗',
    serviceSecond: '日常保洁',
    time: '2026.5.26 12:30',
    address:
      '北京市昌平区金艳龙4层按时打算大所大所大所大所大所多撒多所撒撒多撒大所大',
    tips: 198,
    imgUrl:
      'https://yjy-rjwm-oss.oss-cn-hangzhou.aliyuncs.com/f507328c-27c4-41e6-88cd-09edfaba72c3.jpg',
  },
  {
    serviceFirst: '保洁清洗',
    serviceSecond: '日常保洁',
    time: '2026.5.26 12:30',
    address: '北京市昌平区金艳龙4层',
    tips: 198,
    imgUrl:
      'https://yjy-rjwm-oss.oss-cn-hangzhou.aliyuncs.com/f507328c-27c4-41e6-88cd-09edfaba72c3.jpg',
  },
  {
    serviceFirst: '保洁清洗',
    serviceSecond: '日常保洁',
    time: '2026.5.26 12:30',
    address: '北京市昌平区金艳龙4层',
    tips: 198,
    imgUrl:
      'https://yjy-rjwm-oss.oss-cn-hangzhou.aliyuncs.com/f507328c-27c4-41e6-88cd-09edfaba72c3.jpg',
  },
  {
    serviceFirst: '保洁清洗',
    serviceSecond: '日常保洁',
    time: '2026.5.26 12:30',
    address: '北京市昌平区金艳龙4层',
    tips: 198,
    imgUrl:
      'https://yjy-rjwm-oss.oss-cn-hangzhou.aliyuncs.com/f507328c-27c4-41e6-88cd-09edfaba72c3.jpg',
  },
  {
    serviceFirst: '保洁清洗',
    serviceSecond: '日常保洁',
    time: '2026.5.26 12:30',
    address: '北京市昌平区金艳龙4层',
    tips: 198,
    imgUrl:
      'https://yjy-rjwm-oss.oss-cn-hangzhou.aliyuncs.com/f507328c-27c4-41e6-88cd-09edfaba72c3.jpg',
  },
  {
    serviceFirst: '保洁清洗',
    serviceSecond: '日常保洁',
    time: '2026.5.26 12:30',
    address: '北京市昌平区金艳龙4层',
    tips: 198,
    imgUrl:
      'https://yjy-rjwm-oss.oss-cn-hangzhou.aliyuncs.com/f507328c-27c4-41e6-88cd-09edfaba72c3.jpg',
  },
  {
    serviceFirst: '保洁清洗1',
    serviceSecond: '日常保洁',
    time: '2026.5.26 12:30',
    address: '北京市昌平区金艳龙4层',
    tips: 198,
    imgUrl:
      'https://yjy-rjwm-oss.oss-cn-hangzhou.aliyuncs.com/f507328c-27c4-41e6-88cd-09edfaba72c3.jpg',
  },
]);
const handleOpen = (index) => {
  isOpen.value = !isOpen.value;
  isShowMoreThan2.value[index] = !isShowMoreThan2.value[index];
};
</script>
<style src="../index.scss" lang="scss"></style>
