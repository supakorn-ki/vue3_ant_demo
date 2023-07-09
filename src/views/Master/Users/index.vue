<template>
  <div>
    <h1>User Search Page</h1>
    <a-table :columns="columns" :data-source="data" :scroll="{ x: 2000 }">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'operation'">
          <span>
            <a @click="routerPush(`Master/Users/${record.key}`)"> action </a>
            <a-divider type="vertical" />
            <a>Delete</a>
          </span>
        </template>
      </template>
    </a-table>
    <pre>{{ data }}</pre>
  </div>
</template>
<script lang="ts">
import type { TableColumnsType } from "ant-design-vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { DataItem } from "@/momo/transition.table.model";

const columns: TableColumnsType = [
  {
    title: "Full Name",
    width: 120,
    dataIndex: "name",
    key: "name",
  },
  { title: "Age", width: 100, dataIndex: "age", key: "age" },
  { title: "Column 1", dataIndex: "address", key: "1", width: 200 },
  { title: "Column 2", dataIndex: "address", key: "2", width: 200 },
  { title: "Column 3", dataIndex: "address", key: "3", width: 200 },
  { title: "Column 4", dataIndex: "address", key: "4", width: 200 },
  { title: "Column 5", dataIndex: "address", key: "5", width: 200 },
  { title: "Column 6", dataIndex: "address", key: "6", width: 200 },
  { title: "Column 7", dataIndex: "address", key: "7", width: 200 },
  { title: "Column 8", dataIndex: "address", key: "8" },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 140,
  },
];

const data: DataItem[] = [];
for (let i = 1; i <= 50; i++) {
  data.push({
    key: i,
    name: `Supakorn ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

export default defineComponent({
  setup() {
    const router = useRouter();

    const routerPush = (text: String) => {
      router.push(`/${text}`);
    };
    return {
      routerPush,
      data,
      columns,
      router,
    };
  },
});
</script>
