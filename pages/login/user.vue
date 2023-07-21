<!-- 账号登录页 -->
<template>
  <view>
    <image src="@/static/new/img_logo@2x.png" class="logo"></image>
    <view class="loginBox">
      <!-- 登录表单 -->
      <view class="loginMain">
        <uni-forms ref="customForm" :rules="customRules" :modelValue="fromInfo">
          <uni-forms-item name="account">
            <uni-easyinput
              :clearable="false"
              class="item"
              v-model="fromInfo.account"
              placeholder="请输入手机号"
            />
          </uni-forms-item>
          <uni-forms-item name="password" class="pwdBox">
            <uni-easyinput
              :clearable="false"
              class="item"
              v-model="fromInfo.password"
              placeholder="请输入验证码"
            />
            <text class="clearIcon" @click="handlePwd">获取验证码</text>
          </uni-forms-item>
        </uni-forms>
        <!-- 按钮 -->
        <view class="btnBox">
          <button
            class="btn-default"
            :disabled="
              fromInfo.account.length === 0 || fromInfo.password.length === 0
            "
            :class="
              fromInfo.account.length === 0 || fromInfo.password.length === 0
                ? 'disabled'
                : ''
            "
            type="primary"
            @click="handleSubmit"
          >
            登录
          </button>
        </view>
        <div class="gentleReminder">
          仅用于IT培训教学使用，为保障您的个人信息安全，请勿向平台录入任何个人敏感信息（如手机号、身份证号等）！
        </div>
        <!-- end -->
        <!-- 更新请求Url - 教学需求 -->
        <!-- <view class="setUrl" @click="inputDialogToggle">配置请求url</view>
			<uni-popup ref="inputDialog" type="dialog">
				<uni-popup-dialog ref="inputClose" mode="input" title="配置URL" :value="baseURL" placeholder="请输入baseURL" @confirm="dialogInputConfirm"></uni-popup-dialog>
			</uni-popup> -->
        <!-- 更新请求Url - 教学需求 -->
      </view>
      <!-- end -->
    </view>
  </view>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useStore } from 'vuex';
import storage from '@/utils/storage.js';
// 接口
import { userLogins } from '../api/user.js';
// 导入接口
import { getHomeInfo } from '@/pages/api/index.js';
// ------定义变量------
const store = useStore(); //vuex获取储存数据
let showPassword = ref(false); //控制密码右侧图标显示隐藏
const customForm = ref(); //表单校验
// 表单数据
let fromInfo = reactive({
  account: 'qykdy001', //账号
  password: '123456', // 密码
});
// let fromInfo = reactive({
// 	account: '', //账号
// 	password: '', // 密码
// });
// 表单校验
const customRules = reactive({
  account: {
    rules: [
      {
        required: true,
        errorMessage: '请输入手机号',
      },
      // {
      // 	validateFunction: function(rule, value, data, callback) {
      // 		const reg = /^1[3-9]\d{9}$/

      // 		if (!reg.test(value)) {
      // 			callback('手机号输入错误！请重新输入')
      // 		}
      // 		return true
      // 	}
      // }
    ],
  },
  password: {
    rules: [
      {
        required: true,
        errorMessage: '请输入验证码',
      },
    ],
  },
});
// ------声明周期------
onMounted(() => {
  // 进入登录页面配置默认的请求url
  // uni.setStorageSync('baseUrl', 'http://slwl-geteway-t.itheima.net/courier');
  // 处理定时上报位置的定时器
  // clearInterval(uni.getStorageSync('positions').timer);
  // uni.setStorageSync('positions', null);
});
// ------定义方法------
// 登录
const handleSubmit = async () => {
  // // 表单校验
  const valid = await customForm.value.validate();
  if (valid) {
    // 登录接口
    // 网络慢的时候添加按钮loading
    let times = setTimeout(() => {
      uni.showLoading({
        title: 'loading',
        mask: true,
      });
    }, 500);
    // 判断配置的url是否正确，超过5秒中提示报错，清除定时器
    let timVal = 1;
    let t = setInterval(() => {
      timVal++;
      if (timVal > 5) {
        uni.showToast({
          title: '网络异常，请重新检查url配置',
          duration: 2000,
          icon: 'none',
        });
        clearInterval(t);
        setTimeout(function () {
          uni.hideLoading();
        }, 500);
      }
    }, 1000);

    await userLogins(fromInfo)
      .then(async (res) => {
        // 清除定时器
        clearInterval(t);
        if (res.code === 200) {
          // 操作成功后清除loading
          setTimeout(function () {
            uni.hideLoading();
          }, 500);
          clearTimeout(times);
          // 存储token
          uni.setStorageSync('token', res.data.token);
          store.commit('user/setToken', res.data.token);
          // // 通过vuex获取用户信息
          store.dispatch('user/GetUsersInfo');
          await getHomeInfo().then((res) => {
            if (res.code === 200) {
              // 跳转到首页
              uni.redirectTo({
                url: '/pages/index/index',
              });
            }
          });
        } else {
          uni.showToast({
            title: res.msg,
            duration: 1000,
            icon: 'none',
          });
        }
      })
      .catch((err) => {
        // uni.showToast({
        // 	title: err.msg,
        // 	duration: 15000,
        // 	icon: 'none'
        // });
      });
  }
};
// 去手机登录页面
const goLogin = () => {
  uni.redirectTo({
    url: '/pages/login/index',
  });
};
// 设置密码
const handlePwd = () => {
  fromInfo.password = '';
};
// 打开设置Url窗口
const baseURL = ref(uni.getStorageSync('baseUrl'));
const inputDialog = ref(null);
const inputDialogToggle = () => {
  inputDialog.value.open();
};
// 报错配置的Url
const dialogInputConfirm = (val) => {
  baseURL.value = val;
  uni.setStorageSync('baseUrl', val);
};
</script>

<style src="./index.scss" lang="scss"></style>
