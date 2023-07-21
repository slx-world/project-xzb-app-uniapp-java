<!-- 服务技能 -->
<template>
  <view class="serviceRange">
    <!-- nav -->
    <UniNav title="请选择工作地点" @goBack="goBack"></UniNav>

    <map
      class="map"
      :markers="markers"
      :latitude="location.latitude"
      :longitude="location.longitude"
    >
    </map>
    <cover-view class="address">
      <cover-view class="city">
        <cover-view class="label">服务城市</cover-view>
        <cover-view class="content">
          <cover-view class="cityName">北京</cover-view>
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
          <cover-view class="rangeName">{{ address.name }}</cover-view>
          <cover-image
            @click="handleChooseRange"
            class="icon"
            src="../../static/new/icon_more@2x.png"
          ></cover-image>
        </cover-view>
      </cover-view>
      <cover-view class="btn-red">
        <cover-view class="text">保存</cover-view>
      </cover-view>
    </cover-view>
  </view>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
// 导航组件
import UniNav from '@/components/uni-nav/index.vue';
const address = reactive({
  name: '朱辛庄地铁站',
  latitude: '',
  longitude: '',
});
const location = reactive({
  latitude: '',
  longitude: '',
});
const markers = reactive([
  {
    id: 1,
    latitude: 39.916296,
    longitude: 116.410344,
    iconPath: '/static/new/img_weizhi@2x.png',
    title: '啊啊啊啊啊啊啊啊啊',
    width: 30,
    height: 30,
  },
]);
//选择服务城市
const handleSelectCity = () => {
  uni.redirectTo({
    url: '/pages/city/index',
  });
};
//选择具体服务范围
const handleChooseRange = () => {
  console.log(123);
  uni.chooseLocation({
    latitude: location.longitude,
    longitude: location.latitude,
    success: function (res) {
      address.name = res.name;
      address.latitude = res.latitude;
      address.longitude = res.longitude;
      console.log(res, 'res');
    },
    fail: function (err) {
      console.log(err, 'err');
    },
  });
};
onMounted(() => {
  uni.getLocation({
    type: 'gcj02',
    geocode: true,
    success: function (res) {
      location.latitude = res.longitude;
      location.longitude = res.latitude;
      console.log(location, res, '-----');
      // console.log(res, '当前位置的经度：' + res.longitude);
      // console.log('当前位置的纬度：' + res.latitude);
    },
  });
});
// 返回上一页
const goBack = () => {
  uni.redirectTo({
    url: '/pages/index/index',
  });
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
