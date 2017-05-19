import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/components/Index'
import Md5 from '@/components/Md5'
import Encode from '@/components/Encode'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    // base: __dirname,
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/encode',
            // name: 'encode',
            component: Encode,
            children: [
                {
                    path: 'md5',
                    name: 'md5',
                    component: Md5
                }
            ]
        }
    ]
})
