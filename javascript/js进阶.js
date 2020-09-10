//1.判断为空

const { func } = require("prop-types")

//普通写法
if (a == undefined) a = []

if (params.success) {
    params.success(res)
}

//进阶写法
a = a || []
params.success && params.success(res)

//2.多条件判断
var Statistics = function () {
    console.log('exe')
}
switch (currentTab) {
    case 0:
        Statistics()
        break;
    case 1:
        Statistics()
        break;
    case 2:
        Statistics()
        break;
    case 3:
        Statistics()
        break;

    default:
        break;
}

//进阶
var Statistics = function(){
    console.log('222')
}

const comparativeTotles = new Map([
    [0,Statistics],
    [1,Statistics],
    [2,Statistics],
    [3,Statistics],
])
comparativeTotles.get(1)&&comparativeTotles.get(1)()

//匿名函数
(function(){})()

//进阶
!function(){}()
+function(){}()

//取整
parseInt(15.98)

//进阶
15.98 | 0
~~ 15.98

//异步函数 es7写法
async function getData(){
    const result = await axios.get('http://baidu.com/ping')
    const data = result.data
    console.log(data)

    return data
}
await getData()


//解构
// const {data} = await axios.get(...)
const {id=5} = {}
console.log(id)


