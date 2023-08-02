<!-- 服务技能 -->
<template>
  <view class="serviceRange">
    <!-- nav -->
    <UniNav title="请选择工作地点" @goBack="goBack"></UniNav>

    <map
      class="map"
      :markers="[markers.data]"
      :latitude="location.latitude"
      :longitude="location.longitude"
      @markertap="markerTap"
    >
    </map>
    <cover-view class="address">
      <cover-view class="city">
        <cover-view class="label">服务城市</cover-view>
        <cover-view class="content">
          <cover-view class="cityName">{{ cityName }}</cover-view>
          <cover-image
            @click="handleSelectCity"
            class="icon"
            src="../../static/new/icon_more@2x.png"
          ></cover-image>
        </cover-view>
      </cover-view>
      <cover-view class="range">
        <cover-view class="label">意向接单范围</cover-view>
        <cover-view class="content">
          <cover-view class="rangeName">{{ address }}</cover-view>
          <cover-image
            @click="handleChooseRange"
            class="icon"
            src="../../static/new/icon_more@2x.png"
          ></cover-image>
        </cover-view>
      </cover-view>
      <cover-view class="btn-red">
        <cover-view class="text" @click="handleSubmit">保存</cover-view>
      </cover-view>
    </cover-view>
  </view>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useStore } from 'vuex';
import { onLoad, onShow } from '@dcloudio/uni-app';
import { getSettingInfo, setServiceSetting } from '../api/setting.js';
// 导航组件
import UniNav from '@/components/uni-nav/index.vue';
const cityName = ref('请选择');
const address = ref('请选择');
const store = useStore(); //vuex获取、储存数据
const users = store.state.user;

const location = reactive({
  latitude: '',
  longitude: '',
});
const markers = reactive({
  data: {
    id: 1,
    latitude: 0,
    longitude: 0,
    iconPath: '/static/new/img_weizhi@2x.png',
    width: 60,
    height: 60,
  },
});
const markerTap = () => {
  console.log('111');
};
//选择服务城市
const handleSelectCity = () => {
  uni.navigateTo({
    url: '/pages/city/index?address=' + address.value,
  });
};
//选择具体服务范围
const handleChooseRange = () => {
  uni.chooseLocation({
    latitude: location.longitude,
    longitude: location.latitude,
    success: function (res) {
      address.value = res.name;
      location.latitude = res.longitude;
      location.longitude = res.latitude;
      markers.data.latitude = res.latitude;
      markers.data.longitude = res.longitude;
      store.commit('user/setLocation', location);
      store.commit('user/setAddress', address.value);
      // console.log(res, location, '选择具体服务范围');
    },
    fail: function (err) {
      console.log(err, 'err');
    },
  });
};
const handleSubmit = () => {
  if (!users.cityCode) {
    return uni.showToast({
      title: '请选择服务城市',
      duration: 1500,
      icon: 'none',
    });
  } else if (!users.address || users.address === '请选择') {
    return uni.showToast({
      title: '请设置意向接单范围',
      duration: 1500,
      icon: 'none',
    });
  }
  setServiceSetting({
    cityCode: users.cityCode,
    location:
      String(users.location.latitude) + ',' + String(users.location.longitude),
    intentionScope: users.address,
  }).then((res) => {
    uni.showToast({
      title: '保存成功',
      duration: 1500,
      icon: 'none',
    });
    // goBack();
    console.log(res, '设置服务范围');
  });
};
onShow(() => {
  // cityName.value = users.cityName;
  getSettingInfo()
    .then((res) => {
      console.log(res, '获取当前配置的位置信息');
      //没有设置位置则获取当前位置
      if (!res.data.cityCode) {
        uni.getLocation({
          type: 'gcj02',
          geocode: true,
          success: function (res) {
            location.latitude = res.longitude;
            location.longitude = res.latitude;
            markers.data.latitude = res.latitude;
            markers.data.longitude = res.longitude;
            cityName.value = users.cityName;
            console.log(res, '当前位置1');
          },
        });
      } else {
        console.log(users.cityName, users.cityCode, '?????');
        store.commit('user/setCityCode', users.cityCode || res.data.cityCode);
        //有位置信息则进行赋值
        cityName.value =
          users.cityName === '请选择' ? res.data.cityName : users.cityName;
        address.value = res.data.intentionScope;
        location.latitude = res.data.location.split(',')[0];
        location.longitude = res.data.location.split(',')[1];
        markers.data.latitude = res.data.location.split(',')[1];
        markers.data.longitude = res.data.location.split(',')[0];
        store.commit('user/setLocation', location);
        store.commit('user/setAddress', address.value);
      }
    })
    .catch((err) => {
      uni.showToast({
        title: err.msg || '接口调用失败',
        duration: 1500,
        icon: 'none',
      });
    });
});
onMounted(() => {});
const clearStore = () => {
  store.commit('user/setLocation', {});
  store.commit('user/setAddress', '');
  store.commit('user/setCityCode', '');
  store.commit('user/setCityName', '请选择');
};
// 返回上一页
const goBack = () => {
  // uni.redirectTo({
  //   url: '/pages/index/index',
  // })
  // store.commit('user/setCityName', '请选择');
  uni.navigateBack();
  clearStore();
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
