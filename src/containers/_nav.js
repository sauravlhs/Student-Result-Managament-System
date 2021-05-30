import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
    }
  },

  {
    _tag: 'CSidebarNavTitle',
    _children: ['Forms']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Base',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Admin Form',
        to: '/base/forms',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Teacher Form',
        to: '/base/forms1',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Student Form',
        to: '/base/forms3',
      },

      {
        _tag: 'CSidebarNavItem',
        name: 'Tables',
        to: '/base/tables',
      },
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Charts',
    to: '/charts',
    icon: 'cil-chart-pie'
  },
  {
    _tag: 'CSidebarNavDivider'
  },
  ]

export default _nav
