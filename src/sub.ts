import { createApp } from 'vue'
import words from './mod'

(() => {
    const name: string = 'aaa'
    console.log(name)
    console.log(words.hello)
})()

createApp({}).mount(('#app'))