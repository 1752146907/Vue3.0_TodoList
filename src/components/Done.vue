<template>
    <div class="container">
        <ul class="list-group">
            <li class="list-group-item" v-for="(item, index) in todos" :key="'add-' + index">
                <div class="form-group form-check">
                    <label class="form-check-label" >{{item}}</label>
                </div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import { defineComponent, reactive, computed } from 'vue'
    import store from '@/store'

    export default defineComponent({
        name: 'Done',
        setup() {

            return reactive({
                todos: computed(() => store.state.dones)
            })
        }
    })
</script>
