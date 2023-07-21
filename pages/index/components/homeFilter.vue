<template>
  <view class="homeFilter" :class="fixTop ? 'fixTop' : ''">
    <view class="leftBox">
      <view
        class="item"
        :class="!status ? 'active' : ''"
        @click="handleClick(0)"
        >抢单</view
      >
      <view class="item" :class="status ? 'active' : ''" @click="handleClick(1)"
        >派单</view
      >
    </view>
    <view class="rightBox">
      <view class="label">服务类型</view>
      <view
        class="icon"
        :class="isOpen ? 'up' : 'down'"
        @click="handleOpen"
      ></view>
    </view>
    <view class="filterPopup" v-show="isOpen">
      <view class="service">
        <view
          class="serviceItem"
          :class="activeType === item.value ? 'active' : ''"
          v-for="(item, index) in serviceType"
          :key="index"
          @click="handleService(item.value)"
        >
          {{ item.label }}
        </view>
      </view>
      <view class="footer">
        <view class="btn-gray btn">重置</view>
        <view class="btn-red btn">确定</view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { useStore } from 'vuex';
import { ref, reactive, onMounted } from 'vue';
// 获取父组件值、方法
const props = defineProps({
  fixTop: {
    type: Boolean,
    default: false,
  },
});
const status = ref(0);
const isOpen = ref(false);
const serviceType = reactive([
  {
    label: '全部',
    value: 1,
  },
  {
    label: '保洁清洗',
    value: 2,
  },
  {
    label: '日常维修',
    value: 3,
  },
]);
const activeType = ref(1);
// ------定义方法------
const handleClick = (val) => {
  status.value = val;
};
const handleOpen = () => {
  isOpen.value = !isOpen.value;
};

const handleService = (val) => {
  activeType.value = val;
};
</script>

<style src="../index.scss" lang="scss"></style>
