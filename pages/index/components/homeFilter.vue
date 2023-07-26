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
          :class="activeType === item.id ? 'active' : ''"
          v-for="(item, index) in serviceType.data"
          :key="index"
          @click="handleService(item.id)"
        >
          {{ item.name }}
        </view>
      </view>
      <view class="footer">
        <view class="btn-gray btn" @click="handleReset">重置</view>
        <view class="btn-red btn" @click="handleSubmit">确定</view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { useStore } from 'vuex';
import { ref, reactive, watch } from 'vue';
const emit = defineEmits(['handleCanScroll', 'getList']); //子组件向父组件事件传递
// 获取父组件值、方法
const props = defineProps({
  fixTop: {
    type: Boolean,
    default: false,
  },
  homeFilterList: {
    type: Array,
    default: () => [],
  },
});
const status = ref(0);
const isOpen = ref(false);
let serviceType = reactive({
  data: [],
});
const activeType = ref('');
// ------定义方法------
const handleClick = (val) => {
  status.value = val;
};
const handleOpen = () => {
  isOpen.value = !isOpen.value;
  emit('handleCanScroll', isOpen.value);
};

const handleReset = () => {
  activeType.value = '';
  isOpen.value = false;
  emit('getList', '');
};

const handleService = (val) => {
  activeType.value = val;
};
const handleSubmit = () => {
  isOpen.value = false;
  emit('getList', activeType.value);
};
watch(
  () => props.homeFilterList,
  () => {
    serviceType.data = [{ id: '', name: '全部' }].concat(props.homeFilterList);
    // console.log(serviceType.data, props.homeFilterList, '-fffffffffff');
  }
);
</script>

<style src="../index.scss" lang="scss"></style>
