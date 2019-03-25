import '@babel/polyfill'
import './style.css'
import React from 'react'
import printMe from './print.js'
async function getComponent () {
  let aaa = await import(/* webpackChunkName: "test" */ './test') // 懒加载
  // import(/* webpackPrefetch: true */ 'test');   prefetch(预取)：将来某些导航下可能需要的资源
  // import(/* webpackPreload: true */ 'test');   preload(预加载)：当前导航下可能需要资源
  var bbb = aaa
  console.log(bbb, 222)
  console.log(React)
  var element = document.createElement('div')
  printMe()
  element.innerHTML = 'Hello111222333'
  return element
}
// document.body.appendChild(getComponent());
getComponent().then(component => {
  document.body.appendChild(component)
})
