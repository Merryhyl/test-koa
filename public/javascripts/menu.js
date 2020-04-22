/* eslint-disable */
module.exports = APP_MENU = [
    {
        key: 'home',
        name: '首页',
        icon: 'ios-home',
        path: '/home',
    },
    {
        key: 'scene',
        name: '导航1',
        icon: 'ios-briefcase',
        path: '/scene',
    },
    {
        key: 'rules',
        name: '导航2',
        icon: 'ios-keypad-outline',
        path: '/rules',
        children: [
            {
                key: 'ruleconfig',
                name: '导航2-1',
                path: '/rules/rule'
            },
            {
                key: 'factorconfig',
                name: '导航2-2',
                path: '/rules/factor'
            }
        ]
    },
    {
        key: 'punish',
        name: '导航3',
        icon: 'ios-settings',
        path: '/punish',
        children: [
            {
                key: 'packqge',
                name: '导航3-1',
                path: '/punish/package'
            },
            {
                key: 'atom',
                name: '导航3-2',
                path: '/punish/atom'
            },
            {
                key: 'log',
                name: '导航3-3',
                path: '/punish/log'
            }
        ]
    },
    {
        key: 'check',
        name: '导航4',
        icon: 'ios-construct-outline',
        path: '/portal2/check',
        children: [
            {
                key: 'notecheck',
                name: '导航4-1',
                path: '/portal2/check/notecheck'
            },
            {
                key: 'usercheck',
                name: '导航4-2',
                path: '/portal2/check/usercheck'
            }
        ]

    }
]