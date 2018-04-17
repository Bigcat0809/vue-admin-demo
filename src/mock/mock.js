// axios-mock-adapter，即axios的模拟调试器，通过axios模拟调用后台，后台数据可以使用mock.js来造假数据
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { LoginUsers, Users } from './data/user.js'
let _Users = Users
export default {
    bootstrap() {
        // 设置模拟调试器实例
        let mock = new MockAdapter(axios);
        // 模拟任意GET请求到 mock success request
        //reply的参数为 (status, data, headers) 
        mock.onGet('/success').reply(200, {
                msg: 'success'
            })
            //mock  error request
        mock.onGet('/error').reply(500, {
                msg: 'error'
            })
            //模拟登录接口
        mock.onPost('/Login').reply(config => {
            // 解析axios传过来的数据
            let { username, password } = JSON.parse(config.data)
            return new Promise((resolve, reject) => {
                // 先创建一个用户为空对象
                let user = null;
                // 判断模拟的假数据中是否有和传过来的数据匹配的
                setTimeout(() => {
                    let hasUser = LoginUsers.some(person => {
                            // 如果存在这样的数据
                            if (person.username == username && person.password == password) {
                                user = JSON.parse(JSON.stringify(person))
                                user.password = undefined
                                return true
                            } else {
                                // 如果没有这个person
                                return false
                            }
                        })
                        // 如果有这么一个人
                    if (hasUser) {
                        resolve([200, { code: 200, msg: '请求成功', user }])
                    } else {
                        resolve([500, { code: 500, msg: '账号或密码错误' }])
                    }
                }, 1000);
            })
        });
        //读取用户列表信息
        mock.onGet('/user/list').reply(config => {
            console.log(config)
            let { name } = config.params;
            let mockUsers = _Users.filter(user => {
                if (name && user.name.indexOf(name) == -1) return false;
                return true;
            });
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        users: mockUsers
                    }]);
                }, 1000);
            });
        });
        //读取用户分页信息
        mock.onGet('/user/pageList').reply(config => {
            let { page, name } = config.params
            let mockUsers = _Users.filter(user => {
                if (name && user.name.indexOf(name) == -1) return false
                return true
            })
            let userTotal = mockUsers.length
            mockUsers = mockUsers.filter((u, index) => index < 20 * page && index >= 20 * (page - 1))
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        total: userTotal,
                        users: mockUsers
                    }])
                }, 1000);
            })
        });
        //删除用户信息
        mock.onGet('/user/remove').reply(config => {
            console.log(config)
            let { id } = config.params;
            _Users = _Users.filter(u => u.id !== id);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        code: 200,
                        msg: '删除成功'
                    }]);
                }, 500);
            });
        });
        //新增用户信息
        mock.onGet('/user/add').reply(config => {
                let { name, sex, age, addr, birth, province, city, county } = config.params
                _Users.push({
                    name: name,
                    addr: addr,
                    sex: sex,
                    age: age,
                    birth: birth,
                    province: province,
                    city: city,
                    county: county
                })
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve([200, {
                            code: 200,
                            msg: '添加成功'
                        }])
                    }, 500);
                })
            })
            //编辑用户信息
        mock.onGet('/user/edit').reply(config => {
                let { id, name, sex, age, addr, birth, province, city, county } = config.params
                _Users.some(u => {
                    if (u.id == id) {
                        u.name = name
                        u.sex = sex
                        u.age = age
                        u.addr = addr
                        u.birth = birth
                        u.province = province
                        u.city = city
                        u.county = county
                        return true
                    }
                })
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve([200, {
                            code: 200,
                            msg: '编辑成功'
                        }])
                    }, 500);
                })
            })
            //批量删除用户信息
        mock.onGet('/user/batchRemove').reply(config => {
            let { ids } = config.params
            _Users = _Users.filter(u => !ids.includes(u.id))
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        code: 200,
                        msg: '批量删除成功'
                    }])
                }, 500);
            })
        })
    }
}