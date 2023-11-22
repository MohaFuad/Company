<template>
  <div
    class="text-white bg-[#004455] w-full lg:w-[81.4%] float-left h-[300px] mx-auto lg:ml-auto lg:mr-12 xl:mr-[40px]"
  >
    <div class="grid grid-cols-1 gap-6 px-24 ml-20 group pt-20 lg:grid-cols-2">
      <router-link class="flex flex-row" to="/AddPage1">
        <button
          class="border shrink border-white bg-white w-full h-[84px] rounded-md"
        >
          <div class="">
            <span
              class="text-gray-400 text-sm float-right mt-3 mr-5 font-extralight"
              >إضافة منظمة</span
            >
            <div class="">
              
            </div>
          </div>
        </button>
      </router-link>
      <router-link class="flex flex-row" to="/Activity">
        <button
          class="border shrink border-white bg-white w-full h-[84px] rounded-md"
        >
          <div class="">
            <span class="text-gray-400 text-sm float-right mr-5 mt-3"
              >تجديد مزاولة النشاط</span
            >
            <div class="">
              
            </div>
          </div>
        </button>
      </router-link>
    </div>

    <!-- <div class="text-gray-400 pb-6 mt-7 flex justify-center">
      <div class="border-white w-full mx-5 h-full px-5 rounded-md bg-white">
        <span class="float-right mt-3"> فرز بحسب :</span>
        <br />
        <br />
        <form
          class="grid lg:grid lg:grid-cols-3 gap-5 text-xl border-gray-300 py-5"
        >
          <label class="flex flex-col">
            <span class="block text-sm font-medium text-slate-700 py-2"
              >أختيار الحقل</span
            >
            <select
              v-model="display"
              class="w-full text-sm bg-white border shadow-sm py-2 rounded"
            >
              <option v-bind:value="''">أختر</option>
              <option v-bind:value="''">البيانات التعريفية</option>
              <option v-bind:value="''">بيانات المقر</option>
              <option v-bind:value="''">الفروع و المكاتب</option>
              <option v-bind:value="''">المؤسسات و المراكز</option>
              <option v-bind:value="''">المؤسسين</option>
              <option v-bind:value="''">مجلس الأمناء</option>
              <option v-bind:value="''">لحنة الرقابة</option>
              <option v-bind:value="''">إحصائية العاملين</option>
              <option v-bind:value="''">اللجان الدائمة</option>
              <option v-bind:value="''">
                الأنشطة و المشاريع الممولة من أشخاص أو جهات محلية
              </option>
              <option v-bind:value="''">
                الأنشطة و المشاريع الممولة من أشخاص او جهات عربية /أجنبية
              </option>
              <option v-bind:value="''">مشاريع المؤسسة</option>
              <option v-bind:value="''">البنوك</option>
            </select>
          </label>
          <label class="flex flex-col">
            <span class="block text-sm font-medium text-slate-700 py-2"
              >نوع المنظمة</span
            >
            <select
              v-model="localOrInternationalSelected"
              class="w-full text-sm bg-white border shadow-sm py-2 rounded"
            >
              <option v-bind:value="'محلية'">محلية</option>
              <option v-bind:value="'دولية'">دولية</option>
            </select>
          </label>
          <label class="flex flex-col">
            <span class="block text-sm font-medium text-slate-700 py-2"
              >المحافظة</span
            >
            <select v-model="stateSelected">
              <option
                v-for="state in states"
                id=""
                :key="state.name"
                v-bind:value="state.name"
              >
                {{ state.name }}
              </option>
            </select>
          </label>
        </form>
        <form class="grid lg:grid lg:grid-cols-3 gap-5 border-gray-300 py-5">
          <label class="flex flex-col">
            <span class="block text-sm font-medium text-slate-700 py-2"
              >مسجلة /غير مسجلة</span
            >
            <select
              v-model="registerOrNo"
              class="w-full text-sm bg-white border shadow-sm py-2 rounded"
            >
              <option v-bind:value="''">مسجلة</option>
              <option v-bind:value="''">غير مسجلة</option>
            </select>
          </label>
          <label class="flex flex-col">
            <span class="block text-sm font-medium text-slate-700 py-2"
              >مجددة/ غير مجددة</span
            >
            <select
              v-model="refreshOrNo"
              class="w-full text-sm bg-white border shadow-sm py-2 rounded"
            >
              <option v-bind:value="''">مجددة</option>
              <option v-bind:value="''">غير مجددة</option>
            </select>
          </label>
          <button
            class="disabled bg-[#5e72e4] float-left text-white p-3 w-16 h-12 rounded-md text-base border text-center mr-32 mt-7"
          >
            فرز
          </button>
        </form>
      </div>
    </div> -->
    <div class="absolute w-auto h-[500px] align-middle justify-center mt-24">
      <div
        class="shrink border rounded-xl drop-shadow-lg p-4 bg-white mr-6 w-full mx-auto"
      >
        <div class="bg-white text-black mt-5">
          <span class="font-medium text-right p-4">جميع المنظمات</span>
          <button
            @click="printWindow()"
            class="disabled bg-[#5e72e4] float-left text-white h-7 w-12 rounded-md text-sm text-center mb-5"
          >
            طباعة
          </button>
        </div>
        <table
          class="table w-full text-sm text-gray-700 dark:text-gray-800 text-right"
        >
          <thead
            class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border cotainer text-right"
          >
            <tr>
              <th scope="col" class="py-3 px-12 font-light">الأسم</th>
              <th scope="col" class="py-3 px-16 font-light">نشاط المؤسسة</th>
              <th scope="col" class="py-3 px-12 font-light">هاتف المؤسسة</th>
              <th scope="col" class="py-3 px-20 font-light">الحالة</th>
              <th scope="col" class="py-3 px-10 font-light">العمليات</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="name in organizations.organization"
              :key="name._id"
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td v-text="name.nameAr" class="py-2 px-12"></td>
              <td v-text="name.type" class="py-2 px-16"></td>
              <td v-text="name.phone" class="py-2 px-16"></td>
              <td
                v-text="name.isActive"
                v-if="name.isActive == 'مرخصة'"
                class="text-green-600 py-2 px-16"
              ></td>
              <td
                v-text="name.isActive"
                v-else
                class="text-red-600 py-2 px-16"
              ></td>
              <td class="flex flrx-row">
                <div class="px-4">
                  <button
                    @click="editpage(name._id)"
                    class="border drop-shadow-md px-3 bg-gray-200 shadow-md rounded"
                  >
                    تعديل
                  </button>
                </div>
                <div class="">
                  <button
                    @click="deleterow(name._id)"
                    class="border drop-shadow-md px-3 bg-gray-200 shadow-md rounded"
                  >
                    حذف
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      localOrInternationalSelected: "",
      stateSelected: "",
      organizations: [],
      organizationsInfo: [],
      cities: [],
      states: [],
    };
  },
  methods: {
    editpage(id){
      console.log()
      localStorage.setItem('id',JSON.stringify(id));
      this.$router.push('/Editpage');
    },
    get() {
      this.organizations.forEach((element) => {
        element.mainCenter.forEach((city) => {
          this.cities.push(city.city.name);
        });
        element.organization.forEach((info) => {
          this.organizationsInfo.push(info);
        });
      });
    },
    getResult() {
      this.organizations.organization.forEach((organization) => {
        if (
          organization.localOrInternational ===
          this.localOrInternationalSelected
        ) {
          this.cities.push(organization);
          console.log("ffff", this.cities);
        }
      });
    },
    deleterow(id){
      axios.delete(`http://localhost:3000/api/Organizations/${id}`)
      .then((res) => {
        alert("تم حذف المنظمة بنجاج");
        this.$router.go()
      
       });
    },
    printWindow: function () {
      window.print();
    },
    editrow(){

}
  },
  created() {
    axios.get("http://localhost:3000/api/Organizations").then((res) => {
      this.organizations = res.data;
    });
    axios.get("http://localhost:3000/api/States").then((res) => {
      this.states = res.data.state;
    });
  },
};
</script>

<style></style>
