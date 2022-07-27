import Vue from 'vue'
import words from './mod'

(() => {
    const name: string = 'aaa'
    console.log(name)
    console.log(words.hello)
})()

Vue.createApp({}).mount(('#app'))