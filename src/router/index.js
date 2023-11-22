import { createRouter, createWebHashHistory } from "vue-router";
import Dashboard from "../components/Dashboard/Dashboard";
import AddOrgan from "../components/SideBarItems/AddOrgan";
import Registered from "../components/SideBarItems/Registered";
import NotRegistered from "../components/SideBarItems/NotRegistered";
import Activity from "../components/SideBarItems/Activity";
import Location from "../components/SideBarItems/Location";
import Users from "../components/SideBarItems/Users";
import Organization from "../components/SideBarItems/Organization";
import Main from "../components/Main";
import Screen from "../components/View/Screen";
import AddUsers from "../components/LocationItem/AddUsers";
import AddState from "../components/LocationItem/AddState";
import AddCity from "../components/LocationItem/AddCity";
import AddPage1 from "../components/OrganaItems/OrganaPages/AddPage1";
import EditUser from "../components/LocationItem/EditUser";
import EditState from "../components/LocationItem/EditState";
import EditPage from "../components/LocationItem/EditPage";





const routes = [
  {
    path: "/",
    component: Main,
    name:'تسجيل الدخول'
  },
  {
    path: "/Screen",
    component: Screen,
    name:'الرئيسية',
  
    children: [
      {
        path: "/Dashboard",
        component: Dashboard,
        name: 'لوحة التحكم'
      },
      {
        path: "/AddOrgan",
        component: AddOrgan,
        name: 'إضافة منظمة'
      },
      {
        path: "/Registered",
        component: Registered,
        name:'المنظمات المسجلة'
      },
      {
        path: "/NotRegistered",
        component: NotRegistered,
        name:'منظمات غير مسجلة'
      },
      {
        path: "/Activity",
        component: Activity,
        name:'تجديد مزاولة النشاط'
      },
      {
        path: "/Users",
        component: Users,
        name:'المستخدمين'
      },
      {
        path: "/Location",
        component: Location,
        name:'المواقع'
      },
      {
        path: "/Organization",
        component: Organization,
        name:'المنظمات'
      },
      {
        path:"/AddPage1",
        component: AddPage1,
        name:'اضافة منظمة-البيانات الأساسية'
      },
      
      {
        path:"/AddState",
        component: AddState,   
        name: 'إضافة محافظة'  
      },
      {
        path:"/AddCity",
        component: AddCity,   
        name: 'إضافة مديرية'
      },
      {
        path:"/AddUsers",
        component: AddUsers,
        name: 'إضافة مستخدم'
      },
      {
        path:"/EditUser",
        component: EditUser,
        name: 'تعديل مستخدم'
      },
      {
        path:"/EditState",
        component: EditState,
        name: 'تعديل محافظة'
      },
      {
        path:"/EditPage",
        component: EditPage,
        name: 'تعديل منظمة'
      },
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  mode:"history",
});
router.beforeEach((to, from , next) => {
  document.title =`${process.env.VUE_APP_TITLE} - ${to.name}`
  next();
  
})

export default router;
