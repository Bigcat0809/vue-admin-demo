/** 
 * 用来模拟用户的一些信息 
 */
import Mock from 'mockjs'
const LoginUsers = [{
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
    name: 'admin'
}]
const Users = []
for (var i = 0; i < 40; i++) {
    Users.push(Mock.mock({
        id: Mock.Random.guid(),
        name: Mock.Random.cname(), //随机产生一个中文的姓名
        sex: Mock.Random.integer(0, 1), //随机生成一个整数，0/1 ，根据这个来给“男” “女”
        "age|18-60": 1, //随机生成一个数字 大小在18到60
        addr: Mock.mock('@county(true)'), //随机生成一个地址信息
        province: Mock.mock('@province'),
        city: Mock.mock('@city'),
        country: Mock.mock('@county'),
        birth: Mock.Random.date() //随机生成一个日期--YYYYmmdd
    }))
}
//导出常量
export { LoginUsers, Users }