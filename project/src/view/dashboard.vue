<template>
  <div class="ml-[300px] p-6 z-[100]">
    <h2 class="text-[25px] font-medium my-[35px]">dashboard</h2>
    <div class="grid grid-cols-3 gap-[35px]">
      <nav
        class="bg-[#f3f4f6] p-4 flex items-center justify-center gap-2 rounded-[15px] hover:-translate-y-2 hover:shadow-lg cursor-pointer transition-all duration-300"
        @click="GototimeLockSign"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-[52px] h-[52px]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
          />
        </svg>
        <h2 class="">Thời khóa biểu</h2>
      </nav>
      <nav
        class="bg-[#f3f4f6] cursor-pointer p-4 flex items-center justify-center gap-2 rounded-[15px] hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
        @click="gotoclassAchievement"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-[52px] h-[52px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
          />
        </svg>
        <nav>
          <h2>Kết quả Học tập</h2>
          <h2>Thành tích học tập</h2>
        </nav>
      </nav>
      <nav
        class="bg-[#f3f4f6] cursor-pointer p-6 flex items-center justify-center gap-2 rounded-[15px] hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
        @click="gotoStudentClass"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{0.5}"
          stroke="currentColor"
          class="h-[52px] w-[52px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
          />
        </svg>
        <div>
          <h2>Danh Sách Học Sinh</h2>
          <h2>Bấm vào kiểm tra</h2>
        </div>
      </nav>
    </div>
    <!-- ----------------------------------------->
    <div class="flex flex-col items-start space-y-6 p-6 bg-gray-50 mt-10">
      <!-- Timeline item 1 -->
      <div class="flex items-start space-x-4">
        <div class="flex flex-col items-center">
          <div
            class="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M10.5 8.25h3l-3 4.5h3"
              />
            </svg>
          </div>
          <div class="w-px flex-1 bg-blue-500 mt-1"></div>
        </div>
        <div class="flex-1">
          <p class="font-semibold text-gray-800">
            Thông báo về việc đăng ký học phần thực tập tốt nghiệp trong học kỳ
            II năm học 2024-2025
          </p>
          <p class="text-gray-500 mt-1">
            Thông báo về việc đăng ký học phần thực tập tốt nghiệp trong học kỳ
            II năm học 2024-2025
          </p>
        </div>
      </div>
      <!-- Timeline item 2 -->
      <div class="flex items-start space-x-4">
        <div class="flex flex-col items-center">
          <div
            class="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M10.5 8.25h3l-3 4.5h3"
              />
            </svg>
          </div>
          <div class="w-px flex-1 bg-blue-500 mt-1"></div>
        </div>
        <div class="flex-1">
          <p class="font-semibold text-gray-800">
            Thông báo đăng ký học các học phần thay thế của môn Giáo dục quốc
            phòng
          </p>
          <p class="text-gray-500 mt-1">
            Đối tượng áp dụng từ K61 trở về trước, do nội dung giảng dạy môn
            Giáo dục Quốc phòng từ khóa 62 có sự thay đổi
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

// const gototableStudent = () => {
//   router.push("/table-student");
// };
const GototimeLockSign = () => {
  router.push("/time-lock-sign");
};
const gotoclassAchievement = () => {
  router.push("/classAchievement");
};
const gotoStudentClass = () => {
  router.push("/studentClass");
};
</script>
