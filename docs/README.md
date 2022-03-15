---
title: 条件类型
author: 冴羽
date: '2021-12-12'
---
<!-- 可以增加一些文章信息 -->

# 树状数据

- 数据

  ```js
  const arr = [
    {id: 1, name: '部门1', pid: 0},
    {id: 2, name: '部门2', pid: 1},
    {id: 3, name: '部门3', pid: 1},
    {id: 4, name: '部门4', pid: 3},
    {id: 5, name: '部门5', pid: 4},
    {id: 6, name: '部门3', pid: 1},
  ]
  ```

- 解法1

  ```js
  function arrayToTree(items) {
    const arrMap = {};
    const result = [];
    items.forEach(v => {
      const id = v.id;
      const pid = v.pid;
      if (!arrMap[id]) {
        arrMap[id] = {
          ...v,
          children: []
        }
      }
  
      if (pid === 0) {
        result.push(arrMap[id]);
      } else {
        if (!arrMap[pid]) {
          arrMap[pid] = {
            children: []
          }
        }
        arrMap[pid].children.push(arrMap[id]);
      }
    })
    return result;
  }
  
  console.log(arrayToTree(arr));
  ```

- 解法2

  ```js
  function arrayToTree(data, pid) {
  return data.reduce((pre, next) => {
    if (next.pid === pid) {
      next.children = arrayToTree(data, next.id);
      pre.push(next)
    }
    return pre;
  },[])
  }
  ```