<template>
  <div class="ml-[300px] p-6 z-[100]">
    <h2 class="font-bold text-[24px] my-[15px]">Tri tiết bảng điểm</h2>
    <div class="flex justify-between mb-[25px]">
      <p class="text-[25px] font-bold mb-[15px]">
        Bảng điểm của em Hà Trọng Nghĩa
      </p>
      <select
        name=""
        id=""
        class="border border-black rounded-md w-[100px] p-2"
      >
        <option value="">Học kỳ 1</option>
        <option value="">Học kỳ 2</option>
      </select>
    </div>
    <div class="my-[15px]"> 
      <h2 class="font-medium">Tổng điểm trung bình môn : 10</h2>
      <h2 class="font-medium">Hạnh Kiểm : tốt</h2>
    </div>
    <table>
      <thead>
        <tr>
          <th class="border px-4 py-2">Môn học</th>
          <th class="border px-4 py-2">Bài Kiểm tra 15p</th>
          <th class="border px-4 py-2">Bài Kiểm tra 1 tiết</th>
          <th class="border px-4 py-2">Bài Kiểm Giữu học kỳ</th>
          <th class="border px-4 py-2">Bài kiểm tra 15p</th>
          <th class="border px-4 py-2">Bài kiểm tra cuối kỳ</th>
          <th class="border px-4 py-2">Điểm trung bình môn</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="subject in subjects" :key="subject.id">
          <td class="border px-4 py-2">{{ subject.name }}</td>
          <td class="border px-4 py-2">{{ subject.score15 }}</td>
          <td class="border px-4 py-2">{{ subject.score45 }}</td>
          <td class="border px-4 py-2">{{ subject.scoreMid }}</td>
          <td class="border px-4 py-2">{{ subject.score152 }}</td>
          <td class="border px-4 py-2">{{ subject.scoreFinal }}</td>
          <td class="border px-4 py-2">{{ subject.average }}</td>
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
const subjects = ref([
  {
    id: 1,
    name: "Toán",
    score15: 8,
    score45: 7,
    scoreMid: 9,
    score152: 8,
    scoreFinal: 8,
    average: 8,
  },
  {
    id: 2,
    name: "Văn",
    score15: 7,
    score45: 8,
    scoreMid: 8,
    score152: 9,
    scoreFinal: 9,
    average: 8,
  },
]);
// import { useRouter } from "vue-router";
// const router = useRouter();
// const gotoPreviousPage = () => {
//   router.back("/studentAchievement");
// };
</script>
