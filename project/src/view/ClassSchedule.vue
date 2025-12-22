<template>
  <div class="ml-[300px] p-6 z-[100]">
    <h2 class="text-[25px] font-medium my-[15px]">
      Thời khóa biểu của {{ className }}
    </h2>
    <table class="min-w-full bg-white border border-gray-200">
      <thead>
        <tr>
          <th class="border px-4 py-2">Tiết</th>
          <th class="border px-4 py-2">Thứ 2</th>
          <th class="border px-4 py-2">Thứ 3</th>
          <th class="border px-4 py-2">Thứ 4</th>
          <th class="border px-4 py-2">Thứ 5</th>
          <th class="border px-4 py-2">Thứ 6</th>
          <th class="border px-4 py-2">Thứ 7</th>
          <th class="border px-4 py-2">Chủ nhật</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="period in timetable" :key="period.period">
          <td class="border px-4 py-2 font-medium">Tiết {{ period.period }}</td>

          <!-- Các ngày trong tuần -->
          <td class="border px-4 py-2">{{ period.mon }}</td>
          <td class="border px-4 py-2">{{ period.tue }}</td>
          <td class="border px-4 py-2">{{ period.wed }}</td>
          <td class="border px-4 py-2">{{ period.thu }}</td>
          <td class="border px-4 py-2">{{ period.fri }}</td>
          <td class="border px-4 py-2">{{ period.sat }}</td>
          <td class="border px-4 py-2">{{ period.sun }}</td>
        </tr>
      </tbody>
    </table>
    <button
      class="bg-blue-500 p-[15px] rounded-[15px] mt-[35px] text-white cursor-pointer hover:bg-blue-700 hover:translate-y-[-5px] transition-all duration-300 hover:scale-105"
      @click="$router.back()"
    >
      Quay Lại
    </button>
  </div>
</template>
<script setup>
import { ref } from "vue";

const timetable = ref([
  {
    period: 1,
    mon: "Toán",
    tue: "Văn",
    wed: "Anh",
    thu: "Lý",
    fri: "Hóa",
    sat: "",
    sun: "",
  },
  {
    period: 2,
    mon: "Toán",
    tue: "Sinh",
    wed: "Anh",
    thu: "Lý",
    fri: "Hóa",
    sat: "",
    sun: "",
  },
  {
    period: 3,
    mon: "Văn",
    tue: "Sử",
    wed: "Địa",
    thu: "GDCD",
    fri: "Thể dục",
    sat: "",
    sun: "",
  },
  {
    period: 4,
    mon: "Toán",
    tue: "Sinh",
    wed: "Anh",
    thu: "Lý",
    fri: "Hóa",
    sat: "",
    sun: "",
  },
  {
    period: 5,
    mon: "Văn",
    tue: "Sử",
    wed: "Địa",
    thu: "GDCD",
    fri: "Thể dục",
    sat: "",
    sun: "",
  },
]);
import { useRoute } from "vue-router";

const route = useRoute();
const className = route.params.className;
</script>
