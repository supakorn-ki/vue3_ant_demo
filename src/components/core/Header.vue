<template>
  <a-layout-header style="background: #fff; padding: 0">
    <div style="display: flex; align-items: center; padding: 0 16px">
      <!-- <SwapOutlined v-if="collapsed" class="trigger" @click="toggleCollapse" />
      <SwapOutlined v-else class="trigger" @click="toggleCollapse" /> -->
      <div style="padding-left: 4px">my header</div>
    </div>
  </a-layout-header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LeftOutlined,
  RightOutlined,
  SwapOutlined,
} from "@ant-design/icons-vue";
export default defineComponent({
  props: ["collapsed"],
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    LeftOutlined,
    RightOutlined,
    SwapOutlined,
  },
  setup(props, { emit }) {
    const toggleCollapse = () => {
      emit("update:collapsed", !props.collapsed);
    };

    return { toggleCollapse };
  },
});
</script>

<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
