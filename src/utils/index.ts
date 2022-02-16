
import store from '@/store'

export const handleAdd = (value: string) => {
    if (value.trim() === "") {return}
    store.state.todos.push(value)
}
export const handleDelete = (index: number) => {
    const item = store.state.todos[index]
    store.state.todos.splice(index, 1)
    store.state.deletes.push(item)
}
export const handleCheck = (index: number) => {
    const item = store.state.todos[index]
    store.state.todos.splice(index, 1)
    store.state.dones.push(item)
}

