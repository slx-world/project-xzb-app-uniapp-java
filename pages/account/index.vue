<!--  -->
<template>
  <view class="account">
    <!-- 导航 -->
    <UniNav :title="title" @goBack="goBack"></UniNav>
    <!-- 姓名 -->
    <view class="name" :class="focusType === 'name' ? 'active' : ''">
      <text class="label">户名</text>
      <uni-easyinput
        placeholder="请输入户名"
        :placeholderStyle="{ fontSize: '16px' }"
        @focus="handleFocus('name')"
        @blur="handleBlur"
      ></uni-easyinput>
    </view>
    <!-- 银行 -->
    <view class="idCard" :class="focusType === 'idCard' ? 'active' : ''">
      <text class="label">银行</text>
      <picker
        class="citySelect bankSelect"
        @change="handleBank"
        :range="bankArray"
        range-key="label"
      >
        <image src="../../static/new/icon_more@2x.png"></image>
      </picker>
    </view>
    <!-- 开户行 -->
    <view class="idCard" :class="focusType === 'idCard' ? 'active' : ''">
      <text class="label">开户行</text>
      <view class="citySelect" @click="handleOpenLocation">
        <image src="../../static/new/icon_more@2x.png"></image>
      </view>
    </view>
    <!-- 网点 -->
    <view class="idCard" :class="focusType === 'idCard' ? 'active' : ''">
      <text class="label">网点</text>
      <uni-easyinput
        placeholder="请输入网点名称"
        :placeholderStyle="{ fontSize: '16px' }"
        @focus="handleFocus('idCard')"
        @blur="handleBlur"
      ></uni-easyinput>
    </view>
    <!-- 银行账号 -->
    <view
      class="idCard bankAccount"
      :class="focusType === 'idCard' ? 'active' : ''"
    >
      <text class="label">银行账号</text>
      <uni-easyinput
        placeholder="请输入银行账号"
        :placeholderStyle="{ fontSize: '16px' }"
        @focus="handleFocus('idCard')"
        @blur="handleBlur"
      ></uni-easyinput>
    </view>
    <!-- 开户证明 -->
    <view class="data">
      <view class="label">开户证明</view>
      <view class="content">
        <view class="photoItem">
          <uni-file-picker
            limit="1"
            title=""
            @success="handleSuccess"
            @select="handleSelect"
            @fail="handleFail"
            @delete="handleDelete"
          ></uni-file-picker>
          <view class="photoLabel">资料上传 </view>
        </view>
      </view>
    </view>
    <!-- 底部按钮 -->
    <view class="footer">
      <view class="btn-red" @click="handleSubmit">确认提交</view>
    </view>
    <!-- 选择省市区弹窗 -->
    <SelectArea
      ref="selectArea"
      @getAreaData="getAreaData"
      :provinceName="provinceName"
      :cityName="cityName"
      :countyName="countyName"
    ></SelectArea>
  </view>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';

// 导入组件
// 导航组件
import SelectArea from './components/selectArea.vue';
import UniNav from '@/components/uni-nav/index.vue';
const title = ref('账户设置');
const focusType = ref('');
let provinceName = ref('');
let cityName = ref('');
let countyName = ref('');
const selectArea = ref();
const bankArray = ref([
  {
    label: '中国工商银行',
    value: '1',
  },
  {
    label: '中国建设银行',
    value: '2',
  },
  {
    label: '中国邮政储蓄银行',
    value: '3',
  },
  {
    label: '中国农业银行',
    value: '4',
  },
  {
    label: '北京农商银行',
    value: '5',
  },
  {
    label: '招商银行',
    value: '6',
  },
]);
onMounted(() => {
  selectArea.value.getList();
});
const handleBank = (e) => {
  console.log(e.detail.value, '数组下标');
};
// 返回上一页
const goBack = () => {
  uni.navigateBack();
};
//失焦
const handleBlur = () => {
  focusType.value = '';
};
//聚焦
const handleFocus = (val) => {
  console.log(val, '--------');
  focusType.value = val;
};
const handleOpenLocation = () => {
  selectArea.value.handleOpen();
};
</script>
<style scoped src="./index.scss"></style>
