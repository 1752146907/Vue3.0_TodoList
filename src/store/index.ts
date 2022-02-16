import { createStore } from  'vuex'

export default createStore({
    state: {
        todos: ['傻逼产品1','傻逼产品2','傻逼产品3',] as string[],
        dones: ['超级玛丽','魂斗罗'] as string[],
        deletes: ['蜘蛛侠','钢铁侠','灭霸'] as string[],
    },
    mutations: {
        // add (state, value) {
        //     if (value.trim() === "") {return}
        //     state.todos.push(value)
        // },
        // delete (state, index) {
        //     const item = state.todos[index]
        //     state.todos.splice(index, 1)
        //     state.deletes.push(item)
        // },
        // check (state, index) {
        //     const item = state.todos[index]
        //     state.todos.splice(index, 1)
        //     state.dones.push(item)
        // }
    },
    actions: {

    },
    modules:{
    }
})


