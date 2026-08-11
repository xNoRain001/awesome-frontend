import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Index.vue')
    },
    {
      path: '/preview',
      component: () => import('@/views/preview/Index.vue'),
      children: [
        {
          path: '867ecc14-748e-4b1a-80b9-3451e8b330e6',
          component: () =>
            import('@/views/preview/867ecc14-748e-4b1a-80b9-3451e8b330e6.vue')
        },
        {
          path: '8fa92e4b-75d8-4f7e-ad8d-854772d697ca',
          component: () =>
            import('@/views/preview/8fa92e4b-75d8-4f7e-ad8d-854772d697ca.vue')
        },
        {
          path: '7c36b055-1a98-41cc-9c30-2ff9dea4980c',
          component: () =>
            import('@/views/preview/7c36b055-1a98-41cc-9c30-2ff9dea4980c.vue')
        },
        {
          path: '998b8d46-936a-47f5-baf2-d28e60642b5c',
          component: () =>
            import('@/views/preview/998b8d46-936a-47f5-baf2-d28e60642b5c.vue')
        },
        {
          path: '842d7c33-1231-4826-a935-b0fd1ca2d41b',
          component: () =>
            import('@/views/preview/842d7c33-1231-4826-a935-b0fd1ca2d41b.vue')
        },
        {
          path: 'f24f0e6f-0c3c-43d2-8ffe-0fd6959f3580',
          component: () =>
            import('@/views/preview/f24f0e6f-0c3c-43d2-8ffe-0fd6959f3580.vue')
        },
        {
          path: '6175e8b4-4838-4610-8097-26d36a41829a',
          component: () =>
            import('@/views/preview/6175e8b4-4838-4610-8097-26d36a41829a.vue')
        },
        {
          path: '5fb9f2d8-686d-4cc3-a3e7-478039042997',
          component: () =>
            import('@/views/preview/5fb9f2d8-686d-4cc3-a3e7-478039042997.vue')
        },
        {
          path: '1a2babcc-2156-4061-a21c-d9d96eabb6f0',
          component: () =>
            import('@/views/preview/1a2babcc-2156-4061-a21c-d9d96eabb6f0.vue')
        },
        {
          path: '80d1f21c-f01a-4db9-a946-2a78de09d5a3',
          component: () =>
            import('@/views/preview/80d1f21c-f01a-4db9-a946-2a78de09d5a3.vue')
        },
        {
          path: '96f525a5-627a-4687-833c-6d8c7bc2b38b',
          component: () =>
            import('@/views/preview/96f525a5-627a-4687-833c-6d8c7bc2b38b.vue')
        },
        {
          path: '457f25c3-7d5c-4cdd-9181-d0742aec4311',
          component: () =>
            import('@/views/preview/457f25c3-7d5c-4cdd-9181-d0742aec4311.vue')
        },
        {
          path: '34ed56b4-ede9-4660-aef7-b39fab7a4e6d',
          component: () =>
            import('@/views/preview/34ed56b4-ede9-4660-aef7-b39fab7a4e6d.vue')
        },
        {
          path: '1082d56a-ab0c-48bc-b3a7-edc3096f7f59',
          component: () =>
            import('@/views/preview/1082d56a-ab0c-48bc-b3a7-edc3096f7f59.vue')
        },
        {
          path: 'dbd19fa0-1a3b-422f-bac4-c271c0b1ff27',
          component: () =>
            import('@/views/preview/dbd19fa0-1a3b-422f-bac4-c271c0b1ff27.vue')
        },
        {
          path: '05dadcaf-07a2-43a3-8f96-491030bc7bd6',
          component: () =>
            import('@/views/preview/05dadcaf-07a2-43a3-8f96-491030bc7bd6.vue')
        },
        {
          path: '5c76c52f-2d77-43c9-8040-786c87d3e989',
          component: () =>
            import('@/views/preview/5c76c52f-2d77-43c9-8040-786c87d3e989.vue')
        },
        {
          path: 'aec44048-e899-4d07-8ac8-42cf24682a6b',
          component: () =>
            import('@/views/preview/aec44048-e899-4d07-8ac8-42cf24682a6b.vue')
        },
        {
          path: '85d59b40-2f27-49bc-8220-71d0c422359b',
          component: () =>
            import('@/views/preview/85d59b40-2f27-49bc-8220-71d0c422359b.vue')
        },
        {
          path: '221eb08b-b261-468f-9522-716d92d8e23b',
          component: () =>
            import('@/views/preview/221eb08b-b261-468f-9522-716d92d8e23b.vue')
        },
        {
          path: '3f45ce7e-2d87-4ac6-b1ef-5e5c1da4f53d',
          component: () =>
            import('@/views/preview/3f45ce7e-2d87-4ac6-b1ef-5e5c1da4f53d.vue')
        },
        {
          path: '81fc43e2-1239-4cf8-bd74-d872d3c3ce7c',
          component: () =>
            import('@/views/preview/81fc43e2-1239-4cf8-bd74-d872d3c3ce7c.vue')
        },
        {
          path: '0c10096e-19f0-4fd0-887c-461e0f991ebb',
          component: () =>
            import('@/views/preview/0c10096e-19f0-4fd0-887c-461e0f991ebb.vue')
        },
        {
          path: '17ab2c06-e78b-46af-a744-dd65ea3947cc',
          component: () =>
            import('@/views/preview/17ab2c06-e78b-46af-a744-dd65ea3947cc.vue')
        },
        {
          path: 'd7ff7504-5ff3-4ad4-bacc-317b26d170a0',
          component: () =>
            import('@/views/preview/d7ff7504-5ff3-4ad4-bacc-317b26d170a0.vue')
        },
        {
          path: '83bf8fd6-acc2-41fc-b322-0d2fa3c99b9e',
          component: () =>
            import('@/views/preview/83bf8fd6-acc2-41fc-b322-0d2fa3c99b9e.vue')
        },
        {
          path: 'f866f3dd-a668-4f60-a0e3-9f0315ab0691',
          component: () =>
            import('@/views/preview/f866f3dd-a668-4f60-a0e3-9f0315ab0691.vue')
        },
        {
          path: '91622ab8-d925-4af9-a8d3-26f36e6f36bb',
          component: () =>
            import('@/views/preview/91622ab8-d925-4af9-a8d3-26f36e6f36bb.vue')
        },
        {
          path: 'dd0a521f-06e5-425e-85f4-bb93d019d6fd',
          component: () =>
            import('@/views/preview/dd0a521f-06e5-425e-85f4-bb93d019d6fd.vue')
        }
      ]
    },
    // 404 路由
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/NotFound.vue')
    }
  ]
})

export default router
