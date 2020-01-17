//引入vue
import Vue from 'vue';
//引入vue-router
import VueRouter from 'vue-router';
//注册路由
Vue.use(VueRouter);

//引入组件


const Home=()=>import('./components/Home.vue');
const Movie=()=>import('./components/Movie.vue');
const User=()=>import('./components/User.vue');
import Todo from './components/Todo.vue';
const Films=()=>import('./components/Films.vue');
import Playing from './components/Playing.vue';
import Comingsoon from './components/Comingsoon.vue';
import Film from './components/Film.vue';
import Element from './components/Element.vue';
import Song from './components/Song.vue';

//创建一个路由实例

const router=new VueRouter({
    // routes 描述了路由路径和组件之间的映射关系
    routes:[
        {path:'/home',component:Home},
        {path:'/movie',component:Movie},
        {path:'/user',component:User},
        {path:'/todo',component:Todo},
        {path:'/element',component:Element},
        {path:'/song',component:Song},
        {
            path:'/films',
            component:Films,
            children:[
                {
                path:'playing',
                component:Playing
            },
            {
                path:'commingsoon',
                component:Comingsoon
            },
            {
                path:'',
                redirect:{path:'playing'}
            }
        ]
        },
        {path:'/film/:id/:time',component:Film},
        {path:'/',redirect:{path:'/todo'}}
        
    ]
})
//抛出router实例
export default router;