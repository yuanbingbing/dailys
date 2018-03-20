import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/user',
      component: Index,
      children: [

      ]
    },
    // 当以上路由条件都不满足时，自动匹配该位置
	{
		path: '/*',
		// 跳转
		redirect: '/user'
	}
  ]
})
