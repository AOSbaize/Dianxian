import Main from '../views/Main.vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Mall from '../views/Mall.vue'
import PageTwo from '../views/PageTwo.vue'
import PageOne from '../views/PageOne.vue'
import Login from '../views/Login.vue'
import enroll from '../views/enroll.vue'
// import Show from '../static/test_final.vue'
import Vue from 'vue'
Vue.use(VueRouter)
//1.创建路由组件
//2.组件路由映射
//3.创建router实例
const routes = [
    {
        path: '/',
        component: Main,
        redirect:'/Login',
        children:[
            //子路由
            { path: '/home',  name:'home',component: Home },//首页
            { path: '/user', name:'user',component: User },//用户
            { path: '/mall', name:'mall',component: Mall },
            { path: '/page1',name:'page1', component: PageOne },
            { path: '/page2',name:'page2', component: PageTwo },
       ]
    },
    {
        path:'/login',
        name:'login',
        component:Login
    },
    {
         path: '/enroll',
         name:'enroll',
         component:enroll
    }
    // {
    //     path:'/show',
    //     name:'show',
    //     component:Show
    // }

]
const router = new VueRouter({
    routes
})
export default router