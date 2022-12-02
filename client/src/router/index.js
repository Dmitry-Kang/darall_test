import { createRouter, createWebHistory } from 'vue-router'

import PositionCart from "@/components/PositionCart";
import CategoryCart from "@/components/CategoryCart";
import CategoryLayout from "@/components/CategoryLayout";
import PositionLayout from "@/components/PositionLayout";
import PositionNew from "@/components/PositionNew";
import PositionEdit from "@/components/PositionEdit";
import MainLayout from "@/components/MainLayout";

const routes = [
    {
        path: '/',
        name: 'MainLayout',
        component: MainLayout
    },
    {
        path: '/categories',
        name: 'CategoryLayout',
        component: CategoryLayout
    },
    {
        path: '/position',
        name: 'PositionLayout',
        component: PositionLayout
    },
    {
        path: '/position/new',
        name: 'PositionNew',
        component: PositionNew
    },
    {
        path: '/position/:id',
        name: 'PositionCart',
        component: PositionCart
    },
    {
        path: '/position/edit/:id',
        name: 'PositionEdit',
        component: PositionEdit
    },
    {
        path: '/category/:id',
        name: 'CategoryCart',
        component: CategoryCart
    }
]

const router = createRouter({ history: createWebHistory(), routes })

export default router