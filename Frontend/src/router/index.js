import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import auth from "../auth";
import AddPost from "@/views/AddPost.vue";
import APost from "../views/APost.vue";

const routes = [{
        path: "/",
        name: "home",
        component: HomeView,
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/login')
            } else {
                next();
            }
        }
    },
    {
        path: "/posts/:id",
        name: "APost",
        component: APost,
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/login')
            } else {
                next();
            }
        }
    },
    {
        path: "/signup",
        name: "SignUp",
        component: SignUp,
    },
    {
        path: "/login",
        name: "LogIn",
        component: LogIn,
    },
    {
        path: "/contacts",
        name: "contacts",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/ContactView.vue"),
    },
    {
        path: "/addpost",
        name: "AddPost",
        component: AddPost,
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/login')
            } else {
                next();
            }
        }
    }
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
});

export default router;