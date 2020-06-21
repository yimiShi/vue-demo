import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import MessageDetail from '../pages/MessageDetail.vue'

export default [
  {
    path: '/about',
    component: About
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home/news',
        component: News
      },
      {
        // path: '/home/message',
        path: 'message',
        component: Message,
        children: [
          {
            path: 'detail/:id',
            component: MessageDetail,
            // 将路由中的参数映射成标签属性
            props: route => ({id: route.params.id * 1})
          }
        ]
      }

    ]
  },
  {
    path: '/',
    redirect: '/about'
  }
]
