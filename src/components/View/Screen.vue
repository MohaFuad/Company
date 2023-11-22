<template>
  <div class="relative">
    <DashNavbar />
    <SideBar class="absolute" />
    <router-view />
    
    
  </div>
</template>

<script>
import DashNavbar from "@/components/Dashboard/DashNavbar.vue";
import SideBar from "@/components/Dashboard/SideBar.vue";

export default {
  name: "Screen",
  components: {
    DashNavbar,
    SideBar,
    
  },
  // created(){
  //   this.$router.push('/Dashboard');
  // }
};
</script>

<style>
</style>