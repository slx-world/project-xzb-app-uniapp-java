<!-- 服务技能 -->
<template>
  <view class="serviceSkill">
    <!-- nav -->
    <UniNav
      title="选择服务技能"
      @goBack="goBack"
      :rithtText="status === 'read' ? '编辑' : ''"
      @handleAll="handleEdit"
    ></UniNav>
    <view class="servicePage">
      <view class="left">
        <view
          v-for="(item, index) in serviceTypeData"
          :key="index"
          :class="activeId === item.serveTypeId ? 'active tagBox' : 'tagBox'"
          @click="tabChange(item.serveTypeId)"
        >
          <view class="tag">{{ item.serveTypeName }}</view>
        </view>
      </view>
      <!-- 右边内容区域 -->
      <view class="serviceBox right">
        <view>
          <view class="clean">
            <view
              class="card"
              :class="activeItemId.includes(item.id) ? 'active' : ''"
              v-for="(item, index) in serviceItemData"
              :key="index"
              @click="handleDetail(item.id, item.serveItemName)"
            >
              {{ item.serveItemName }}
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="footer" v-show="status === 'edit'">
      <view class="btn-gray btn" @click="handleCancel">取消</view>
      <view class="btn-red btn" @click="handleSubmit">保存</view>
    </view>
  </view>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
// 导航组件
import UniNav from '@/components/uni-nav/index.vue';
const activeId = ref(1); // 当前选中的id
const activeItemId = reactive([1, 2]);
const status = ref('read');
const serviceItemData = reactive([
  {
    serveItemName: '日常保洁',
    id: 1,
  },
  {
    serveItemName: '家居清洗',
    id: 2,
  },
  {
    serveItemName: '深度保洁',
    id: 3,
  },
]);
const serviceTypeData = reactive([
  {
    serveTypeName: '保洁清洗',
    serveTypeId: 1,
  },
  {
    serveTypeName: '日常维修',
    serveTypeId: 2,
  },
  {
    serveTypeName: '五字分类名',
    serveTypeId: 3,
  },
]);
//点击保存
const handleSubmit = () => {
  status.value = 'read';
};
//点击取消
const handleCancel = () => {
  status.value = 'read';
};
//点击编辑
const handleEdit = () => {
  status.value = 'edit';
  console.log('编辑状态');
};
// 切换侧边栏
const tabChange = (id) => {
  activeId.value = id;
};

// 返回上一页
const goBack = () => {
  uni.redirectTo({
    url: '/pages/index/index',
  });
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
