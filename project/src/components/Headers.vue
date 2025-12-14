<template>
  <div class="flex justify-between items-center h-[64px] bg-[#f3f4f6]">
    <!-- --------------------------------------- -->
    <div class="flex p-6 flex-col h-full w-[300px] gap-[35px] bg-[#f3f4f6]">
      <div class="mt-15px flex gap-2 items-center">
        <div class="w-[40px] h-[40px] rounder-full">
          <img
            src="../img/logovimaru1_0_copy_small_2.png"
            alt=""
            class="w-full h-full cursor-pointer transform transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-lg rounded-full"
          />
        </div>
        <h3 class="text-[16px]">Trường đại học hàng hải Việt Nam</h3>
      </div>
      <!-- --------------------------------------------- -->
      <div>
        <nav
          class="flex items-center gap-2 hover:cursor-pointer hover:scaler-105 hover:shadow-lg transition-all duration-200 mt-[15px]"
          @click="gotoDashboard"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{0.5}"
            stroke="currentColor"
            class="h-[35px] w-[35px]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
            />
          </svg>
          <h2 class="text-[16px]">dashbroad</h2>
        </nav>
      </div>
      <!-- ----------------------------------------- -->
      <div>
        <h2 class="text-[16px]">Đăng kí học phần sinh viên</h2>
        <nav
          class="flex items-center gap-2 hover:cursor-pointer hover:scaler-105 hover:shadow-lg transition-all duration-200 mt-[15px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{0.5}"
            stroke="currentColor"
            class="h-[35px] w-[35px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
          <h2 class="text-[16px]">Đăng kí học phần</h2>
        </nav>
        <nav
          class="flex items-center gap-2 hover:cursor-pointer hover:scaler-105 hover:shadow-lg transition-all duration-200 mt-[15px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{0.5}"
            stroke="currentColor"
            class="h-[35px] w-[35px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
            />
          </svg>
          <h2 class="text-[16px]">Kết quả đăng kí</h2>
        </nav>
        <nav
          class="flex items-center gap-2 hover:cursor-pointer hover:scaler-105 hover:shadow-lg transition-all duration-200 mt-[15px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{0.5}"
            stroke="currentColor"
            class="h-[35px] w-[35px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
            />
          </svg>
          <h2 class="text-[16px]">Lịch sử đăng kí</h2>
        </nav>
      </div>
      <!-- ------------------------ -->
      <div>
        <h2 class="text-[16px]">Kết quả học tập và lịch thi</h2>
        <nav
          class="flex items-center gap-2 hover:cursor-pointer hover:scaler-105 hover:shadow-lg transition-all duration-200 mt-[15px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-[35px] w-[35px]"
          >
            <path
              d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z"
            />
            <path
              d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z"
            />
            <path
              d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z"
            />
          </svg>
          <h2 class="text-[16px]">Kết quả học tập</h2>
        </nav>
        <nav
          class="flex items-center gap-2 hover:cursor-pointer hover:scaler-105 hover:shadow-lg transition-all duration-200 mt-[15px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-[35px] w-[35px]"
          >
            <path
              d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z"
            />
            <path
              d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z"
            />
            <path
              d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z"
            />
          </svg>
          <h2 class="text-[16px]">Lịch thi</h2>
        </nav>
      </div>
    </div>
    <!-- -------------------------------------------------- -->
    <div class="p-6 flex">
      <div class="flex items-center flex-col">
        <h5 class="mb-[5px] m-[15px]">Hà Trọng Nghĩa</h5>
        <h6>Khoa công nghệ thông tin -102162</h6>
      </div>
      <div class="w-[35px] h-[35px] bg-[#f3f4f6]">
        <img src="" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const gotoDashboard = () => {
  router.push("/");
};
</script>
