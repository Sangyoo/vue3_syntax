<template>
  <button @click="handler">
    Click me!
  </button>
  <ul>
    <li
      v-for="{fruit, index} in Fruits"
      v-bind:key="fruit">
      {{ fruit }} - {{ index }}</li>
  </ul>

  <ul>
    <li
      v-for="{id, name} in Fruits"
      v-bind:key="id">
      {{ name }} - {{ id }}</li>
  </ul>

  <ul>
    <li
      v-for="fruit in newFruits"
      v-bind:key="fruit.id">
      {{ fruit.name }} - {{ fruit.id }}
    </li>
  </ul>
</template>

<script>
//npm i -D shortid를 통해 패키지 설치함 : id생성해주는 패키지
import shortid from 'shortid'

export default {
  data() {
    return {
      fruits:['Apple', 'Banana','Cherry'],
      /*아래와 같은 결과가 아래의 computed로 인해 만들어진다
      newFruits: [
        { id: 0, name: 'Apple'},
        { id: 1, name: 'Banana'},
        { id: 2, name: 'Cherry'}
      ]*/
    }
  },
  methods: {
    handler(){
      this.fruits.push('Orange')
    }
  },
  computed:{
    newFruits(){
      return this.fruits.map(fruit => ({
        id: shortid.generate(), 
        name: fruit
      }))
    }
  }
}
</script>

<style scoped>

</style>