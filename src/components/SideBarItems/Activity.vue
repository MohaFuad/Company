<template>
  <div class="relative w-full lg:w-[81.7%] float-left h-[300px]  mx-auto lg:ml-auto lg:mr-12 xl:mr-[40px]  bg-[#004455] pt-12 pb-40">
    <!-- <router-link class="button" to="/">تجديد مزاولةالنشاط</router-link>
    <router-view /> -->
    <div class="container">
      <div
        class="absolute shadow-lg w-[81%] h-[300px] rounded-md bg-white mr-36 flex flex-col items-center justify-center"
      >
        <span class="mb-3 ">تجديد رخصة منظمة</span>
        <label class="block border-b  pb-7 pt-7 ">
          <span class="block text-sm font-medium text-slate-700 "
            >أختر المنظمة</span
          >
        </label>
        <select class="w-1/2 text-sm bg-gray-300 border shadow-sm py-2 rounded" v-model="selectedActivity" >
          <option v-for="name in organizations.organization" :key="name._id" v-bind:value="name._id">
            {{ name.nameAr }}
          </option>
        </select>
        <button
            class="
              button
              bg-[#5e72e4]
              float-left
              text-white
              p-4
              rounded-md
              text-sm
              mt-5
            "
            @click="change()"
            
            >تجديد</button
          >
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
      selectedActivity:'',

    }
  },
  created() {
    axios.get("http://localhost:3000/api/Organizations").then((res) => {
      this.organizations = res.data
    });

  },
  methods:{
    change(){
      if(this.selectedActivity === "")
      {
        alert("الرجاء أختيار منظمة")
      }
      axios.patch(`http://localhost:3000/api/Organizations/active/${this.selectedActivity}`)
      .then((res) => {
        alert("تم تجديد المنظمة بنجاج");
        this.$router.push('/Organization');
      
       });
        
      
       

    }
  }
};
</script>

<style></style>
