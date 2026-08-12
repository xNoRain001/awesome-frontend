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
        },
        {
          path: '0cee9966-b246-4d19-953f-bbc056854eff',
          component: () =>
            import('@/views/preview/0cee9966-b246-4d19-953f-bbc056854eff.vue')
        },
        {
          path: '20d26d5d-0c85-4d8f-b2e2-172068329b94',
          component: () =>
            import('@/views/preview/20d26d5d-0c85-4d8f-b2e2-172068329b94.vue')
        },
        {
          path: 'e8c403f4-1db6-4089-8faa-786acb793e21',
          component: () =>
            import('@/views/preview/e8c403f4-1db6-4089-8faa-786acb793e21.vue')
        },
        {
          path: 'eedfd310-b0b3-4074-b57a-ce05b59b8c4f',
          component: () =>
            import('@/views/preview/eedfd310-b0b3-4074-b57a-ce05b59b8c4f.vue')
        },
        {
          path: 'f91c1cdb-e86d-429b-a81d-657c27e755a3',
          component: () =>
            import('@/views/preview/f91c1cdb-e86d-429b-a81d-657c27e755a3.vue')
        },
        {
          path: '81cd299c-11ad-4f1e-8d57-9da875d1203b',
          component: () =>
            import('@/views/preview/81cd299c-11ad-4f1e-8d57-9da875d1203b.vue')
        },
        {
          path: '2c24290e-0c19-4021-b497-99563d6c97d5',
          component: () =>
            import('@/views/preview/2c24290e-0c19-4021-b497-99563d6c97d5.vue')
        },
        {
          path: '1b13f638-a630-468c-b2de-8ac10d2f9eae',
          component: () =>
            import('@/views/preview/1b13f638-a630-468c-b2de-8ac10d2f9eae.vue')
        },
        {
          path: '07155c45-c3e3-4543-b843-61e976b876e0',
          component: () =>
            import('@/views/preview/07155c45-c3e3-4543-b843-61e976b876e0.vue')
        },
        {
          path: 'e01c5263-3c34-4a08-8b82-44d947fd1d2e',
          component: () =>
            import('@/views/preview/e01c5263-3c34-4a08-8b82-44d947fd1d2e.vue')
        },
        {
          path: '136c6dbb-ab49-4537-8c9c-5a0cff3eab71',
          component: () =>
            import('@/views/preview/136c6dbb-ab49-4537-8c9c-5a0cff3eab71.vue')
        },
        {
          path: '61be3bed-b37d-4779-b32c-3aaa55f0629f',
          component: () =>
            import('@/views/preview/61be3bed-b37d-4779-b32c-3aaa55f0629f.vue')
        },
        {
          path: '84d5fa0a-07b2-4688-8b0d-f26e790ce9b7',
          component: () =>
            import('@/views/preview/84d5fa0a-07b2-4688-8b0d-f26e790ce9b7.vue')
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
