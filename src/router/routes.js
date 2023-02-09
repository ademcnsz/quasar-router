import UserLayout from 'layouts/UserLayout'
import ProfilePage from 'pages/ProfilePage'
import PostsPage from 'pages/PostsPage'
import MainLayout from 'layouts/MainLayout'
import IndexPage from 'pages/IndexPage'
import ProfileInfo from 'pages/ProfileInfo'

const routes = [
  // {
  //   path: '/',
  //   component:MainLayout,
  //   children: [
  //     { path: '', component:IndexPage }
  //   ]
  // },

    {
      path: '/',
      component: UserLayout,
      children: [
        {
          path: 'profile',
          name:'ProfilePage',
          component: ProfilePage,
          children:[
            {
              path: ':id',
              name:'ProfileProps',
              component:ProfileInfo,
            },
          ]
        },
        {
          path: 'posts',
          component: PostsPage
        },
      ]
    },


  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
