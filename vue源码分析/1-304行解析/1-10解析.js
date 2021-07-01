/*
 * @Author: your name
 * @Date: 2021-05-26 16:38:39
 * @LastEditTime: 2021-05-26 16:44:53
 * @LastEditors: Please set LastEditors
 * @Description:1-10行源码解析
 * @FilePath: \vue源码分析\1-304行解析\1-10解析.js
 */
'vue源码'
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.Vue = factory());
  }(this, function () { 'use strict';
    'vue核心代码'
  )))

  '将源码变形为'
  function (global,factory){
      if(typeof exports === 'object' && typeof module !== 'undefined'){
          module.exports = factory()
      }else{
         if(typeof define === 'function' && define.amd ){
              define(factory)
          }else{
              (global = global || self,global.Vue = factory())
          }
      }
  }