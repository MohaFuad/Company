<template>
  <form @submit="handlesubmit" class="bg-[#004455] w-full lg:w-[82%] float-left">
    <div class=""> 
    </div>
    <router-view  />
  </form>
</template>

<script>
export default {
  components: {
  },
  name: "AddOrgan",
  data() {
    return {
      NameAr: "",
      NameEn: "",
      Type: "",
      DataF: "",
      ActiveNo: "",
      DataIssue: "",
      Employment: "",
      Email: "",
      WebSite: "",
      // City:'',
      DateRe: "",
      Phone: "",
    };
  },
  props:{

  },
  methods: {
    // async handlesubmit() {
    //   const data = await axios.post("http://localhost:3000/api/Organizations", {
    //     NameAr: this.NameAr,
    //     NameEn: this.NameEn,
    //     Type: this.Type,
    //     DataF: this.DataF,
    //     ActiveNo: this.ActiveNo,
    //     DataIssue: this.DataIssue,
    //     Employment: this.Employment,
    //     Email: this.Email,
    //     WebSite: this.WebSite,
    //     // City:this.City,
    //     DateRe: this.DateRe,
    //     Phone: this.Phone,
    //   });

    //   console.log(data);
    //   if (data) {
    //     alert("Worked");
    //     this.$router.push("/Location");
    //   }
    // },
  },
};
</script>

<style></style>
