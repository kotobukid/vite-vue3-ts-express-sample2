<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'

const say_hello = () => {alert('hello')}

</script>

<template lang="pug">
div
    a.button(href="#" @click.prevent="say_hello") Hello!
    br
    a(href="https://vitejs.dev" target="_blank")
        img(src="/vite.svg" class="logo" alt="Vite logo")
    a(href="https://vuejs.org/" target="_blank")
        img(src="./assets/vue.svg" class="logo vue" alt="Vue logo")
HelloWorld(msg="Vite + Vue")
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
