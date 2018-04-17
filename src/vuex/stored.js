import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
    //定义一个常量const state ，这个就是我们说的访问状态对象
const state = {
        count: 10
    }
    //两个方法
const mutations = {
        add(state) {
            state.count += 1;
        },
        reduce(state) {
            state.count -= 1;
        }
    }
    // 创建 store 实例用export default 封装代码，让外部可以引用
export default new Vuex.Store({
    state,
    mutations
})