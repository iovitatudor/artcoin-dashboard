import {createRouter, createWebHistory} from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Tables from "../views/Tables.vue";
import Billing from "../views/Billing.vue";
import Profile from "../views/Profile.vue";
import Signin from "../views/Signin.vue";
import AuthGuard from "@/guards/AuthGuard";
import GuestGuard from "@/guards/GuestGuard";
import Users from "@/views/Users/Users.vue";
import Specialists from "@/views/Specialists/Specialists.vue";
import Organizations from "@/views/Organizations/Organizations.vue";
import TaskTypes from "@/views/TaskTypes/TaskTypes.vue";
import UserEdit from "@/views/Users/UserEdit.vue";
import SpecialistsEdit from "@/views/Specialists/SpecialistsEdit.vue";
import TaskTypesEdit from "@/views/TaskTypes/TaskTypesEdit.vue";
import OrganizationsEdit from "@/views/Organizations/OrganizationsEdit.vue";

const routes = [
  {
    path: "/",
    name: "Signin",
    component: Signin,
    beforeEnter: GuestGuard,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    beforeEnter: AuthGuard,
  },
  {
    path: "/dashboard/users",
    name: "Users",
    component: Users,
    beforeEnter: AuthGuard,
  },
  {
    path: "/dashboard/users/edit",
    name: "Edit User",
    component: UserEdit,
    beforeEnter: AuthGuard,
  },
  {
    path: "/dashboard/specialists",
    name: "Specialists",
    component: Specialists,
    beforeEnter: AuthGuard,
  },
  {
    path: "/dashboard/specialists/edit",
    name: "Edit Specialist",
    component: SpecialistsEdit,
    beforeEnter: AuthGuard,
  },
  {
    path: "/dashboard/organizations",
    name: "Organizations",
    component: Organizations,
    beforeEnter: AuthGuard,
  },
  {
    path: "/dashboard/organizations/edit",
    name: "Edit Organizations",
    component: OrganizationsEdit,
    beforeEnter: AuthGuard,
  },
  {
    path: "/dashboard/task-types",
    name: "Task Tapes",
    component: TaskTypes,
    beforeEnter: AuthGuard,
  },
  {
    path: "/dashboard/task-types/edit",
    name: "Edit Task Type",
    component: TaskTypesEdit,
    beforeEnter: AuthGuard,
  },
  {
    path: "/dashboard/tables",
    name: "Tables",
    component: Tables,
    beforeEnter: AuthGuard,
  },
  {
    path: "/dashboard/billing",
    name: "Billing",
    component: Billing,
    beforeEnter: AuthGuard,
  },
  {
    path: "/dashboard/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: AuthGuard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
