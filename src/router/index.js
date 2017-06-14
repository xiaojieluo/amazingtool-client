import Vue from 'vue'
import Router from 'vue-router'


import Index from '@/components/Index'
import encode from '@/components/encode/encode'
import encode_all from '@/components/encode/all'
import base16 from '@/components/encode/base16'
import base32 from '@/components/encode/base32'
import base64 from '@/components/encode/base64'
import base85 from '@/components/encode/base85'

import encrypt from '@/components/encrypt/encrypt'
import encrypt_all from '@/components/encrypt/all'
import md5 from '@/components/encrypt/md5'

import ip from '@/components/ip/ip'
import gdp from '@/components/data/gdp'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/encrypt',
            name: 'encrypt',
            component: encrypt,
            children: [
                {path: 'md5',name: 'md5',component: md5},
                {path: '',name: 'encrypt_all',component: encrypt_all}
            ]
        },
        {
            path: '/encode',
            name: 'encode',
            component: encode,
            children: [
                {path: 'base16', name: 'base16', component: base16},
                {path: 'base32', name: 'base32', component: base32},
                {path: 'base64', name: 'base64', component: base64},
                {path: 'base85', name: 'base85', component: base85},
                {path: '', name: 'encode_all', component: encode_all},
            ]
        },
        {
            path: '/ip',
            name: 'ip',
            component: ip,
            // children: []
        },
        {
            path: '/data/gdp',
            name: 'gdp',
            component: gdp,
        }
    ]
})
