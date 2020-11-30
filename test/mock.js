// 使用 Mock
var Mock = require('mockjs')

Mock.Random.ctitle()
Mock.Random.color()
Mock.Random.cname()
Mock.Random.image()

const data = Mock.mock({
  title: '@ctitle(4)',
  "subtitle|3-8": ['@ctitle(3,6)'],
  "imgs|4":['@image("200x200","@color","#fff","jpg","@cname")']
  
})

/* var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
}) */
// 输出结果
console.log(data)