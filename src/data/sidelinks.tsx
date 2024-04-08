import {
  IconBarrierBlock,
  IconBoxSeam,
  IconChartHistogram,
  IconChecklist,
  IconComponents,
  IconError404,
  IconExclamationCircle,
  IconHexagonNumber1,
  IconHexagonNumber2,
  IconHexagonNumber3,
  IconHexagonNumber4,
  IconLayoutDashboard,
  IconMessages,
  IconRouteAltLeft,
  IconServerOff,
  IconSettings,
  IconTruck,
  IconUserShield,
  IconUsers,
} from '@tabler/icons-react'

export interface NavLink {
  title: string
  label?: string
  href: string
  icon: JSX.Element
}

export interface SideLink extends NavLink {
  sub?: NavLink[]
}

export const sidelinks: SideLink[] = [
  {
    title: 'Trang chủ',
    label: '',
    href: '/',
    icon: <IconLayoutDashboard size={18} />,
  },
  // {
  //   title: 'Tasks',
  //   label: '3',
  //   href: '/tasks',
  //   icon: <IconChecklist size={18} />,
  // },
  // {
  //   title: 'Chats',
  //   label: '9',
  //   href: '/chats',
  //   icon: <IconMessages size={18} />,
  // },
  {
    title: 'Quản lý truy vấn',
    label: '',
    href: '',
    icon: <IconUserShield size={18} />,
    sub: [
      {
        title: 'Danh sách truy vấn',
        label: '',
        href: '/queries',
        icon: <IconHexagonNumber1 size={18} />,
      },
      {
        title: 'Quản lý trả lời truy vấn',
        label: '',
        href: '/queries-history',
        icon: <IconHexagonNumber2 size={18} />,
      },
      // {
      //   title: 'Sign Up',
      //   label: '',
      //   href: '/sign-up',
      //   icon: <IconHexagonNumber3 size={18} />,
      // },
      // {
      //   title: 'Forgot Password',
      //   label: '',
      //   href: '/forgot-password',
      //   icon: <IconHexagonNumber4 size={18} />,
      // },
    ],
  },
  {
    title: 'Quản lý người dùng',
    label: '',
    href: '/users',
    icon: <IconUsers size={18} />,
  },
  // {
  //   title: 'Requests',
  //   label: '10',
  //   href: '/requests',
  //   icon: <IconRouteAltLeft size={18} />,
  //   sub: [
  //     {
  //       title: 'Trucks',
  //       label: '9',
  //       href: '/trucks',
  //       icon: <IconTruck size={18} />,
  //     },
  //     {
  //       title: 'Cargos',
  //       label: '',
  //       href: '/cargos',
  //       icon: <IconBoxSeam size={18} />,
  //     },
  //   ],
  // },
  {
    title: 'Quản lý kết nối',
    label: '',
    href: '/analysis',
    icon: <IconChartHistogram size={18} />,
  },
  {
    title: 'Quản lý dữ liệu',
    label: '',
    href: '/data-manager',
    icon: <IconComponents size={18} />,
  },
  // {
  //   title: 'Error Pages',
  //   label: '',
  //   href: '',
  //   icon: <IconExclamationCircle size={18} />,
  //   sub: [
  //     {
  //       title: 'Not Found',
  //       label: '',
  //       href: '/404',
  //       icon: <IconError404 size={18} />,
  //     },
  //     {
  //       title: 'Internal Server Error',
  //       label: '',
  //       href: '/500',
  //       icon: <IconServerOff size={18} />,
  //     },
  //     {
  //       title: 'Maintenance Error',
  //       label: '',
  //       href: '/503',
  //       icon: <IconBarrierBlock size={18} />,
  //     },
  //   ],
  // },
  {
    title: 'Nhật ký hệ thống',
    label: '',
    href: '/settings',
    icon: <IconSettings size={18} />,
  },
  {
    title: 'Báo cáo thống kê',
    label: '',
    href: '/settings',
    icon: <IconSettings size={18} />,
  },
]
