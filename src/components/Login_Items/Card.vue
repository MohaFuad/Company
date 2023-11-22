<template>
  <div
    class="absolute top-72 z-10 w-1/3 py-12 px-4 sm:px-6 lg:px-8 bg-[#f7fafc] border border-solid rounded-lg"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <small class="flex justify-center mt-6 text-[15px]  text-gray-900">تسجيل الدخول</small>
      </div>
      <form class=" mt-8 space-y-4">
        
        <div class="rounded-md shadow-sm -space-y-px">
          <div class="flex w-full">
            <label for="username" class="sr-only">أسم المستخدم</label>
            <input
              name="username"
              type="text"
              
              v-model="user.username"
              
              class="w-full px-3 py-2 border  border-gray-200 placeholder-gray-400 text-gray-900 rounded-r-md shadow-sm placeholder:text-sm"
              placeholder=" أسم المستخدم "
            />
          </div>
          <div class="pt-3">
            <label for="password" class="sr-only">Password</label>
            <input
              
              name="password"
              type="password"
              v-model="user.password"
              
              
              class="w-full px-3 py-2 border border-gray-200 placeholder-gray-400 text-gray-900 rounded-r-md shadow-sm placeholder:text-right"
              placeholder="كلمة المرور"
            />
          </div>
        </div>

        <div class="flex items-center justify-between float-right">
          <div class="flex items-center mb-6">
            <label
              for="remember-me"
              class="ml-2 block text-sm text-gray-900 px-2"
            >
              تذكر
            </label>

            <input
              
              name="remember-me"
              type="checkbox"
              class="w-5 h-5 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
        </div>

        <div class="hover:mb-2 flex items-center justify-center">
          <button
            @click.prevent= 'login()'
            class="group relative mt-20 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600"
          >
            دخول
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Screen from '@/components/View/Screen.vue';
export default {
  name: "Card",
  components:{
    Screen,
  },
  data() {
    return {
      user : {
        username : "",
        password : "",
      }
    };
  },
 
  methods: {
     async login() {
      // if (this.items.username && this.items.password) {
        // const response = await fetch('http://localhost:3000/api/Authentication/login', {
        //   method : 'POST',
        //   headers: {
        //     'Content-type': 'application/json',
        //   },
        //   body: JSON.stringify(this.user),
        // })
        // if(response.status === 200)
        // {
        //   this.$router.push('/Screen');

        // }
          this.$router.push('/Screen');
        //   await axios.post('http://localhost:3000/api/Authentication/login', {
        //   username : this.user.username,
        //   password : this.user.password,
        // }).then((res) => {
        //     console.log(res);
        //     this.$router.push('/Screen');
        // })
      // } else {
      //   console.log("A username and password must be present");
      // }
    },
  },
}
</script>

<style></style>
