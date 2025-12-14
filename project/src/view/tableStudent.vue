<template>
  <div class="ml-[300px] p-6 z-[100]">
    <h2 class="text-[35px] justify-center font-medium my-[35px]">
      Danh sách các học sinh của lớp
    </h2>
    <table class="min-w-full bg-white border border-gray-200">
      <thead class="bg-[#f3f4f6]">
        <tr>
          <th class="border px-4 py-2">Mã sinh viên</th>
          <th class="border px-4 py-2">Họ và tên</th>
          <th class="border px-4 py-2">Lớp</th>
          <th class="border px-4 py-2">Quê quán</th>
          <th class="border px-4 py-2">Thông tin liên lạc</th>
          <th class="border px-4 py-2">Ngày sinh</th>
          <th class="border px-4 py-2">Giới tính</th>
          <th class="border px-4 py-2">Chức năng</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td class="border px-4 py-2">{{ student.id }}</td>
          <td class="border px-4 py-2">{{ student.name }}</td>
          <td class="border px-4 py-2">{{ student.class }}</td>
          <td class="border px-4 py-2">{{ student.hometown }}</td>
          <td class="border px-4 py-2">{{ student.contact }}</td>
          <td class="border px-4 py-2">{{ student.birthDay }}</td>
          <td class="border px-4 py-2">{{ student.sex }}</td>
          <td class="border px-4 py-2">
            <button class="bg-blue-500 text-white px-2 py-1 rounded mr-2">
              Sửa
            </button>
            <button class="bg-red-500 text-white px-2 py-1 rounded">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { ref } from "vue";
const students = ref([
  {
    id: "SV001",
    name: "Nguyễn Văn A",
    class: "CNTT1",
    hometown: "Hà Nội",
    contact: "0123456789",
    birthDay: "01/01/2000",
    sex: "Nam",
  },
  {
    id: "SV002",
    name: "Trần Thị B",
    class: "CNTT2",
    hometown: "Hồ Chí Minh",
    contact: "0987654321",
    birthDay: "02/02/2001",
    sex: "Nữ",
  },
]);
</script>
