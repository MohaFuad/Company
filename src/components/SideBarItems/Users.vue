<template>
  <div class="text-white text-center bg-[#004455] w-full lg:w-[81.7%] float-left h-[300px]  mx-auto lg:ml-auto lg:mr-12 xl:mr-[40px] ">
    <div class="">
      <router-link class="flex pb-12 mr-12" to="/AddUsers">
        <button class="border shrink border-white bg-white w-[24%] h-[84px] rounded-md">
          <div class="">
            <span class="text-gray-400 text-sm float-right mt-3 mr-5"
              >إضافة مستخدم</span
            >
            
            <div class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-12 float-left ml-5"
                viewBox="0 0 272 258"
              >
                <g
                  id="Ellipse_1"
                  data-name="Ellipse 1"
                  fill="#f13b3b"
                  stroke="#707070"
                  stroke-width="1"
                >
                  <ellipse cx="136" cy="129" rx="136" ry="129" stroke="none" />
                  <ellipse
                    cx="136"
                    cy="129"
                    rx="135.5"
                    ry="128.5"
                    fill="none"
                  />
                </g>
                <g
                  id="Ellipse_2"
                  data-name="Ellipse 2"
                  transform="translate(56 54)"
                  fill="#fff"
                  stroke="#707070"
                  stroke-width="1"
                >
                  <ellipse cx="80" cy="75.5" rx="80" ry="75.5" stroke="none" />
                  <ellipse cx="80" cy="75.5" rx="79.5" ry="75" fill="none" />
                </g>
                <path
                  id="add-svgrepo-com_1_"
                  data-name="add-svgrepo-com(1)"
                  d="M82.257,37.333H57.71v-25.8A11.4,11.4,0,0,0,46.612,0a11.4,11.4,0,0,0-11.1,11.529v25.8H10.967C4.936,37.333,0,42.658,0,49S4.936,60.667,10.967,60.667H35.514v25.8A11.4,11.4,0,0,0,46.612,98a11.4,11.4,0,0,0,11.1-11.529v-25.8H82.257c6.031,0,10.967-5.325,10.967-11.667S88.287,37.333,82.257,37.333Z"
                  transform="translate(89.388 80.5)"
                  fill="#f13b3b"
                />
              </svg>
            </div>
          </div>
        </button>
      </router-link>
      <div class="Table">
        <div
    class="absolute shrink border rounded-xl drop-shadow-lg p-6 bg-white w-[72%] mr-12 "
  >
    <div class="bg-white text-black font-medium text-right p-4">
      <span class="">المستخدمين</span>
      <div class=""></div>
    </div>
    <table
      class="text-sm text-left text-gray-400 dark:text-gray-400 table-auto w-full border"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border"
      >
        <tr>
          <th scope="col" class="py-3 pr-4 float-right font-light">#</th>
          <th scope="col" class="py-3 px-24 font-light">الأسم الكامل</th>
          <th scope="col" class="py-3 px-24 font-light">أسم المستخدم</th>
          <!-- <th scope="col" class="py-3 px-32 font-light">الهاتف</th> -->
          <th scope="col" class="py-3 px-36 font-light">العمليات</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user._id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td class="px-4">#</td>
          <td v-text="user.name" class="py-2 px-24"></td>
          <td v-text="user.username" class="py-2 px-24"></td>
          <!-- <td v-text="user.phone" class="py-2 px-24"></td> -->
          <td class="flex flrx-row px-24 mt-1">
                <div class="px-4">
                  <button
                    @click="editrow(user._id)"
                    class="border drop-shadow-md px-3 bg-gray-200 shadow-md rounded"
                  >
                    تعديل
                  </button>
                </div>
                <!-- <div class="">
                  <button
                    @click="deleterow(user._id)"
                    class="border drop-shadow-md px-3 bg-gray-200 shadow-md rounded"
                  >
                    حذف
                  </button>
                </div> -->
              </td>
        </tr>
      </tbody>
    </table>
  </div>
      </div>
    </div>
    
    
  </div>
</template>
<script>
import axios from "axios";
export default {
  data(){
    return{
      users:[],
    }
  },
  created() {
      axios.get("http://localhost:3000/api/Users").then((res) => {
        console.log(res.data);
        this.users = res.data.users
      });
  },
  methods:{
    deleterow(id){
      axios.delete(`http://localhost:3000/api/Organizations/${id}`)
      .then((res) => {
        alert("تم حذف المنظمة بنجاج");
        this.$router.push('/Organization');
       });
    },
    editrow(id){
      localStorage.setItem('id',JSON.stringify(id));
      this.$router.push('/EditUser');
    }
  }
  

};
</script>

<style>
</style>