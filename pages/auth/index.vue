<!--  -->
<template>
  <view class="auth">
    <!-- 导航 -->
    <UniNav :title="title" @goBack="goBack"></UniNav>
    <!-- 姓名 -->
    <view class="name" :class="focusType === 'name' ? 'active' : ''">
      <text class="label">真实姓名</text>
      <uni-easyinput
        placeholder="请输入"
        :placeholderStyle="{ fontSize: '16px' }"
        @focus="handleFocus('name')"
        @blur="handleBlur"
      ></uni-easyinput>
    </view>
    <!-- 身份证号 -->
    <view class="idCard" :class="focusType === 'idCard' ? 'active' : ''">
      <text class="label">身份证号</text>
      <uni-easyinput
        placeholder="请输入"
        :placeholderStyle="{ fontSize: '16px' }"
        @focus="handleFocus('idCard')"
        @blur="handleBlur"
      ></uni-easyinput>
    </view>
    <!-- 身份证正面 -->
    <view class="idCardPhoto">
      <view class="label">上传身份证正反面（仅用于小智帮系统认证）</view>
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
          <view class="photoLabel">人像面照片</view>
        </view>
        <view class="photoItem">
          <image class="forImg" src="../../static/new/ren@2x.png"></image>
          <view class="photoLabel">示例图</view>
        </view>
      </view>
    </view>
    <!-- 身份证反面 -->
    <view class="countryPhoto">
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
          <view class="photoLabel">国徽面照片 </view>
        </view>
        <view class="photoItem">
          <image class="forImg" src="../../static/new/ren@2x.png"></image>
          <view class="photoLabel">示例图</view>
        </view>
      </view>
    </view>
    <view class="data">
      <view class="label">上传证明资料</view>
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
  </view>
</template>

<script setup>
import { ref } from 'vue';
// 导入组件
// 导航组件
import UniNav from '@/components/uni-nav/index.vue';
const title = ref('实名认证');
const focusType = ref('');
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
</script>
<style scoped src="./index.scss"></style>
