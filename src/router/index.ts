import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Delete from "@/components/Delete.vue";
import Done from "@/components/Done.vue";
import Add from "@/components/Add.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/',
                redirect: {name: 'add'}
            },
            {
                name: "delete",
                path: '/delete',
                component: Delete
            },{
                name: "done",
                path: '/done',
                component: Done
            },{
                name: "add",
                path: '/add',
                component: Add
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
