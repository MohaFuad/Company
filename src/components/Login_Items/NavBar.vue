<template>
  <nav class="relative navbar navbar-top">
    <div class=" px-20 py-4 mr-16 ">
      <a class="">
        <Emblem />
      </a>
    </div>
    <Title />
  </nav>
</template>

<script>
import Title from '@/components/Login_Items/Title.vue'
import Emblem from '@/assets/Emblem.vue';
export default {
    name: 'NavBar',
    components: {
        Title,Emblem
    }

}
</script>

<style>
</style>