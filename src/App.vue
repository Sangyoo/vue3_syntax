<template>
  <h1>{{ msg }}</h1>
  <input
    type="text"
    v-bind:value="msg"
    @input="msg = $event.target.value">
  <input
    type="checkbox"
    v-model="checked"
    name=""
    id="ss">
  <label for="ss">{{ checked }}</label>
</template>

<script>
/*
https://kr.vuejs.org/v2/guide/forms.html 폼 입력 바인딩 문서
그러나 v-model은 한글에는 한박자 느린 반응성을 보여주는데, 그럴 때는 밑에 있는
v-bind:value와 @input을 활용해야 한다.
*/

export default {
  data() {
    return {
      msg: 'Hello world!',
      checked: false
    }
  },
  methods: {
    //위에 @input="handler"와 아래 명령을 조합해서 사용하거나
    // v-bind:value="msg"
    // @input="msg=$event.target.value" 이렇게 두줄로 쓰거나
    // v-model="msg" 로 간소화 가능
    //->왜 이렇게하나? : input부분에 데이터를 수정하였을 때, vue data에
    //있는 msg를 수정하는 양방향 데이터 통신을 하기 위함임.
    handler(event){
      console.log(event.target.value)
      this.msg = event.target.value
    }
    
  },
  computed:{

  }
}
</script>

<style scoped>

</style>