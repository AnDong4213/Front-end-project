<template>
    <div>
        <router-link to="/">Home</router-link>
        <router-link to="todos">Todos</router-link>
        <h1>this is home</h1>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        created () {
            /* let newtodo = {
                text: '123',
                id: '99'
            }
            console.log({...newtodo}) */
        }
    }
</script>

<style scoped lang="less">
    a {
        text-decoration: none;
    }
</style>
