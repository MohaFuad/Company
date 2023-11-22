<template>
  <div
    class="bg-[#004455] pb-44 w-[85%] float-left text-xs text-gray-500 shrink-1"
  >
    <div
      class="absolute left-16 mt-16 border w-32 lg:w-[72%] float-left h-[300px] rounded-md bg-white lg:mr-12 xl:mr-[40px]"
    >
      <div class="mt-3 py-4 text-black font-extralight">
        <span class="mr-12">إضافة نشاط جديد</span>
        <router-link
          class="button bg-[#5e72e4] float-left text-white p-1 rounded-md text-sm ml-12"
          to="/"
          >القائمة</router-link
        >
      </div>
      <div class="bg-[#f7fafc] px-6 mt-4 py-5 snap-x">
        <span class="p-2 text-sm text-[#9daab9]">البيانات </span>
        <form class="flex flex-row text-xl pb-12 border-b border-gray-300 py-5">
          <label class="flex flex-col scroll-ml-6">
            <span class="block text-sm font-medium text-slate-700 py-2"
              >أسم المديرية</span
            >
            <input
              id="city"
              name="city"
              type="text"
              v-model="city"
              class="rounded-md shadow-lg p-3 placeholder: text-sm"
              placeholder="أسم المديرية"
            />
          </label>
          <div class="flex flex-col mr-12">
            <label class="pb-5" >أختر المحافظة  </label>
            <select v-model="selected">
                <option
                  v-for="state in states" id="state._id" :key="state.name"
                  v-bind:value="state._id">
                  {{ state.name }}
                </option>
              </select>
            <div
              class="dropdown bg-white rounded-lg mt-12 mr-24 w-44"
            >      
            </div>
          </div>
        </form>
        <div class="flex justify-center mt-5">
          <button
            @click="addcity()"
            class="bg-[#5e72e4] py-2 px-4 rounded-lg text-white text-lg"
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
      city: "",
      states: [],
      StateOpen: true,
      selected: "",
      
    };
  },
  created() {
    axios.get("http://localhost:3000/api/States").then((res) => {
      this.states = res.data.state;
    });
  },
  methods: {
    async addcity() {
      const Addcity = await axios
        .post("http://localhost:3000/api/cities", {
          name:this.city,
          state:this.selected,  
        })
        .then((res) => {
          console.log(res.status);
        });
    },
    getSelected(state) {
      this.selectedListItem = item;
    },
  },
};
</script>

<style></style>
