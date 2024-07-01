import {registerMicroApps, start  } from 'qiankun'

registerMicroApps([
  {
    name: 'base',
    entry: '//localhost:3000',
    container: '#app',
    activeRule: '/base',
  }
])

start();