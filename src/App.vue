<template>
  <a
    href="https://naver.com"
    target="_blank"
    @click.prevent.once="handler">
    Naver
  </a>
</template>

<script>
/*
@click.prevent ="function" : html 기본동작을 실행하지않고 메소드만 실행
@click.once = "function": 메소드를 한번만 실행
*/

export default {
  data() {
    return {

    }
  },
  methods: {
    handler(event) {
      //preventDefault 주소 연결(기본html 기능)을 실행하지 않고 메소드만 실행하겠다.
      // event.preventDefault()
      console.log('ABC!')
    }
  },
  computed:{

  }
}
</script>

<style scoped>

</style>