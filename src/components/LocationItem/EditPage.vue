<template>
  <div
    class="border w-full lg:w-[76%] float-left h-[300px] ml-12 rounded-md lg:mr-7 xl:mr-[30px] mt-24 text-black py-3"
  >
    <!-- البيانات الأساسية -->
    <form class="border bg-white px-5">
      <div class="mt-3 py-4 text-black font-extralight">
        <span class="mr-12">تعديل المنظمة الحالية</span>
        <router-link
          class="button bg-[#5e72e4] float-left text-white p-2 rounded-md text-sm ml-12"
          to="/Organization"
          >القائمة</router-link
        >
      </div>
      <div class="bg-[#f7fafc] px-6 mt-4 py-5">
        <span class="p-2 text-xs">البيانات الأساسية للمؤسسة</span>
      </div>
      <form
        class="grid lg:grid lg:grid-cols-3 gap-5 text-xl border-b border-gray-300 py-5"
      >
        <label class="flex flex-col">
          <span class="block text-sm font-medium text-slate-700 py-2"
            >أسم المؤسسة باللغة العربية</span
          >
          <input
            type="text"
            v-model="nameAr"
            class="w-[] rounded-md shadow-lg p-3 placeholder: text-sm"
            placeholder="أسم المؤسسة باللغة العربية"
          />
        </label>
        <label class="flex flex-col">
          <span class="block text-sm font-medium text-slate-700 py-2"
            >أسم المؤسسة باللغة الإنجليزية</span
          >
          <input
            type="text"
            v-model="nameEn"
            class="rounded-md shadow-lg p-3 placeholder: text-sm"
            placeholder="أسم المؤسسة باللغة الأنجليزية"
          />
        </label>
        <label class="flex flex-col">
          <span class="block text-sm font-medium text-slate-700 py-2"
            >نوعها</span
          >
          <input
            type="text"
            v-model="type"
            class="rounded-md shadow-lg p-3 placeholder: text-sm"
            placeholder="نوعها"
          />
        </label>
      </form>
      <form
        class="grid lg:grid lg:grid-cols-3 gap-5 text-xl border-b border-gray-300 py-5 pb-12"
      >
        <label class="flex flex-col">
          <span class="block text-sm font-medium text-slate-700 py-2"
            >تاريخ التأسيس</span
          >
          <input
            type="date"
            v-model="lastRenewalDate"
            class="rounded-md shadow-lg p-3 placeholder: text-sm"
            placeholder="سنة/شهر/يوم"
          />
        </label>
        <label class="flex flex-col">
          <span class="block text-sm font-medium text-slate-700 py-2">
            رقم تصريح مزاولة النشاط
          </span>

          <input
            type="text"
            v-model="permitNumber"
            class="rounded-md shadow-lg p-3 placeholder: text-sm"
            placeholder="رقم تصريح مزاولة النشاط"
          />
        </label>
        <label class="flex flex-col">
          <span class="block text-sm font-medium text-slate-700 py-2"
            >تاريخ إصداره</span
          >
          <input
            type="date"
            v-model="permitDate"
            class="rounded-md shadow-lg p-3 placeholder: text-sm"
            placeholder="سنة/شهر/يوم"
          />
        </label>
      </form>
      <form
        class="grid lg:grid lg:grid-cols-3 gap-5 text-xl border-b border-gray-300 py-5 pb-12"
      >
        <label class="flex flex-col">
          <span class="block text-sm font-medium text-slate-700 py-2"
            >مجال عمل المؤسسة</span
          >
          <input
            type="text"
            v-model="fieldWork"
            class="rounded-md shadow-lg p-3 placeholder: text-sm"
            placeholder="مجال عمل المؤسسة"
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
        <label class="flex flex-col">
          <span class="block text-sm font-medium text-slate-700 py-2"
            >الموقع الإلكتروني إن وجد</span
          >
          <input
            type="text"
            v-model="webSite"
            class="rounded-md shadow-lg p-3 placeholder: text-sm"
            placeholder="الموقع الإلكتروني إن وجد"
          />
        </label>
      </form>
      <form
        class="grid lg:grid lg:grid-cols-3 gap-5 text-xl border-b border-gray-300 py-5 pb-12"
      >
        <label class="flex flex-col">
          <label class="block text-sm font-medium text-slate-700 py-2"
            >المحافظة
          </label>
          <select v-model="stateSelected">
            <option
              v-for="state in states"
              :key="state.name"
              v-bind:value="state.id"
            >
              {{ state.name }}
            </option>
          </select>
          <div class="dropdown bg-white rounded-lg mt-12 mr-24 w-44"></div>
        </label>
        <label class="flex flex-col">
          <span class="text-sm font-medium text-slate-700 py-2"
            >تاريخ تجديد الترخيص</span
          >
          <input
            type="date"
            v-model="DateRe"
            class="rounded-md shadow-lg p-3 placeholder: text-sm"
            placeholder="سنة/شهر/يوم"
          />
        </label>
        <label class="flex flex-col">
          <span class="block text-sm font-medium text-slate-700 py-2"
            >هاتف المؤسسة</span
          >
          <input
            type="text"
            v-model="Phone"
            class="rounded-md shadow-lg p-3 placeholder: text-sm"
            placeholder="هاتف المؤسسة"
          />
        </label>
      </form>
      <div class="mt-6 flex flex-row">
        <!-- <div class="">
          <input
            type="checkbox"
            true-value="مرخصة"
            false-value='غير مرخصة'
            v-model="isActive"
          />
          <span class="p-3">مرخصة أو غير مرخصة</span>
        </div> -->
        <label class="flex flex-col">
          <span class="block text-sm font-medium text-slate-700 py-2">
            محلية/دولية
          </span>
          <select v-model="localOrInternational" class="w-64 py-1">
            <option v-bind:value="'محلية'">محلية</option>
            <option v-bind:value="'دولية'">دولية</option>
          </select>
        </label>
      </div>
      <br />
      <!-- <form class="border border-black flex flex-col items-center">
        <span class="">شعار المؤسسة</span>
        <div class="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-48 w-48"
            viewBox="0 0 306.068 247.233"
          >
            <path
              id="image-svgrepo-com"
              d="M306.568,26.976V229.257c0,18.88-3.9,22.476-22.955,22.476H23.455C4.548,251.733.5,248.287.5,229.257V26.976C.5,8.546,4.1,4.5,23.455,4.5H283.613C302.589,4.5,306.568,7.722,306.568,26.976ZM36.539,199.29H270.375c-25.557-36.486-71-97.32-82.554-97.32-11.179,0-49.124,49.154-66.271,66.453,0,0-22.045-28.851-33.6-28.851C76.183,139.572,36.922,198.99,36.539,199.29Zm68.7-127.362c0-15.283-12.618-27.638-28.227-27.638S48.79,56.644,48.79,71.927,61.407,99.565,77.017,99.565,105.244,87.211,105.244,71.927Z"
              transform="translate(-0.5 -4.5)"
              fill="#525f7f"
            />
          </svg>
        </div>
        
      </form> -->
    </form>
    <!--بيانات مقر المركز الرئيسي -->
    <form class="mt-12">
      <div class="border bg-white">
        <div class="bg-[#f7fafc] px-6 mt-4 py-5 snap-x">
          <span class="p-2 text-xs">البيانات مقر المركز الرئيسي</span>
          <form
            class="flex flex-row text-xl pb-12 border-b border-gray-300 py-5 scroll-ml-6 snap-x overflow-x-scroll space-x-16"
          >
            <label class="flex flex-col">
              <label class="block text-sm font-medium text-slate-700 py-2 w-64">
                المحافظة
              </label>
              <select @change="getCities" v-model="mainCenter[0].state">
                <option
                  v-for="state in states"
                  :key="state.name"
                  v-bind:value="state._id"
                >
                  {{ state.name }}
                </option>
              </select>
            </label>
            <label class="flex flex-col">
              <label
                class="block text-sm font-medium text-slate-700 py-2 mr-12"
              >
                المديرية
              </label>
              <select v-model="mainCenter[0].city" class="w-64 mr-5">
                <option
                  v-for="city in dd"
                  :key="city.state.id"
                  v-bind:value="city._id"
                >
                  {{ city.name }}
                </option>
              </select>
            </label>

            <label class="flex flex-col scroll-ml-6">
              <span class="block text-sm font-medium text-slate-700 py-2"
                >الشارع</span
              >
              <input
                id="Type"
                type="text"
                v-model="mainCenter[0].street"
                class="rounded-md shadow-lg p-3 placeholder: text-sm"
                placeholder="الشارع"
              />
            </label>
            <label class="flex flex-col scroll-ml-6">
              <span class="block text-sm font-medium text-slate-700 py-2"
                >نوع المبنى</span
              >
              <input
                id="DateF"
                type="text"
                v-model="mainCenter[0].buildingType"
                class="rounded-md shadow-lg p-3 placeholder: text-sm"
                placeholder="نوع المبنى"
              />
            </label>
            <label class="flex flex-col">
              <span class="block text-sm font-medium text-slate-700 py-2">
                مبنى المقر ملك /إيجار
              </span>
              <select v-model="mainCenter[0].ownOrRent" class="w-52">
                <option v-bind:value="'ملك'">ملك</option>
                <option v-bind:value="'إيجار'">إيجار</option>
              </select>
            </label>
          </form>
        </div>
      </div>
    </form>
    <!-- الفروع و المكاتب التابعة للمؤسسة-->
    <form class="mt-12">
      <div class="border bg-white">
        <div class="bg-[#f7fafc] px-6 mt-4 py-5 snap-x shadow-md pb-16">
          <span class="p-2 text-xs">الفروع و المكاتب التابعة للمؤسسة</span>
          <form
            class="text-xl border-gray-300 py-5 scroll-ml-6 snap-x overflow-x-scroll"
          >
            <table class="text-sm t text-gray-400 dark:text-gray-400">
              <thead
                class="text-sm text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400 border-t text-right"
              >
                <tr>
                  <th scope="col" class="py-3 px-3 font-light">#</th>
                  <th scope="col" class="py-3 px-16 font-light">الأسم الفرع</th>
                  <th scope="col" class="py-3 px-16 font-light">
                    تاريخ الإنشاء
                  </th>
                  <th scope="col" class="py-3 px-16 border font-light">
                    رقم التصريح
                  </th>
                  <th scope="col" class="py-3 px-16 font-light">المحافظة</th>
                  <th scope="col" class="py-3 px-16 font-light">المديرية</th>
                  <th scope="col" class="py-3 px-16 font-light">الشارع</th>
                  <th scope="col" class="py-3 px-16 font-light">
                    مبنى المقر ملك/إيجار
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, k) in branche" :key="k"
                 class="border-t dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white float-right pr-3"
                  >
                    #
                  </th>
                  <td class="px-16 py-3">
                    <input
                      id="Type"
                      type="email"
                      v-model="branche[0].name"
                      class="rounded-md shadow-md p-3 placeholder: text-sm border"
                      placeholder="أسم الفرع"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      id="Type"
                      type="date"
                      v-model="branche[0].dateCreated"
                      class="rounded-md shadow-md p-3 placeholder: text-sm border"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      id="Type"
                      type="text"
                      v-model="branche[0].permitNumber"
                      class="rounded-md shadow-md p-2 placeholder:text-sm"
                      placeholder="رقم التصريح"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <select
                      @change="getCities2"
                      v-model="branche[0].state"
                      class="w-64 mr-5"
                    >
                      <option
                        v-for="state in states"
                        :key="state.name"
                        v-bind:value="state.id"
                      >
                        {{ state.name }}
                      </option>
                    </select>
                  </td>
                  <td class="px-16 py-3">
                    <select v-model="branche[0].city" class="w-64 mr-5">
                      <option
                        v-for="city in cc"
                        :key="city.state.id"
                        v-bind:value="city._id"
                      >
                        {{ city.name }}
                      </option>
                    </select>
                  </td>
                  <td class="px-16 py-3">
                    <input
                      id="Type"
                      type="text"
                      v-model="branche[0].street"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                      placeholder="الشارع"
                    />
                  </td>
                  <td class="px-16">
                    <select v-model="branche[0].ownOrRent" class="w-52">
                      <option v-bind:value="'ملك'">ملك</option>
                      <option v-bind:value="'إيجار'">إيجار</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="mt-3">
              <button
                @click="addNewRow()"
                class="bg-transparent border border-[#5e72e4] text-[#5e72e4] hover:bg-[#5e72e4] hover:text-white py-3 px-6 rounded-lg text-center text-sm"
              >
                إضافة
              </button>
            </div>
          </form>
        </div>
      </div>
    </form>
    <!-- المرافق و المراكز التابعة للمؤسسة-->
    <form class="mt-12">
      <div class="border bg-white">
        <div class="bg-[#f7fafc] px-6 mt-4 py-5 snap-x shadow-md pb-16">
          <span class="p-2 text-xs">المرافق و المراكز التابعة للمؤسسة</span>
          <form
            class="text-xl border-gray-300 py-5 scroll-ml-6 snap-x overflow-x-scroll"
          >
            <table class="text-sm text-left text-gray-400 dark:text-gray-400">
              <thead
                class="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400 border-t text-right"
              >
                <tr>
                  <th scope="col" class="py-3 px-3 font-light">#</th>
                  <th scope="col" class="py-3 px-16 font-light">
                    أسم المرفق/المركز
                  </th>
                  <th scope="col" class="py-3 px-16 font-light">نوع النشاط</th>
                  <th scope="col" class="py-3 px-16 border font-light">
                    المحافظة
                  </th>
                  <th scope="col" class="py-3 px-16 font-light">
                    تاريخ الإنشاء
                  </th>
                  <th scope="col" class="py-3 px-16 font-light">الهاتف</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, k) in facilitiesAndCenter" :key="k"
                 class="border-t dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white float-right pr-3"
                  >
                    #
                  </th>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="facilitiesAndCenter[0].name"
                      class="rounded-md shadow-md p-3 placeholder: text-sm border"
                      placeholder="أسم المرفق /المركز"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="facilitiesAndCenter[0].activityType"
                      class="rounded-md shadow-md p-3 placeholder: text-sm border"
                      placeholder="نوع النشاط"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <select
                      v-model="facilitiesAndCenter[0].state"
                      class="w-64 text-lg py-1"
                    >
                      <option
                        v-for="state in states"
                        :key="state.name"
                        v-bind:value="state.id"
                      >
                        {{ state.name }}
                      </option>
                    </select>
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="date"
                      v-model="facilitiesAndCenter[0].dateCreated"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="facilitiesAndCenter[0].phone"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                      placeholder="الهاتف"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="mt-3">
              <button
                @click="addNewRow2()"
                class="bg-transparent border border-[#5e72e4] text-[#5e72e4] hover:bg-[#5e72e4] hover:text-white py-3 px-6 rounded-lg text-center text-sm"
              >
                إضافة
              </button>
            </div>
          </form>
        </div>
      </div>
    </form>
    <!-- بيانات المؤسسين-->
    <form class="mt-12">
      <div class="border bg-white">
        <div class="bg-[#f7fafc] px-6 mt-4 py-5 snap-x shadow-md pb-16">
          <span class="p-2 text-xs">بيانات المؤسسين</span>
          <form
            class="text-xl border-gray-300 py-5 scroll-ml-6 snap-x overflow-x-scroll"
          >
            <table class="text-sm text-left text-gray-400 dark:text-gray-400">
              <thead
                class="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400 border-t text-right"
              >
                <tr>
                  <th scope="col" class="py-3 px-3 font-light">#</th>
                  <th scope="col" class="py-3 px-16 font-light">
                    الأسم رباعيا
                  </th>
                  <th scope="col" class="py-3 px-16 font-light">
                    مكان الميلاد
                  </th>
                  <th scope="col" class="py-3 px-16 border font-light">
                    تاريخ الميلاد
                  </th>
                  <th scope="col" class="py-3 px-16 font-light">
                    مكان الإقامة
                  </th>
                  <th scope="col" class="py-3 px-16 font-light">الوظيفة</th>
                  <th scope="col" class="py-3 px-16 font-light">المؤهل</th>
                  <th scope="col" class="py-3 px-16 font-light">الهاتف</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, k) in founder" :key="k"
                 class="border-t dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white float-right pr-3"
                  >
                    #
                  </th>
                  <td class="px-16 py-3">
                    <input
                      id="Type"
                      type="text"
                      v-model="founder[0].name"
                      class="rounded-md shadow-md p-3 placeholder: text-sm border"
                      placeholder="الأسم رباعيا"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="founder[0].placeOfBirth"
                      class="rounded-md shadow-md p-3 placeholder: text-sm border"
                      placeholder="مكان الميلاد"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="date"
                      v-model="founder[0].dateOfBrith"
                      class="rounded-md shadow-md border w-44 py-1 placeholder: text-lg"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="founder[0].currentPlace"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                      placeholder="مكان الإقامة"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="founder[0].job"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                      placeholder="الوظيفة"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="founder[0].gualification"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                      placeholder="المؤهل"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="founder[0].phone"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                      placeholder="الهاتف"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="mt-3">
              <button
                @click="addNewRow3()"
                class="bg-transparent border border-[#5e72e4] text-[#5e72e4] hover:bg-[#5e72e4] hover:text-white py-3 px-6 rounded-lg text-center text-sm"
              >
                إضافة
              </button>
            </div>
          </form>
        </div>
      </div>
    </form>
    <!-- بيانات مجلس الأمناء-->
    <form class="mt-12">
      <div class="border bg-white">
        <div class="bg-[#f7fafc] px-6 mt-4 py-5 snap-x shadow-md pb-16">
          <span class="p-2 text-xs">بيانات مجلس الأمناء</span>
          <form
            class="text-xl border-gray-300 py-5 scroll-ml-6 snap-x overflow-x-scroll"
          >
            <table class="text-sm text-left text-gray-400 dark:text-gray-400">
              <thead
                class="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400 border-t text-right"
              >
                <tr>
                  <th scope="col" class="py-3 px-3 font-light">#</th>
                  <th scope="col" class="py-3 px-16 font-light">
                    الأسم رباعيا
                  </th>
                  <th scope="col" class="py-3 px-16 font-light">
                    مكان الميلاد
                  </th>
                  <th scope="col" class="py-3 px-16 border font-light">
                    تاريخ الميلاد
                  </th>
                  <th scope="col" class="py-3 px-16 font-light">
                    مكان الإقامة
                  </th>
                  <th scope="col" class="py-3 px-16 font-light">الوظيفة</th>
                  <th scope="col" class="py-3 px-16 font-light">
                    الصفة في المؤسسة
                  </th>
                  <th scope="col" class="py-3 px-16 font-light">الهاتف</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, k) in boardOfTruste" :key="k" 
                class="border-t dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white float-right pr-3"
                  >
                    #
                  </th>
                  <td class="px-16 py-3">
                    <input
                      id=""
                      type="text"
                      v-model="boardOfTruste[0].name"
                      class="rounded-md shadow-md p-3 placeholder: text-sm border"
                      placeholder="الأسم رباعيا"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      id=""
                      type="text"
                      v-model="boardOfTruste[0].placeOfBirth"
                      class="rounded-md shadow-md p-3 placeholder: text-sm border"
                      placeholder="مكان الميلاد"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="date"
                      v-model="boardOfTruste[0].dateOfBirth"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="boardOfTruste[0].currentPlace"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                      placeholder="مكان الإقامة"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="boardOfTruste[0].job"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                      placeholder="الوظيفة"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="boardOfTruste[0].adjective"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                      placeholder="الصفة في المؤسسة"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="boardOfTruste[0].phone"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                      placeholder="الهاتف"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="mt-3">
              <button
                @click="addNewRow4()"
                class="bg-transparent border border-[#5e72e4] text-[#5e72e4] hover:bg-[#5e72e4] hover:text-white py-3 px-6 rounded-lg text-center text-sm"
              >
                إضافة
              </button>
            </div>
          </form>
        </div>
      </div>
    </form>
    <!-- بيانات لجنة الرقابة-->
    <form class="mt-12">
      <div class="border bg-white">
        <div class="bg-[#f7fafc] px-6 mt-4 py-5 snap-x shadow-md pb-16">
          <span class="p-2 text-xs">بيانات لجنة االرقابة</span>
          <form
            class="text-xl border-gray-300 py-5 scroll-ml-6 snap-x overflow-x-scroll"
          >
            <table class="text-sm text-left text-gray-400 dark:text-gray-400">
              <thead
                class="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400 border-t text-right"
              >
                <tr>
                  <th scope="col" class="py-3 px-3 font-light">#</th>
                  <th scope="col" class="py-3 px-16 font-light">
                    الأسم رباعيا
                  </th>
                  <th scope="col" class="py-3 px-16 font-light">
                    مكان الميلاد
                  </th>
                  <th scope="col" class="py-3 px-16 border font-light">
                    تاريخ الميلاد
                  </th>
                  <th scope="col" class="py-3 px-16 font-light">
                    مكان الإقامة الحالية
                  </th>
                  <th scope="col" class="py-3 px-16 font-light">الوظيفة</th>
                  <th scope="col" class="py-3 px-16 font-light">
                    الصفة في المنظمة
                  </th>
                  <th scope="col" class="py-3 px-16 font-light">الهاتف</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, k) in oversightCommitte" :key="k" 
                 class="border-t dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white float-right pr-3"
                  >
                    #
                  </th>
                  <td class="px-16 py-3">
                    <input
                      id="Type"
                      type="text"
                      v-model="oversightCommitte[0].name"
                      class="rounded-md shadow-md p-3 placeholder: text-sm border"
                      placeholder="الأسم رباعيا"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      id="Type"
                      type="text"
                      v-model="oversightCommitte[0].placeOfBirth"
                      class="rounded-md shadow-md p-3 placeholder: text-sm border"
                      placeholder="مكان الميلاد"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="date"
                      v-model="oversightCommitte[0].dateOfBirth"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="oversightCommitte[0].currentPlace"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                      placeholder="مكان الإقامة"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="oversightCommitte[0].job"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                      placeholder="الوظيفة"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="oversightCommitte[0].adjective"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                      placeholder="الصفة في المنظمة"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="oversightCommitte[0].phone"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                      placeholder="الهاتف"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="mt-3">
              <button
                @click="addNewRow5()"
                class="bg-transparent border border-[#5e72e4] text-[#5e72e4] hover:bg-[#5e72e4] hover:text-white py-3 px-6 rounded-lg text-center text-sm"
              >
                إضافة
              </button>
            </div>
          </form>
        </div>
      </div>
    </form>
    <!-- إحصائية العاملين بالمؤسسة-->
    <form  class="mt-12">
      <div class="border bg-white">
        <div class="bg-[#f7fafc] px-6 mt-4 py-5 snap-x shadow-md pb-16">
          <span class="p-2 text-xs">إحصائية العاملين بالمؤسسة</span>
          <form
            class="text-xl border-gray-300 py-5 scroll-ml-6 snap-x overflow-x-scroll"
          >
            <table class="text-sm text-left text-gray-400 dark:text-gray-400">
              <thead
                class="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400 border-t text-right"
              >
                <tr>
                  <th scope="col" class="py-3 px-3 font-light text-gray-400">
                    #
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    الأسم
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    العدد
                  </th>
                  <th
                    scope="col"
                    class="py-3 px-16 border font-light text-gray-400"
                  >
                    الذكور
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    الإناث
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    الملاحظات
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-t dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white float-right pr-3"
                  >
                    #
                  </th>
                  <td class="px-16 text-right py-3 text-gray-600">الموظفين</td>
                  <td class="px-16 py-3">
                    <input
                      id="Type"
                      type="text"
                      v-model="totalMale"
                      class="rounded-md shadow-md p-3 placeholder: text-sm border"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="number"
                      v-model="employeeStats[0].maleStaff"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="number"
                      v-model="employeeStats[0].felameStaff"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="employeeStats[0].noteStaff"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                    />
                  </td>
                </tr>
                <tr class="border-t dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white float-right pr-3"
                  >
                    #
                  </th>
                  <td class="px-16 text-right py-3 text-gray-600">
                    المتعاقدين
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="number2"
                      class="rounded-md shadow-md p-3 placeholder: text-sm border"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="number"
                      v-model="employeeStats[0].maleContractors"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="number"
                      v-model="employeeStats[0].femaleContractors"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="employeeStats[0].noteContractors"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                    />
                  </td>
                </tr>
                <tr class="border-t dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white float-right pr-3"
                  >
                    #
                  </th>
                  <td class="px-16 text-right py-3 text-gray-600">المتطوعين</td>
                  <td class="px-16 py-3">
                    <input
                      id="Type"
                      type="text"
                      v-model="number3"
                      class="rounded-md shadow-md p-3 placeholder: text-sm border"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="number"
                      v-model="employeeStats[0].maleVolunteers"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="number"
                      v-model="employeeStats[0].femaleVolunteers"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="employeeStats[0].noteVolunteers"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                    />
                  </td>
                </tr>
                <tr class="border-t dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white float-right pr-3"
                  >
                    #
                  </th>
                  <td class="px-16 text-right py-3 text-gray-600">أخرى</td>
                  <td class="px-16 py-3">
                    <input
                      id="Type"
                      type="text"
                      v-model="number4"
                      class="rounded-md shadow-md p-3 placeholder: text-sm border"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="number"
                      v-model="employeeStats[0].maleOthers"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="number"
                      v-model="employeeStats[0].femaleOthers"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="employeeStats[0].noteOther"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </form>
    <!-- اللجان الدائمة التابعة للمؤسسة-->
    <form class="mt-12">
      <div class="border bg-white">
        <div class="bg-[#f7fafc] px-6 mt-4 py-5 snap-x shadow-md pb-16">
          <span class="p-2 text-xs">اللجان الدائمة التابعة للمؤسسة</span>
          <form
            class="text-xl border-gray-300 py-5 scroll-ml-6 snap-x overflow-x-scroll"
          >
            <table class="text-sm text-left text-gray-400 dark:text-gray-400">
              <thead
                class="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400 border-t text-right"
              >
                <tr>
                  <th scope="col" class="py-3 px-3 font-light text-gray-400">
                    #
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    أسم اللجنة
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    عدد الأعضاء
                  </th>
                  <th
                    scope="col"
                    class="py-3 px-16 border font-light text-gray-400"
                  >
                    عدد الذكور
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    عدد الإناث
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    الملاحظات
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, k) in standingCommitte" :key="k"  
                class="border-t dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white float-right pr-3"
                  >
                    #
                  </th>
                  <td class="px-16 text-right py-3 text-gray-600">
                    <input
                      id="Type"
                      type="text"
                      v-model="standingCommitte[0].name"
                      class="rounded-md shadow-md p-3 placeholder: text-sm border"
                      placeholder="أسم اللجنة"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      id="Type"
                      type="text"
                      v-model="standingCommitte[0].number"
                      class="rounded-md shadow-md p-3 placeholder: text-sm border"
                      placeholder="عدد الأعضاء"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="standingCommitte[0].countMale"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                      placeholder="عدد الذكور"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="standingCommitte[0].countFemale"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                      placeholder="عدد الإناث"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="standingCommitte[0].note"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                      placeholder="الملاحظات"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="mt-3">
              <button
                @click=" addNewRow6()"
                class="bg-transparent border border-[#5e72e4] text-[#5e72e4] hover:bg-[#5e72e4] hover:text-white py-3 px-6 rounded-lg text-center text-sm"
              >
                إضافة
              </button>
            </div>
          </form>
        </div>
      </div>
    </form>
    <!-- الأنشطة و المشاريع الممولة ذاتيا أو من أشخاص أو جهات محلية-->
    <form class="mt-12">
      <div class="border bg-white">
        <div class="bg-[#f7fafc] px-6 mt-4 py-5 snap-x shadow-md pb-16">
          <span class="p-2 text-xs"
            >الانشطة والمشاريع الممولة ذاتيا او من اشخاص او جهات محلية
            يمني</span
          >
          <form
            class="text-xl border-gray-300 py-5 scroll-ml-6 snap-x overflow-x-scroll"
          >
            <table class="text-sm text-left text-gray-400 dark:text-gray-400">
              <thead
                class="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400 border-t text-right"
              >
                <tr>
                  <th scope="col" class="py-3 px-3 font-light text-gray-400">
                    #
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    أسم المشروع
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    جهة التمويل
                  </th>
                  <th
                    scope="col"
                    class="py-3 px-16 border font-light text-gray-400"
                  >
                    المستفيدون
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    مكان التنفيذ
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    فترة التنفيذ
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    تكلفة المشروع
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, k) in projectsByPeople" :key="k"  
                 class="border-t dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white float-right pr-3"
                  >
                    #
                  </th>
                  <td class="px-16 text-right py-3 text-gray-600">
                    <input
                      id="Type"
                      type="text"
                      v-model="projectsByPeople[0].name"
                      class="rounded-md shadow-md p-3 placeholder: text-sm border"
                      placeholder="أسم المشروع"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      id="Type"
                      type="text"
                      v-model="projectsByPeople[0].fundingSource"
                      class="rounded-md shadow-md p-3 placeholder: text-sm border"
                      placeholder="جهة التمويل"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="projectsByPeople[0].beneficiaries"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                      placeholder="المستفيدون"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="projectsByPeople[0].executionPlace"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                      placeholder="مكان التنفيذ"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="projectsByPeople[0].executionTime"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                      placeholder="فترة التنفيذ"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="projectsByPeople[0].costProject"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                      placeholder="تكلفة المشروع"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="mt-3">
              <button
                @click="addNewRow7()"
                class="bg-transparent border border-[#5e72e4] text-[#5e72e4] hover:bg-[#5e72e4] hover:text-white py-3 px-6 rounded-lg text-center text-sm"
              >
                إضافة
              </button>
            </div>
          </form>
        </div>
      </div>
    </form>
    <!-- الأنشطة و المشاريع الممولة من أشخاص أو جهات عربية/أجنبية-->
    <form class="mt-12">
      <div class="border bg-white">
        <div class="bg-[#f7fafc] px-6 mt-4 py-5 snap-x shadow-md pb-16">
          <span class="p-2 text-xs"
            >الانشطة والمشاريع الممولة من أشخاص أو جهات عربية/أجنبية</span
          >
          <form
            class="text-xl border-gray-300 py-5 scroll-ml-6 snap-x overflow-x-scroll"
          >
            <table class="text-sm text-left text-gray-400 dark:text-gray-400">
              <thead
                class="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400 border-t text-right"
              >
                <tr>
                  <th scope="col" class="py-3 px-3 font-light text-gray-400">
                    #
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    أسم المشروع
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    جهة التمويل
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    عدد المستفيدون
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    مكان التنفيذ
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    فترة التنفيذ
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    تكلفة المشروع
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, k) in activitiesAndProjectsByOthersOrganization" :key="k"  
                 class="border-t dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white float-right pr-3"
                  >
                    #
                  </th>
                  <td class="px-16 text-right py-3 text-gray-600">
                    <input
                      id="Type"
                      type="text"
                      v-model="
                        activitiesAndProjectsByOthersOrganization[0].name
                      "
                      class="rounded-md shadow-md p-3 placeholder: text-sm border"
                      placeholder="أسم المشروع"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      id="Type"
                      type="text"
                      v-model="
                        activitiesAndProjectsByOthersOrganization[0]
                          .fundingSourceAndNationality
                      "
                      class="rounded-md shadow-md p-3 placeholder: text-sm border"
                      placeholder="جهة التمويل"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="
                        activitiesAndProjectsByOthersOrganization[0]
                          .numberBeneficiaries
                      "
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                      placeholder="عدد المستفيدون"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="
                        activitiesAndProjectsByOthersOrganization[0]
                          .executionPlace
                      "
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                      placeholder=" مكان التنفيذ"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="
                        activitiesAndProjectsByOthersOrganization[0]
                          .executionTime
                      "
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                      placeholder="فترة التنفيذ"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="
                        activitiesAndProjectsByOthersOrganization[0].costProject
                      "
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                      placeholder="تكلفة المشروع"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="mt-3">
              <button
                @click="addNewRow8()"
                class="bg-transparent border border-[#5e72e4] text-[#5e72e4] hover:bg-[#5e72e4] hover:text-white py-3 px-6 rounded-lg text-center text-sm"
              >
                إضافة
              </button>
            </div>
          </form>
        </div>
      </div>
    </form>
    <!-- مشاريع المؤسسة-->
    <form class="mt-12">
      <div class="border bg-white">
        <div class="bg-[#f7fafc] px-6 mt-4 py-5 snap-x shadow-md pb-16">
          <span class="p-2 text-xs">مشاريع المؤسسة</span>
          <form
            class="text-xl border-gray-300 py-5 scroll-ml-6 snap-x overflow-x-scroll"
          >
            <table class="text-sm text-left text-gray-400 dark:text-gray-400">
              <thead
                class="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400 border-t text-right"
              >
                <tr>
                  <th scope="col" class="py-3 px-3 font-light text-gray-400">
                    #
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    أسم المشروع
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    مكان التنفيذ
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    المستفيدون
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    ميزانية المشروع
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    جهة التمويل
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, k) in organizationProject" :key="k"  
                 class="border-t dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white float-right pr-3"
                  >
                    #
                  </th>
                  <td class="px-16 text-right py-3 text-gray-600">
                    <input
                      id="Type"
                      type="text"
                      v-model="organizationProject[0].name"
                      class="rounded-md shadow-md p-3 placeholder: text-sm border"
                      placeholder="أسم المشروع"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      id="Type"
                      type="text"
                      v-model="organizationProject[0].ExecutionPlace"
                      class="rounded-md shadow-md p-3 placeholder: text-sm border"
                      placeholder="مكان التنفيذ"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="organizationProject[0].beneficiaries"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                      placeholder="المستفيدون"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="organizationProject[0].costProject"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                      placeholder="ميزانية المشروع"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="organizationProject[0].fundingSource"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                      placeholder="جهة التمويل"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="mt-3">
              <button
                @click="addNewRow9()"
                class="bg-transparent border border-[#5e72e4] text-[#5e72e4] hover:bg-[#5e72e4] hover:text-white py-3 px-6 rounded-lg text-center text-sm"
              >
                إضافة
              </button>
            </div>
          </form>
        </div>
      </div>
    </form>
    <!-- الحسابات البنكية-->
    <form  class="mt-12">
      <div class="border bg-white">
        <div class="bg-[#f7fafc] px-6 mt-4 py-5 snap-x shadow-md pb-16">
          <span class="p-2 text-xs">الحسابات البنكية</span>
          <form
            class="text-xl border-gray-300 py-5 scroll-ml-6 snap-x overflow-x-scroll"
          >
            <table class="text-sm text-left text-gray-400 dark:text-gray-400">
              <thead
                class="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400 border-t text-right"
              >
                <tr>
                  <th scope="col" class="py-3 px-3 font-light text-gray-400">
                    #
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    أسم البنك
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    المركز الرئيسي /الفرع
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    رقم الحساب
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    العملة
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    الرصيد البنكي
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, k) in bankAccount" :key="k"  
                 class="border-t dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white float-right pr-3"
                  >
                    #
                  </th>
                  <td class="px-16 text-right py-3 text-gray-600">
                    <input
                      id="Type"
                      type="text"
                      v-model="bankAccount[0].bankName"
                      class="rounded-md shadow-md p-3 placeholder: text-sm border"
                      placeholder="أسم البنك"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="bankAccount[0].address"
                      class="rounded-md shadow-md p-3 placeholder: text-sm border"
                      placeholder="المركز الرئيسي/الفرع"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="bankAccount[0].numberAccount"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                      placeholder="رقم الحساب"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="bankAccount[0].currency"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                      placeholder="العملة"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="bankAccount[0].balance"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                      placeholder="الرصيد البنكي"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="mt-3">
              <button
                @click="addNewRow10()"
                class="bg-transparent border border-[#5e72e4] text-[#5e72e4] hover:bg-[#5e72e4] hover:text-white py-3 px-6 rounded-lg text-center text-sm"
              >
                إضافة
              </button>
            </div>
          </form>
        </div>
      </div>
    </form>
    <!-- الإيرادات-->
    <form class="mt-12">
      <div class="border bg-white">
        <div class="bg-[#f7fafc] px-6 mt-4 py-5 snap-x shadow-md pb-16">
          <span class="p-2 text-xs">الإيرادات</span>
          <form
            class="text-xl border-gray-300 py-5 scroll-ml-6 snap-x overflow-x-scroll"
          >
            <table class="text-sm text-left text-gray-400 dark:text-gray-400">
              <thead
                class="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400 border-t text-right"
              >
                <tr>
                  <th scope="col" class="py-3 px-3 font-light text-gray-400">
                    #
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    الإيرادات
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    مدين
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    دائن
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    ملاحظات
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, k) in revenue" :key="k"  
                 class="border-t dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white float-right pr-3"
                  >
                    #
                  </th>
                  <td class="px-16 text-right py-3 text-gray-600">
                    <input
                      id="Type"
                      type="text"
                      v-model="revenue[0].nameRevenue"
                      class="rounded-md shadow-md p-3 placeholder: text-sm border"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      id="Type"
                      type="text"
                      v-model="revenue[0].debit"
                      class="rounded-md shadow-md p-3 placeholder: text-sm border"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="total"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="revenue[0].note"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="mt-3">
              <button
                @click="addNewRow11()"
                class="bg-transparent border border-[#5e72e4] text-[#5e72e4] hover:bg-[#5e72e4] hover:text-white py-3 px-6 rounded-lg text-center text-sm"
              >
                إضافة
              </button>
            </div>
          </form>
        </div>
      </div>
    </form>
    <!--المصروفات -->
    <form class="mt-12">
      <div class="border bg-white">
        <div class="bg-[#f7fafc] px-6 mt-4 py-5 snap-x shadow-md pb-16">
          <span class="p-2 text-xs">المصروفات</span>
          <form
            class="text-xl border-gray-300 py-5 scroll-ml-6 snap-x overflow-x-scroll"
          >
            <table class="text-sm text-left text-gray-400 dark:text-gray-400">
              <thead
                class="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400 border-t text-right"
              >
                <tr>
                  <th scope="col" class="py-3 px-3 font-light text-gray-400">
                    #
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    المصروفات
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    مدين
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    دائن
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    ملاحظات
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, k) in expenditure" :key="k"
                 class="border-t dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white float-right pr-3"
                  >
                    #
                  </th>
                  <td class="px-16 text-right py-3 text-gray-600">
                    <input
                      type="text"
                      v-model="expenditure[0].nameExpenditure"
                      class="rounded-md shadow-md p-3 placeholder: text-sm border"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      v-model="expenditure[0].credit"
                      type="text"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="expenditure[0].note"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="mt-3">
              <button
                @click="addNewRow12()"
                class="bg-transparent border border-[#5e72e4] text-[#5e72e4] hover:bg-[#5e72e4] hover:text-white py-3 px-6 rounded-lg text-center text-sm"
              >
                إضافة
              </button>
            </div>
          </form>
        </div>
      </div>
    </form>
    <!-- الأشخاص و الجهات الداعمة و المانحة للمؤسسة-->
    <form class="mt-12">
      <div class="border bg-white">
        <div class="bg-[#f7fafc] px-6 mt-4 py-5 snap-x shadow-md pb-16">
          <span class="p-2 text-xs"
            >الأشخاص و الجهات الداعمة و المانحة للمؤسسة</span
          >
          <form class="text-xl border-gray-300 py-5 scroll-ml-6">
            <table class="text-sm text-left text-gray-400 dark:text-gray-400">
              <thead
                class="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400 border-t text-right"
              >
                <tr>
                  <th scope="col" class="py-3 px-3 font-light text-gray-400">
                    #
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    الجهة المانحة, الشركاء
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    جنسية الجهة
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, k) in peopleAndSupporting" :key="k" 
                class="border-t dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white float-right pr-3"
                  >
                    #
                  </th>
                  <td class="px-16 text-right py-3 text-gray-600">
                    <input
                      id="Type"
                      type="text"
                      v-model="peopleAndSupporting[0].nameSupportingStation"
                      class="rounded-md shadow-md p-3 placeholder: text-sm border"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      id="Type"
                      type="text"
                      v-model="peopleAndSupporting[0].nationality"
                      class="rounded-md shadow-md p-3 placeholder: text-sm border"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="mt-3">
              <button
                @click="addNewRow13()"
                class="bg-transparent border border-[#5e72e4] text-[#5e72e4] hover:bg-[#5e72e4] hover:text-white py-3 px-6 rounded-lg text-center text-sm"
              >
                إضافة
              </button>
            </div>
          </form>
        </div>
      </div>
    </form>
    <!--أهداف المؤسسة  -->
    <form class="mt-12">
      <div class="border bg-white">
        <div class="bg-[#f7fafc] px-6 mt-4 py-5 snap-x shadow-md pb-16">
          <span class="p-2 text-xs">أهداف المؤسسة</span>
          <form class="text-xl border-gray-300 py-5 scroll-ml-6">
            <table class="text-sm text-left text-gray-400 dark:text-gray-400">
              <thead
                class="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400 border-t text-right"
              >
                <tr>
                  <th scope="col" class="py-3 px-3 font-light text-gray-400">
                    #
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    أهداف المؤسسة
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, k) in organizationGoal" :key="k" 
                 class="border-t dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white float-right pr-3"
                  >
                    #
                  </th>
                  <td class="px-16 text-right py-3 text-gray-600">
                    <input
                      type="text"
                      v-model="organizationGoal[0].goal"
                      class="rounded-md shadow-md p-3 placeholder: text-sm border"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="mt-3">
              <button
                @click="addNewRow14()"
                class="bg-transparent border border-[#5e72e4] text-[#5e72e4] hover:bg-[#5e72e4] hover:text-white py-3 px-6 rounded-lg text-center text-sm"
              >
                إضافة
              </button>
            </div>
          </form>
        </div>
      </div>
    </form>
    <!-- لوائح المؤسسة-->
    <form class="mt-12">
      <div class="border bg-white">
        <div class="bg-[#f7fafc] px-6 mt-4 py-5 snap-x shadow-md pb-16">
          <span class="p-2 text-xs">لوائح المؤسسة</span>
          <form
            class="text-xl border-gray-300 py-5 scroll-ml-6 snap-x overflow-x-scroll"
          >
            <table class="text-sm text-left text-gray-400 dark:text-gray-400">
              <thead
                class="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400 border-t text-right"
              >
                <tr>
                  <th scope="col" class="py-3 px-3 font-light text-gray-400">
                    #
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    اللوائح
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    متوفرة
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    عدد الأبواب
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    عدد الفصول
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    عدد المواد
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    ملاحظات
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, k) in organizationRegulation" :key="k"  
                class="border-t dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white float-right pr-3"
                  >
                    #
                  </th>
                  <td class="px-16 text-right py-3 text-gray-600">
                    <input
                      id="Type"
                      type="text"
                      v-model="organizationRegulation[0].regulation"
                      class="rounded-md shadow-md p-3 placeholder: text-sm border"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      id=""
                      type="checkbox"
                      true-value="متوفر"
                      false-value="غير متوفر"
                      v-model="organizationRegulation[0].isAvailable"
                      class="rounded-md shadow-md p-3 placeholder: text-sm border"
                    />
                  </td>
                  <!-- <td class="px-16 py-3">
                    <input
                      type="checkbox"
                      v-model="organizationRegulation[0].isNotAvaliable"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                    />
                  </td> -->
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="organizationRegulation[0].numberDoors"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="organizationRegulation[0].numberLuck"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="organizationRegulation[0].numberMaterial"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                    />
                  </td>
                  <td class="px-16 py-3">
                    <input
                      type="text"
                      v-model="organizationRegulation[0].note"
                      class="rounded-md shadow-md border px-3 py-1 placeholder: text-sm"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="mt-3">
              <button
                @click="addNewRow15()"
                class="bg-transparent border border-[#5e72e4] text-[#5e72e4] hover:bg-[#5e72e4] hover:text-white py-3 px-6 rounded-lg text-center text-sm"
              >
                إضافة
              </button>
            </div>
          </form>
        </div>
      </div>
    </form>
    <!-- الهيكل التنظيمي للمؤسسة-->
    <!-- <form class="mt-12">
      <div class="border bg-white">
        <div class="bg-[#f7fafc] px-6 mt-4 py-5 snap-x shadow-md pb-16">
          <span class="p-2 text-xs "
            >الهيكل التنظيمي للمؤسسة</span
          >
          <form class="text-xl border-gray-300 py-5 scroll-ml-6">
            <div class="flex flex-col items-center space-y-12">
              <span class="text-sm text-gray-500">أختر الملف</span>

              <input
                type="file"
                v-model="OrganizationalChar"
                class="text-sm text-gray-400 border border-white shadow-md bg-white p-3 rounded"
              />
            </div>
          </form>
          
        </div>
      </div>
    </form> -->
    <!-- المخاطر و التحديات-->
    <form class="mt-12">
      <div class="border bg-white">
        <div class="bg-[#f7fafc] px-6 mt-4 py-5 snap-x shadow-md pb-16">
          <span class="p-2 text-xs">المخاطر و التحديات</span>
          <form class="text-xl border-gray-300 py-5 scroll-ml-6">
            <table class="text-sm text-left text-gray-400 dark:text-gray-400">
              <thead
                class="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400 border-t text-right"
              >
                <tr>
                  <th scope="col" class="py-3 px-3 font-light text-gray-400">
                    #
                  </th>
                  <th scope="col" class="py-3 px-16 font-light text-gray-400">
                    المخاطر
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, k) in risks" :key="k"   
                class="border-t dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white float-right pr-3"
                  >
                    #
                  </th>
                  <td class="px-16 text-right py-3 text-gray-600">
                    <input
                      type="text"
                      v-model="risks[0].risk"
                      class="rounded-md shadow-md p-3 placeholder: text-sm border"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="mt-3">
              <div class=""></div>
              <button
                @click="addNewRow16()"
                class="bg-transparent border border-[#5e72e4] text-[#5e72e4] hover:bg-[#5e72e4] hover:text-white py-3 px-6 rounded-lg text-center text-sm"
              >
                إضافة
              </button>
            </div>
          </form>
          <div
            class="flex flex-row-reverse justify-center space-x-3 p-6 border-b border-t mt-6"
          >
            <button
              class="bg-[#5e72e4] py-2 px-4 rounded-lg text-white"
              @click="Edit()"
            >
              تعديل
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      rowData: [],
      city:{},
      nameAr: "",
      nameEn: "",
      type: "",
      lastRenewalDate: "",
      permitNumber: "",
      permitDate: "",
      fieldWork: "",
      email: "",
      webSite: "",
      stateSelected: "",
      DateRe: "",
      localOrInternational: "",
      Phone: "",
      isActive: "",
      stateSelected:"",

      mainCenter: [
        {
          city: "",
          street: "",
          buildingType: "",
          ownOrRent: "",
          state:"",
        },
      ],
      branche: [
        {
          name: "",
          dateCreated: "",
          permitNumber: "",
          street: "",
          ownOrRent: "",
          city: "",
          state:"",
        },
      ],
      facilitiesAndCenter: [
        {
          name: "",
          activityType: "",
          dateCreated: "",
          phone: "",
        },
      ],
      founder: [
        {
          name: "",
          placeOfBirth: "",
          dataOfBirth: "",
          currentPlace: "",
          job: "",
          gualification: "",
          phone: "",
        },
      ],
      boardOfTruste: [
        {
          name: "",
          placeOfBirth: "",
          dataOfBirth: "",
          currentPlace: "",
          job: "",
          adjective: "",
          phone: "",
        },
      ],
      oversightCommitte: [
        {
          name: "",
          placeOfBirth: "",
          dataOfBirth: "",
          currentPlace: "",
          job: "",
          adjective: "",
          phone: "",
        },
      ],
      employeeStats: [
        {
          maleStaff: "",
          felameStaff: "",
          noteStaff: "",
          maleContractor: "",
          femaleContractor: "",
          noteContractor: "",
          maleVolunteers: "",
          femaleVolunteers: "",
          noteVolunteers: "",
          maleOther: "",
          femaleOther: "",
          noteOther: "",
        },
      ],
      standingCommitte: [
        {
          name: "",
          countMale: "",
          countFemale: "",
          note: "",
        },
      ],
      projectsByPeople: [
        {
          name: "",
          fundingSource: "",
          beneficiaries: "",
          executionPlace: "",
          executionTime: "",
          costProject: "",
        },
      ],
      activitiesAndProjectsByOthersOrganization: [
        {
          name: "",
          fundingSourceAndNationality: "",
          numberBeneficiaries: "",
          executionPlace: "",
          executionTime: "",
          costProject: "",
        },
      ],
      organizationProject: [
        {
          name: "",
          fundingSource: "",
          beneficiaries: "",
          ExecutionPlace: "",
          costProject: "",
        },
      ],
      bankAccount: [
        {
          bankName: "",
          address: "",
          numberAccount: "",
          currency: "",
          balance: "",
        },
      ],
      revenue: [
        {
          nameRevenue: "",
          debit: "",
          note: "",
        },
      ],
      expenditure: [
        {
          nameExpenditure: "",
          credit: "",
          note: "",
        },
      ],
      peopleAndSupporting: [
        {
          nameSupportingStation: "",
          nationality: "",
        },
      ],
      organizationGoal: [
        {
          goal: "",
        },
      ],
      organizationRegulation: [
        {
          regulation: "",
          isAvailable: "",
          numberDoors: "",
          numberLuck: "",
          numberMaterial: "",
          note: "",
        },
      ],
      risks: [
        {
          risk: "",
        },
      ],
      states: [],
      cities: [],
      dd: [],
      cc: [],
      organization: [],
    };
  },
  created() {
    axios.get("http://localhost:3000/api/States").then((res) => {
      this.states = res.data.state;
    });
    axios.get("http://localhost:3000/api/cities").then((res) => {
      this.cities = res.data.cities;
    });
    const id = JSON.parse(localStorage.getItem('id'));
    console.log(id);
    axios.get(`http://localhost:3000/api/Organizations/${id}`).then((res) => {
      console.log(res);
        this.city= res.data.organization.city
        this.nameAr=res.data.organization.nameAr
        this.nameEn=res.data.organization.nameEn
        this.type= res.data.organization.type
        this.localOrInternational=res.data.organization.localOrInternational
        this.lastRenewalDate=res.data.organization.lastRenewalDate
        this.permitNumber=res.data.organization.permitNumber
        this.permitDate=res.data.organization.permitDate
        this.fieldWork =res.data.organization.fieldWork
        this.email=res.data.organization.email
        this.webSite=res.data.organization.webSite
        this.stateSelected=res.data.organization.stateSelected
        this.DateRe=res.data.organization.DateRe
        this.Phone=res.data.organization.Phone
        this.isActive=res.data.organization.isActive
        this.mainCenter=res.data.organization.mainCenter
        this.branche=res.data.organization.branche
        this.facilitiesAndCenter=res.data.organization.facilitiesAndCenter
        this.founder=res.data.organization.founder
        this.boardOfTruste=res.data.organization.boardOfTruste
        this.oversightCommitte=res.data.organization.oversightCommitte
        this.employeeStats=res.data.organization.employeeStats
        this.standingCommitte=res.data.organization.standingCommitte
        this.projectsByPeople=res.data.organization.projectsByPeople
        this.activitiesAndProjectsByOthersOrganization=res.data.organization.activitiesAndProjectsByOthersOrganization
        this.organizationProject=res.data.organization.organizationProject
        this.bankAccoun=res.data.organization.bankAccoun
        this.revenue=res.data.organization.revenue
        this.expenditure=res.data.organization.expenditure
        this.peopleAndSupporting=res.data.organization.peopleAndSupporting
        this.organizationGoal=res.data.organization.organizationGoal
        this.organizationRegulation=res.data.organization.organizationRegulation
        this.risks=res.data.organization.risks
      });
  },
  methods: {
    async Edit() {
        const id = JSON.parse(localStorage.getItem('id'));
        localStorage.clear();
         await axios
        .patch(`http://localhost:3000/api/Organizations/${id}`, {
          nameAr: this.nameAr,
          nameEn: this.nameEn,
          type: this.type,
          localOrInternational: this.localOrInternational,
          lastRenewalDate: this.lastRenewalDate,
          permitNumber: this.permitNumber,
          permitDate: this.permitDate,
          fieldWork: this.fieldWork,
          email: this.email,
          webSite: this.webSite,
          state: this.stateSelected,
          DateRe: this.DateRe,
          Phone: this.Phone,
          isActive: this.isActive,
          mainCenter: this.mainCenter,
          branche: this.branche,
          facilitiesAndCenter: this.facilitiesAndCenter,
          founder: this.founder,
          boardOfTruste: this.boardOfTruste,
          oversightCommitte: this.oversightCommitte,
          employeeStats: this.employeeStats,
          standingCommitte: this.standingCommitte,
          projectsByPeople: this.projectsByPeople,
          activitiesAndProjectsByOthersOrganization: this.activitiesAndProjectsByOthersOrganization,
          organizationProject: this.organizationProject,
          bankAccoun: this.bankAccoun,
          revenue: this.revenue,
          ExpenditureSchema: this.ExpenditureSchema,
          expenditure: this.expenditure,
          peopleAndSupporting: this.peopleAndSupporting,
          organizationGoal: this.organizationGoal,
          organizationRegulation: this.organizationRegulation,
          risks: this.risks,
        })
        .then((res) => {
          alert("تم تعديل المنظمة بنجاح");
          this.$router.push("/Organization");
        });
    },
    getCities() {
      this.dd = [];
      this.states.forEach((state) => {
        state.cities.forEach((element) => {
          if (state._id == this.mainCenter[0].state) {
            this.dd.push(element);
          }
        });
      });
    },
    getCities2() {
      this.cc = [];
      this.states.forEach((state) => {
        state.cities.forEach((element) => {
          if (state._id == this.branche[0].state) {
            this.cc.push(element);
          }
        });
      });
    },
    addNewRow() {
      this.branche.push({
        name: "",
        dateCreated: "",
        permitNumber: "",
        street: "",
        ownOrRent: "",
      });
    },
    addNewRow2() {
      this.facilitiesAndCenter.push({
        name: "",
        activityType: "",
        dateCreated: "",
        phone: "",
      });
    },
    addNewRow3() {
      this.founder.push({
       name: "",
        placeOfBirth: "",
        dataOfBirth: "",
        currentPlace: "",
        job: "",
        gualification: "",
        phone: "",
      });
    },
    addNewRow4() {
      this.boardOfTruste.push({
        name: "",
        placeOfBirth: "",
        dataOfBirth: "",
        currentPlace: "",
        job: "",
        adjective: "",
        phone: "",
      });
    },
    addNewRow5() {
      this.oversightCommitte.push({
        name: "",
        placeOfBirth: "",
        dataOfBirth: "",
        currentPlace: "",
        job: "",
        adjective: "",
        phone: "",
      });
    },
    addNewRow6() {
      this.standingCommitte.push({
        name: "",
        countMale: "",
        countFemale: "",
        note: "",
      });
    },
    addNewRow7() {
      this.projectsByPeople.push({
        name: "",
        fundingSource: "",
        beneficiaries: "",
        executionPlace: "",
        executionTime: "",
        costProject: "",
      });
    },
    addNewRow8() {
      this.activitiesAndProjectsByOthersOrganization.push({
        name: "",
        fundingSourceAndNationality: "",
        numberBeneficiaries: "",
        executionPlace: "",
        executionTime: "",
        costProject: "",
      });
    },
    addNewRow9() {
      this.organizationProject.push({
        name: "",
        fundingSource: "",
        beneficiaries: "",
        ExecutionPlace: "",
        costProject: "",
      });
    },
    addNewRow10() {
      this.bankAccount.push({
        bankName: "",
        address: "",
        numberAccount: "",
        currency: "",
        balance: "",
      });
    },
    addNewRow11() {
      this.revenue.push({
        nameRevenue: "",
        debit: "",
        note: "",
      });
    },
    addNewRow12() {
      this.expenditure.push({
        nameExpenditure: "",
        credit: "",
        note: "",
      });
    },
    addNewRow13() {
      this.peopleAndSupporting.push({
        nameSupportingStation: "",
        nationality: "",
      });
    },
    addNewRow14() {
      this.organizationGoal.push({
        goal: "",
      });
    },
    addNewRow15() {
      this.organizationRegulation.push({
        regulation: "",
        isAvailable: "",
        numberDoors: "",
        numberLuck: "",
        numberMaterial: "",
        note: "",
      });
    },
    addNewRow16() {
      this.risks.push({
       risk: "",
      });
    },
    
  },
};
</script>

<style></style>
