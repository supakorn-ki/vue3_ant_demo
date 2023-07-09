<template>
  <div>
    <div style="margin: 0 8px 0 0; display: flex; align-items: baseline;">
      <a-button @click="routerBack()"> <CaretLeftOutlined /> Button </a-button>
      <h1 style="margin: 0 0 0 8px;">User Page id {{ $route.params.id }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { CaretLeftOutlined } from "@ant-design/icons-vue";
export default {
  components: {
    CaretLeftOutlined,
  },
  setup() {
    const router = useRouter();
    const routerBack = () => {
      router.go(-1);
    };
    return { routerBack, params: ref<string[]>(["1,000"]) };
  },
};
</script>

<style lang="scss" scoped></style>
