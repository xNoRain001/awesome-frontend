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
        },
        {
          path: '32bb4c8c-1526-4254-9455-260f51b67722',
          component: () =>
            import('@/views/preview/32bb4c8c-1526-4254-9455-260f51b67722.vue')
        },
        {
          path: '8ea50b58-af86-423a-a8e5-a7fa293e4494',
          component: () =>
            import('@/views/preview/8ea50b58-af86-423a-a8e5-a7fa293e4494.vue')
        },
        {
          path: 'ddd0e9b6-490c-47be-9bdb-df23b9ffef7d',
          component: () =>
            import('@/views/preview/ddd0e9b6-490c-47be-9bdb-df23b9ffef7d.vue')
        },
        {
          path: '18691489-2a41-4aaa-9f33-37cd1cc4774e',
          component: () =>
            import('@/views/preview/18691489-2a41-4aaa-9f33-37cd1cc4774e.vue')
        },
        {
          path: '58dff3f6-157a-4d54-953d-fd11b953daf4',
          component: () =>
            import('@/views/preview/58dff3f6-157a-4d54-953d-fd11b953daf4.vue')
        },
        {
          path: '54fe1cf0-a151-4099-a8b6-15236b472c2b',
          component: () =>
            import('@/views/preview/54fe1cf0-a151-4099-a8b6-15236b472c2b.vue')
        },
        {
          path: '56a282f4-863a-4fd4-b527-f037c94ad963',
          component: () =>
            import('@/views/preview/56a282f4-863a-4fd4-b527-f037c94ad963.vue')
        },
        {
          path: '6dc90f84-a96d-4e9e-b78e-2a8c595f1a64',
          component: () =>
            import('@/views/preview/6dc90f84-a96d-4e9e-b78e-2a8c595f1a64.vue')
        },
        {
          path: 'adb9f412-a627-4b07-9392-c13f270f79a7',
          component: () =>
            import('@/views/preview/adb9f412-a627-4b07-9392-c13f270f79a7.vue')
        },
        {
          path: '86aa25a2-8dc3-4f89-b0d4-dc01c621490a',
          component: () =>
            import('@/views/preview/86aa25a2-8dc3-4f89-b0d4-dc01c621490a.vue')
        },
        {
          path: '2e4c517c-7b19-48e1-bb88-f6b219d903a9',
          component: () =>
            import('@/views/preview/2e4c517c-7b19-48e1-bb88-f6b219d903a9.vue')
        },
        {
          path: 'a94f3e3a-3c49-4f3a-9ae3-67ac2fadbde8',
          component: () =>
            import('@/views/preview/a94f3e3a-3c49-4f3a-9ae3-67ac2fadbde8.vue')
        },
        {
          path: '925c0b5f-b1a9-430d-af9a-6892f6e09f35',
          component: () =>
            import('@/views/preview/925c0b5f-b1a9-430d-af9a-6892f6e09f35.vue')
        },
        {
          path: 'b6b315bd-6162-464d-8411-12e1fd963fcd',
          component: () =>
            import('@/views/preview/b6b315bd-6162-464d-8411-12e1fd963fcd.vue')
        },
        {
          path: '9b38c765-aaa3-4e30-88fb-ceb60df2fa0b',
          component: () =>
            import('@/views/preview/9b38c765-aaa3-4e30-88fb-ceb60df2fa0b.vue')
        },
        {
          path: '3d904b7c-6f0d-456a-98c9-9b5ae34c3689',
          component: () =>
            import('@/views/preview/3d904b7c-6f0d-456a-98c9-9b5ae34c3689.vue')
        },
        {
          path: 'b1fcb353-19b5-4c4b-a278-4d72b5da6cac',
          component: () =>
            import('@/views/preview/b1fcb353-19b5-4c4b-a278-4d72b5da6cac.vue')
        },
        {
          path: '5cd32437-d4f6-464f-8b25-0372b1606ebf',
          component: () =>
            import('@/views/preview/5cd32437-d4f6-464f-8b25-0372b1606ebf.vue')
        },
        {
          path: '9ed5080a-7381-4ac8-a82b-7945e486706f',
          component: () =>
            import('@/views/preview/9ed5080a-7381-4ac8-a82b-7945e486706f.vue')
        },
        {
          path: 'e2c1d4b3-aca6-40c0-862c-2eab1e2b0544',
          component: () =>
            import('@/views/preview/e2c1d4b3-aca6-40c0-862c-2eab1e2b0544.vue')
        },
        {
          path: '31d61342-5f24-47e8-bebe-17818bb55ea3',
          component: () =>
            import('@/views/preview/31d61342-5f24-47e8-bebe-17818bb55ea3.vue')
        },
        {
          path: '9f3a61c0-5717-4a0b-9115-7e88e007c7cf',
          component: () =>
            import('@/views/preview/9f3a61c0-5717-4a0b-9115-7e88e007c7cf.vue')
        },
        {
          path: 'e8288b6a-6fe6-4fdf-a6ae-27be46fe4ac2',
          component: () =>
            import('@/views/preview/e8288b6a-6fe6-4fdf-a6ae-27be46fe4ac2.vue')
        },
        {
          path: '7a4a1071-9f84-4a7d-b6bb-508d50b8071f',
          component: () =>
            import('@/views/preview/7a4a1071-9f84-4a7d-b6bb-508d50b8071f.vue')
        },
        {
          path: '079fb463-f9fb-4567-a9b3-837b00b78995',
          component: () =>
            import('@/views/preview/079fb463-f9fb-4567-a9b3-837b00b78995.vue')
        },
        {
          path: '164d1a12-b7a7-45ff-a23b-c6e83d478cc9',
          component: () =>
            import('@/views/preview/164d1a12-b7a7-45ff-a23b-c6e83d478cc9.vue')
        },
        {
          path: 'b47eef3f-4031-48c4-aa8d-61a95f66843f',
          component: () =>
            import('@/views/preview/b47eef3f-4031-48c4-aa8d-61a95f66843f.vue')
        },
        {
          path: '83730599-3e10-4760-b246-90fde5680b0b',
          component: () =>
            import('@/views/preview/83730599-3e10-4760-b246-90fde5680b0b.vue')
        },
        {
          path: '76127bc5-2871-4667-8bb8-4246bdeaf494',
          component: () =>
            import('@/views/preview/76127bc5-2871-4667-8bb8-4246bdeaf494.vue')
        },
        {
          path: 'af0a9ad1-b0be-43d0-b53b-d0f39c0d8b99',
          component: () =>
            import('@/views/preview/af0a9ad1-b0be-43d0-b53b-d0f39c0d8b99.vue')
        },
        {
          path: 'e20104f9-8051-4864-8181-40a4b9f8637f',
          component: () =>
            import('@/views/preview/e20104f9-8051-4864-8181-40a4b9f8637f.vue')
        },
        {
          path: '00ca20c4-e9ff-498f-9840-908d7c0cd7ec',
          component: () =>
            import('@/views/preview/00ca20c4-e9ff-498f-9840-908d7c0cd7ec.vue')
        },
        {
          path: 'a2796e6b-7e96-4dfa-b3bc-23f31d1d29b6',
          component: () =>
            import('@/views/preview/a2796e6b-7e96-4dfa-b3bc-23f31d1d29b6.vue')
        },
        {
          path: '6bf087bc-9b7a-47a4-8537-eb25cd66f95d',
          component: () =>
            import('@/views/preview/6bf087bc-9b7a-47a4-8537-eb25cd66f95d.vue')
        },
        {
          path: 'fdba0216-2a85-4cbc-8278-feac5150bb72',
          component: () =>
            import('@/views/preview/fdba0216-2a85-4cbc-8278-feac5150bb72.vue')
        },
        {
          path: 'ab0b8633-f6e1-4dfc-b5b6-c181c82ab36f',
          component: () =>
            import('@/views/preview/ab0b8633-f6e1-4dfc-b5b6-c181c82ab36f.vue')
        },
        {
          path: '64358330-6f71-4a9e-9cc8-064a70755e81',
          component: () =>
            import('@/views/preview/64358330-6f71-4a9e-9cc8-064a70755e81.vue')
        },
        {
          path: '4f5f7401-6c7c-4ff7-95ed-dcb49787768c',
          component: () =>
            import('@/views/preview/4f5f7401-6c7c-4ff7-95ed-dcb49787768c.vue')
        },
        {
          path: 'eea12c07-ac54-4ec5-9601-8ccc1e54244d',
          component: () =>
            import('@/views/preview/eea12c07-ac54-4ec5-9601-8ccc1e54244d.vue')
        },
        {
          path: '950cbe39-1c40-4c48-b557-ed140d3f125b',
          component: () =>
            import('@/views/preview/950cbe39-1c40-4c48-b557-ed140d3f125b.vue')
        },
        {
          path: '313e520b-77ff-45fc-88c3-dbf1a70c01ab',
          component: () =>
            import('@/views/preview/313e520b-77ff-45fc-88c3-dbf1a70c01ab.vue')
        },
        {
          path: 'caad8c42-4b55-4aee-92a6-76fecd6ce35f',
          component: () =>
            import('@/views/preview/caad8c42-4b55-4aee-92a6-76fecd6ce35f.vue')
        },
        {
          path: 'd47db278-5a2b-4646-9599-fcbb63003777',
          component: () =>
            import('@/views/preview/d47db278-5a2b-4646-9599-fcbb63003777.vue')
        },
        {
          path: 'fef51569-cabb-4ac4-b0cf-757098be1567',
          component: () =>
            import('@/views/preview/fef51569-cabb-4ac4-b0cf-757098be1567.vue')
        },
        {
          path: '2c08ad2b-d70f-4e88-95fc-963fae588750',
          component: () =>
            import('@/views/preview/2c08ad2b-d70f-4e88-95fc-963fae588750.vue')
        },
        {
          path: '67598bad-ebea-4eab-bde3-eec098d92300',
          component: () =>
            import('@/views/preview/67598bad-ebea-4eab-bde3-eec098d92300.vue')
        },
        {
          path: 'cc4bc268-ad6f-4fd7-bc96-a5c4cd2a0680',
          component: () =>
            import('@/views/preview/cc4bc268-ad6f-4fd7-bc96-a5c4cd2a0680.vue')
        },
        {
          path: '2697d4b2-f7fe-4170-9307-dfed1d3ccb72',
          component: () =>
            import('@/views/preview/2697d4b2-f7fe-4170-9307-dfed1d3ccb72.vue')
        },
        {
          path: 'a857ebc6-8f40-403f-8030-4f9612383485',
          component: () =>
            import('@/views/preview/a857ebc6-8f40-403f-8030-4f9612383485.vue')
        },
        {
          path: '2ac198e4-95d6-4efa-9f5e-46ef731f9c1b',
          component: () =>
            import('@/views/preview/2ac198e4-95d6-4efa-9f5e-46ef731f9c1b.vue')
        },
        {
          path: 'fa94ab7a-d768-405c-91d3-385e23a3e34b',
          component: () =>
            import('@/views/preview/fa94ab7a-d768-405c-91d3-385e23a3e34b.vue')
        },
        {
          path: '4388df2b-1753-49cc-b8fd-a182fe658e80',
          component: () =>
            import('@/views/preview/4388df2b-1753-49cc-b8fd-a182fe658e80.vue')
        },
        {
          path: '4d2e7905-7d33-4041-8d41-2b61c32fedc2',
          component: () =>
            import('@/views/preview/4d2e7905-7d33-4041-8d41-2b61c32fedc2.vue')
        },
        {
          path: 'd8ca9aae-c9a0-4933-807d-5c593c292c44',
          component: () =>
            import('@/views/preview/d8ca9aae-c9a0-4933-807d-5c593c292c44.vue')
        },
        {
          path: '5201ffb4-08df-495b-9317-50229e93d549',
          component: () =>
            import('@/views/preview/5201ffb4-08df-495b-9317-50229e93d549.vue')
        },
        {
          path: '93c29821-4737-4e98-9323-8e2592219bd3',
          component: () =>
            import('@/views/preview/93c29821-4737-4e98-9323-8e2592219bd3.vue')
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
