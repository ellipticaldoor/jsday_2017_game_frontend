import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/components/Admin'
import Vote from '@/components/Vote'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Vote',
			component: Vote,
		},
		{
			path: '/admin',
			name: 'Admin',
			component: Admin,
		},
	],
})
