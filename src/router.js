import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			redirect: '/page1'
		},
		{
			path: '/page1',
			name: 'page1',
			component: () => import('./views/page1')
		},
		{
			path: '/page2',
			name: 'page2',
			component: () => import('./views/page2')
		},
		{
			path: '/page3',
			name: 'page3',
			component: () => import('./views/page3')
		},
		{
			path: '/page4',
			name: 'page4',
			component: () => import('./views/page4')
		},
		{
			path: '/page5',
			name: 'page5',
			component: () => import('./views/page5')
		}
	]
})