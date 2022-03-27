export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'dashboard',
    routes: [
      {
        name: '分析页',
        path: 'analysis',
        icon: 'smile',
        component: './dashboard/Analysis',
      },
      {
        name: '监控页',
        path: 'monitor',
        icon: 'smile',
        component: './dashboard/Monitor',
      },
      {
        name: '工作台',
        path: 'workplace',
        icon: 'smile',
        component: './dashboard/Workplace',
      },
    ],
  },
  {
    path: '/form',
    name: '表单页',
    icon: 'form',
    routes: [
      {
        name: '基础表单',
        path: 'basic-form',
        icon: 'smile',
        component: './form/BasicForm',
      },
      {
        name: '分步表单',
        path: 'step-form',
        icon: 'smile',
        component: './form/StepForm',
      },
      {
        name: '高级表单',
        path: 'advanced-form',
        icon: 'smile',
        component: './form/AdvancedForm',
      },
    ],
  },
  {
    path: '/list',
    name: '列表页',
    icon: 'table',
    routes: [
      {
        name: '搜索列表',
        path: 'search',
        routes: [
          {
            path: 'articles',
            name: '搜索列表（文章）',
            icon: 'smile',
            component: './list/search/Articles',
          },
          {
            path: 'projects',
            name: '搜索列表（项目）',
            icon: 'smile',
            component: './list/search/Projects',
          },
          {
            path: 'applications',
            name: '搜索列表（应用）',
            icon: 'smile',
            component: './list/search/Applications',
          },
        ],
      },
      {
        name: '查询表格',
        path: 'table-list',
        icon: 'smile',
        component: './list/TableList',
      },
      {
        name: '标准列表',
        path: 'basic-list',
        icon: 'smile',
        component: './list/BasicList',
      },
      {
        name: '卡片列表',
        path: 'card-list',
        icon: 'smile',
        component: './list/CardList',
      },
    ],
  },
  {
    path: '/profile',
    name: '详情页',
    icon: 'profile',
    routes: [
      {
        path: 'basic',
        name: '基础详情页',
        icon: 'smile',
        component: './profile/Basic',
      },
      {
        path: 'advanced',
        name: '高级详情页',
        icon: 'smile',
        component: './profile/Advanced',
      },
    ],
  },
  {
    path: '/result',
    icon: 'CheckCircleOutlined',
    name: '结果页',
    routes: [
      {
        path: 'success',
        name: '成功页',
        icon: 'smile',
        component: './result/Success',
      },
      {
        path: 'fail',
        name: '失败页',
        icon: 'smile',
        component: './result/Fail',
      },
    ],
  },
  {
    path: '/exception',
    name: '详情页',
    icon: 'warning',
    routes: [
      {
        path: '403',
        name: '403',
        icon: 'smile',
        component: './exception/Exception403',
      },
      {
        path: '404',
        name: '404',
        icon: 'smile',
        component: './exception/Exception404',
      },
      {
        path: '500',
        name: '500',
        icon: 'smile',
        component: './exception/Exception500',
      },
    ],
  },
  {
    path: '/account',
    name: '个人页',
    icon: 'user',
    routes: [
      {
        path: 'center',
        name: '个人中心',
        icon: 'smile',
        component: './account/Center',
      },
      {
        path: 'settings',
        name: '个人设置',
        icon: 'smile',
        component: './account/Settings',
      },
    ],
  },
  {
    path: '/',
    redirect: '/dashboard/analysis',
  },
  {
    component: './404',
  },
];
