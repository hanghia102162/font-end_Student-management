<template>
  <div class="ml-[300px] p-6 z-[100]">
    <div class="flex items-center justify-between mb-[20px]">
      <h2 class="text-[35px] justify-center font-medium my-[35px]">
        Danh sách các học sinh của lớp {{ className }}
      </h2>
      <div class="flex justify-center items-center">
        <button
          class="ml-3 p-2 bg-blue-500 text-white rounded hover:scale-105 hover:-translate-y-0.5 transition-transform cursor-pointer"
          @click="openModal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
        </button>
        <input
          type="text"
          placeholder="Tìm kiếm sinh viên..."
          class="border rounded w-[220px] ml-4 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          class="ml-3 p-2 bg-blue-500 text-white rounded hover:scale-105 hover:-translate-y-0.5 transition-transform cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
    </div>
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
            <button
              class="bg-blue-500 text-white px-2 py-1 rounded mr-2 cursor-pointer hover:bg-red-600 hover:translate-y-[-1px] transition-all duration-200"
              @click="openModal2"
            >
              Sửa
            </button>
            <button
              class="bg-red-500 text-white px-2 py-1 rounded cursor-pointer"
            >
              Xóa
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- ----------------------------------------------- -->
  <!-- MODAL -->
  <div
    v-if="ShowModal"
    @click.self="closeModal"
    class="fixed inset-0 z-[999] flex items-center justify-center bg-black/40"
  >
    <div class="bg-white w-[500px] rounded-xl shadow-lg p-6 animate-fadeIn">
      <!-- Header -->
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-xl font-semibold">Bộ lọc học sinh</h3>
        <button @click="closeModal" class="text-gray-500 hover:text-red-500">
          ✕
        </button>
      </div>

      <!-- Body -->
      <div class="space-y-4">
        <input
          type="text"
          placeholder="Họ tên"
          class="w-full border rounded px-3 py-2"
        />

        <select class="w-full border rounded px-3 py-2">
          <option value="">Chọn lớp</option>
          <option>CNTT1</option>
          <option>CNTT2</option>
        </select>

        <select class="w-full border rounded px-3 py-2">
          <option value="">Giới tính</option>
          <option>Nam</option>
          <option>Nữ</option>
        </select>
      </div>

      <!-- Footer -->
      <div class="flex justify-end gap-3 mt-6">
        <button
          @click="closeModal"
          class="px-4 py-2 border rounded hover:bg-gray-100"
        >
          Hủy
        </button>
        <button
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Áp dụng
        </button>
      </div>
    </div>
  </div>
  <!-- Model2 -->
  <div
    v-if="ShowModal2"
    @click.self="closeModal2"
    class="fixed inset-0 z-[999] flex items-center justify-center bg-black/40"
  >
    <div class="bg-white w-[500px] rounded-xl shadow-lg p-6 animate-fadeIn">
      <!-- Header -->
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-xl font-semibold">Chỉnh sửa thông tin học sinh</h3>
        <button @click="closeModal2" class="text-gray-500 hover:text-red-500">
          ✕
        </button>
      </div>

      <!-- Body -->
      <div class="space-y-4">
        <input
          type="text"
          placeholder="Họ tên"
          class="w-full border rounded px-3 py-2"
        />
        <input
          type="text"
          placeholder="Lớp"
          class="w-full border rounded px-3 py-2"
        />
        <input
          type="text"
          placeholder="Quê quán"
          class="w-full border rounded px-3 py-2"
        />
        <input
          type="text"
          placeholder="Thông tin liên lạc"
          class="w-full border rounded px-3 py-2"
        />
        <input
          type="text"
          placeholder="Ngày sinh"
          class="w-full border rounded px-3 py-2"
        />
        <input
          type="text"
          placeholder="Giới tính"
          class="w-full border rounded px-3 py-2"
        />
      </div>

      <!-- Footer -->
      <div class="flex justify-end gap-3 mt-6">
        <button
          @click="closeModal2"
          class="px-4 py-2 border rounded hover:bg-gray-100"
        >
          Hủy
        </button>
        <button
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Lưu
        </button>
      </div>
    </div>
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
const ShowModal = ref(false);
const openModal = () => {
  ShowModal.value = true;
};
const closeModal = () => {
  ShowModal.value = false;
};
// ===========================================
const ShowModal2 = ref(false);
const openModal2 = () => {
  ShowModal2.value = true;
};
const closeModal2 = () => {
  ShowModal2.value = false;
};
//==========================================
import { useRoute } from "vue-router";
const route = useRoute();
const className = route.params.className;
</script>
