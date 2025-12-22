<template>
  <div class="ml-[300px] p-6 z-[100]">
    <div class="flex justify-between my-[25px]">
      <h2 class="font-medium text-[25px]">
        Thành tích học tập của {{ className }}
      </h2>
      <select name="" id="" class="border border-black h-[25px]">
        <option value="">Chọn năm học</option>
        <option value="">2021-2022</option>
        <option value="">2022-2023</option>
        <option value="">2023-2024</option>
      </select>
    </div>

    <table class="min-w-full bg-white border border-gray-200">
      <thead>
        <tr>
          <th class="border px-4 py-2">STT</th>
          <th class="border px-4 py-2">Mã học sinh</th>
          <th class="border px-4 py-2">Họ và tên</th>
          <th class="border px-4 py-2">Lớp</th>
          <th class="border px-4 py-2">Điểm giữa kỳ</th>
          <th class="border px-4 py-2">Điểm cuối kỳ</th>
          <th class="border px-4 py-2">Điểm tổng kết</th>
          <th class="border px-4 py-2">Xếp loại</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="achievement in achievements"
          :key="achievement.id"
          @click="selectRow(achievement)"
          class="cursor-pointer hover:bg-blue-50"
          :class="{
            'bg-blue-100': selectedRow?.id === achievement.id,
          }"
        >
          <td class="border px-4 py-2">{{ achievement.id }}</td>
          <td class="border px-4 py-2">{{ achievement.studentId }}</td>
          <td class="border px-4 py-2">{{ achievement.studentName }}</td>
          <td class="border px-4 py-2">{{ achievement.className }}</td>
          <td class="border px-4 py-2">{{ achievement.midTermScore }}</td>
          <td class="border px-4 py-2">{{ achievement.finalTermScore }}</td>
          <td class="border px-4 py-2">{{ achievement.totalScore }}</td>
          <td class="border px-4 py-2">{{ achievement.grade }}</td>
        </tr>
      </tbody>
    </table>
    <button
      class="bg-blue-500 p-3 rounded-md mt-7 hover:bg-blue-600 text-white hover:scale-105 transition-all duration-200 hover:translate-y-[-2px]"
      @click="$router.back()"
    >
      Quay lại
    </button>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const achievements = ref([
  {
    id: 1,
    studentId: "S001",
    studentName: "Nguyễn Văn A",
    className: "10A1",
    midTermScore: 8.5,
    finalTermScore: 9.0,
    totalScore: 8.75,
    grade: "Giỏi",
  },
  {
    id: 2,
    studentId: "S002",
    studentName: "Trần Thị B",
    className: "10A2",
    midTermScore: 7.0,
    finalTermScore: 8.0,
    totalScore: 7.5,
    grade: "Khá",
  },
  // Thêm dữ liệu mẫu khác nếu cần
]);
const router = useRouter();
const selectedRow = ref(null);
const selectRow = (achievement) => {
  router.push({
    name: "scorecardDetails",
    params: { id: achievement.id },
  });
  selectedRow.value = achievement;
};
const route = useRoute();
const className = route.params.className;
</script>
