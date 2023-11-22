<template>
  <div
    class= " bg-[#004455] pb-32 w-[82%] float-left text-xs text-gray-500 shrink-1"
  >
    <div
      class="grid grid-cols-1 gap-6 px-16 mr-12  group pt-20 xl:grid-cols-3 lg:grid-cols-2    "
    >
      <div
        class="Info border shrink border-white bg-white  h-[84px] rounded-md"
      >
        <div class="block">
          <div   class="flex flex-col float-right mr-6 text-lg">
            <span class="mt-4 text-xl">المستخدمون</span>
            <label  class="font-extrabold text-black text-xl mt-2">0</label>
          </div>
          
        </div>
      </div>
      <div
        class="Info border shrink border-white bg-white  h-[84px] rounded-md"
      >
        <div  class="flex flex-col float-right mr-8 text-xl">
          <span class="mt-4 text-xl">جميع المنظمات</span>
          <label  class="font-extrabold text-black text-xl mt-2">
            0
            </label>
        </div>
      </div>
    </div>
    <div class="flex shrinkitems-center justify-center pt-3 mt-6">
      <div
        class="w-[68%] h-[700px] bg-gradient-to-r from-[#172a4d] to-[#1a174d] absolute rounded-md text-white"
      >
        <div class="flex flex-col space-y-2 mt-4 mr-6">
          <span class="text-[10px]">معلومات</span>
          <span class="text-xl">المنظمات</span>
        </div>
        <br />
        <div
          class="flex flex-row items-center justify-center text-[#666666] font-sans"
        >
          <div class="flex flex-row space-x-3">
            <span class="pl-1">غير مصرح لها</span>
            <div class="border w-11 border-white bg-[#c45850] h-4"></div>
          </div>
          <div class="flex flex-row">
            <span class="pl-1">مصرح لها</span>
            <div class="border w-11 border-white bg-[#5b9b57] h-4"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
      organizations:[],
      // users:[],
    }
  },
  created() {
    axios.get("http://localhost:3000/api/Organizations").then((res) => {
      this.organizations = res.data
    });
    axios.get("http://localhost:3000/api/Users").then((res) => {
      this.users = res.data
    });
  },
};
</script>

<style>
/* @media screen { max-width 
  
} */

</style>
