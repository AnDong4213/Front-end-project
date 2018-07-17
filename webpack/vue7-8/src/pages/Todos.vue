<template>
    <div class="todos">
        <router-link to="/">Home</router-link>
        <router-link to="todos">Todos</router-link>
        <h1 class="todos-title">this is todos</h1>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="less">
    a {
        text-decoration: none;
    }
    .todos {
        &-title {
            font-size: 28px;
            color: aqua;
        }
    }
</style>
