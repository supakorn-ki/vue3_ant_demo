<template>
  <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
    <div class="logo" />
    <a-button block @click="toggleCollapse">
      <SwapOutlined />
    </a-button>
    <!-- <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
      <a-menu-item key="1">
        <HomeOutlined />
        <router-link :to="{ path: '/' }"> home </router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <InfoCircleOutlined />
        <router-link :to="{ path: '/about' }"> about </router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <router-link :to="{ path: '/Master/Users' }">
          go to master users
        </router-link>
      </a-menu-item>
      <a-menu-item key="4" @click="routerPush(`Master/Users`)">
        <span>func click</span>
      </a-menu-item>
    </a-menu> -->
    <a-menu
      v-model:selectedMenusKeys="selectedMenusKeys"
      mode="inline"
      :style="{ borderRight: 0 }"
    >
      <a-sub-menu key="sub1">
        <template #title>
          <span>
            <unordered-list-outlined />
            <span>Master</span>
          </span>
        </template>
        <a-menu-item key="1" @click="routerPush(``)">
          <HomeOutlined />
          <span>Home</span>
        </a-menu-item>
        <a-menu-item key="2" @click="routerPush(`about`)">
          <InfoCircleOutlined />
          <span>about</span>
        </a-menu-item>
        <a-menu-item key="3" @click="routerPush(`Master/Users`)">
          <span>
            <user-outlined />
            <span>Users</span>
          </span>
        </a-menu-item>
        <a-menu-item key="4" @click="routerPush(``)">
          <span>Todo</span>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <HomeOutlined />
          <span> subnav 2 </span>
        </template>
        <a-menu-item key="5">option5</a-menu-item>
        <a-menu-item key="6">option6</a-menu-item>
        <a-menu-item key="7">option7</a-menu-item>
        <a-menu-item key="8">option8</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub3">
        <template #title>
          <InfoCircleOutlined />
          <span> subnav 3 </span>
        </template>
        <a-menu-item key="9">option9</a-menu-item>
        <a-menu-item key="10">option10</a-menu-item>
        <a-menu-item key="11">option11</a-menu-item>
        <a-menu-item key="12">option12</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import {
  UserOutlined,
  UnorderedListOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  SwapOutlined,
} from "@ant-design/icons-vue";

export default defineComponent({
  props: ["collapsed"],
  components: {
    UserOutlined,
    UnorderedListOutlined,
    HomeOutlined,
    InfoCircleOutlined,
    SwapOutlined,
  },
  setup(props, { emit }) {
    const router = useRouter();
    const route = useRoute();

    const selectedKeys = ref([0]);
    const selectedMenusKeys = ref<string[]>(["1"]);
    const openMenusKeys = reactive<string[]>(["sub1"]);
    const text = ref<string[]>(["this is a book"]);
    //#region methods
    const toggleCollapse = () => {
      emit("update:collapsed", !props.collapsed);
    };

    const routerPush = (text: String) => {
      console.log("💩 ~ text:", text);
      console.log("💩 ~ selectedMenusKeys:", selectedMenusKeys);
      router.push(`/${text}`);
      // router.push({
      //   name: "search",
      //   query: {
      //     ...route.query,
      //   },
      // });
    };
    //#endregion

    return {
      routerPush,
      toggleCollapse,
      selectedKeys,
      selectedMenusKeys,
    };
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
