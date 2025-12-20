<template>
  <div class="ml-[300px] p-6 z-[100]">
    <h2 class="text-[35px] justify-center font-medium my-[35px]">
      Chọn thời khóa biểu của lớp
    </h2>
    <nav class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <RouterLink
        v-for="(item, index) in classes"
        :key="index"
        to="/home"
        class="bg-blue-500 p-6 text-white flex items-center justify-center rounded-[5px] hover:scaler-105 hover:shadow-lg transition-all duration-200 hover:translate-y-[-5px]
        shadow-md text-[20px]   "
        @click="gotoClassSchedule"
      >
        {{ item.name }}
      </RouterLink>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const classes = ref([
  { name: "Lớp A" },
  { name: "Lớp B" },
  { name: "Lớp C" },
  { name: "Lớp D" },
  { name: "Lớp E" },
  { name: "Lớp F" },
  { name: "Lớp G" },
  { name: "Lớp H" },
]);
const router = useRouter();
const gotoClassSchedule = () => {
  // 3. Thực hiện điều hướng
  router.push("/ClassSchedule");
};
</script>
