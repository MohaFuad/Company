<!-- البيانات الأساسية -->
<template>
  <div class="bg-[#004455] w-[85%] float-left text-xs text-gray-500 shrink-1">
    <div
      class="border w-full lg:w-[82%] float-left h-[300px] rounded-md bg-white justify-center ml-24 mt-12"
    >
      <div class="mt-3 py-4 text-black font-extralight">
        <span class="mr-7 text-lg">إضافة مستخدم جديد</span>
        <router-link
          class="button bg-[#5e72e4] float-left text-white p-2 rounded-md text-sm ml-12"
          to="/Users"
          >القائمة</router-link
        >
      </div>
      <div class="bg-[#f7fafc] px-6 mt-4 py-5">
        <span class="p-2 text-xs text-[#9daab9]">البيانات المستخدم</span>
        <form
          class="grid lg:grid lg:grid-cols-3 gap-5 text-xl border-b border-gray-300 py-5"
        >
          <label class="flex flex-col">
            <span class="block text-sm font-medium text-slate-700 py-2"
              >أسم الكامل</span
            >
            <input
              type="text"
              v-model="name"
              class="rounded-md shadow-lg p-3 placeholder: text-sm"
              placeholder="أسم الكامل"
            />
          </label>
          <label class="flex flex-col">
            <span class="block text-sm font-medium text-slate-700 py-2"
              >البريد الإلكتروني</span
            >
            <input
              type="email"
              v-model="email"
              class="rounded-md shadow-lg p-3 placeholder: text-sm"
              placeholder="البريد الإلكتروني"
            />
          </label>
          <!-- <label class="flex flex-col">
            <span class="block text-sm font-medium text-slate-700 py-2"
              >الهاتف</span
            >
            <input
              type="number"
              v-model="phone"
              class="rounded-md shadow-lg p-3 placeholder: text-sm"
              placeholder="الهاتف"
            />
          </label> -->
        </form>
        <form
          class="grid lg:grid lg:grid-cols-3 gap-5 text-xl border-b border-gray-300 py-5 pb-12"
        >
          <label class="flex flex-col">
            <span class="block text-sm font-medium text-slate-700 py-2"
              >أسم المستخدم</span
            >
            <input
              id="DateF"
              type="text"
              v-model="username"
              class="rounded-md shadow-lg p-3 placeholder: text-sm"
              placeholder="أسم المستخدم"
            />
          </label>
          <label class="flex flex-col">
            <span class="block text-sm font-medium text-slate-700 py-2">
              كلمة المرور
            </span>

            <input
              type="password"
              v-model="password"
              class="rounded-md shadow-lg p-3 placeholder: text-sm"
              placeholder="******"
            />
          </label>
        </form>
          <!-- <form
            class="grid lg:grid lg:grid-cols-3 gap-5 text-xl border-b border-gray-300 py-5 pb-12"
          >
            <label class="flex flex-col">
              <span class="block text-sm font-medium text-slate-700 py-2"
                >المحافظة</span
              >
              <select @change="getCities" v-model="state">
                <option
                  v-for="state in states"
                  :key="state.name"
                  v-bind:value="state.id"
                >
                  {{ state.name }}
                </option>
              </select>
            </label>
            <label class="flex flex-col">
              <span class="block text-sm font-medium text-slate-700 py-2"
                >المديرية</span
              >
              <select v-model="city" class="w-64 mr-5">
                <option
                  v-for="city in ss"
                  :key="city.state.id"
                  v-bind:value="city._id"
                >
                  {{ city.name }}
                </option>
              </select>
            </label>
            <label class="flex flex-col">
              <span class="block text-sm font-medium text-slate-700 py-2"
                >العنوان</span
              >
              <input
                id="Address"
                type="text"
                v-model="webSite"
                class="rounded-md shadow-lg p-3 placeholder: text-sm"
                placeholder="العنوان"
              />
            </label>
          </form> -->
        <!-- <form class="flex flex-col space-y-16 text-xl border-gray-300 py-5">
          <span class="text-sm">الصلاحيات</span>
          <div class="">
            <div class="">
              <input
                id="Address"
                type="checkbox"
                v-model="DetailsChecked"
                class=""
                value="address"
              />
              <label class="text-sm px-1" for="address"
                >مشاهدة تفاصيل المنظمة</label
              >
            </div>
            <div class="">
              <input id="Address" type="checkbox" v-model="addOrg" class=" " />
              <span class="text-sm px-1"> إضافة منظمة </span>
            </div>
            <div class="">
              <input id="Address" type="checkbox" v-model="editOrg" class=" " />
              <span class="text-sm px-1"> تعديل منظمة </span>
            </div>
            <div class="">
              <input
                id="Address"
                type="checkbox"
                v-model="deleteOrg"
                class=" "
              />
              <span class="text-sm px-1"> حذف منظمة </span>
            </div>
            <div class="">
              <input
                id="Address"
                type="checkbox"
                v-model="manageUsers"
                class=" "
              />
              <span class="text-sm px-1"> إدارة المستخدمين </span>
            </div>
            <div class="">
              <input
                id="Address"
                type="checkbox"
                v-model="managePages"
                class=" "
              />
              <span class="text-sm px-1"> إدارة المواقع </span>
            </div>
          </div>
        </form> -->
        <div class="flex justify-center">
              <button
              @click="addUser()"
                class="bg-transparent border border-[#5e72e4] text-[#5e72e4] hover:bg-[#5e72e4] hover:text-white py-3 px-6 rounded-lg text-center text-sm"
              >
                إضافة
              </button>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      
      name:'',
      username:'',
      password:'',
      email:'',
      // states:[],
      // cities:[],
      // ss: [],
    }
  },
  created() {
    // axios.get("http://localhost:3000/api/States").then((res) => {
    //   this.states = res.data.state;
    // });
    // axios.get("http://localhost:3000/api/cities").then((res) => {
    //   this.cities = res.data.cities;
    // });
  },
  methods: {
    // getCities() {
    //   this.ss = [];
    //   this.states.forEach((state) => {
    //     state.cities.forEach((element) => {
    //       if (state._id == this.state) {
    //         this.ss.push(element);
    //       }
    //     });
    //   });
    // },
      async addUser() {
      const AddUser = await axios
        .post("http://localhost:3000/api/Authentication/register",{
          name:this.name,
          username:this.username,
          password:this.password,
          email:this.email,
        })
        .then((res) => {
          console.log(res.status);
        });
    },

  },
}
</script>
