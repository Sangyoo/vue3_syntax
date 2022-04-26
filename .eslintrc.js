module.exports = {
  env: {
    //browser와 node.js 환경 모두에서 검사
    browser: true,
    node: true
  },
  extends: [
    //esline 코드 검사 규칙

    //1.vue 코드 규칙
    // 'plugin:vue/vue3-essential', //LV.1
    'plugin:vue/vue3-strongly-recommended', //LV.2
    // 'plugin:vue/vue3-recommended', // LV.3
    //2.js 코드 규칙
    'eslint:recommended'
  ],
  parserOptions: {
    //코드 분석기
    parser: '@babel/eslint-parser'
  },
  rules: {
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never" //태그 마무리를 새로운 줄에 해야 하는가
    }],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "never", //빈태그를 />로 마무리해야하나
        "normal": "never", //<div/>로 마무리해야한다.
        "component": "always" //vue component
      },
      "svg": "always",
      "math": "always"
    }],
    "vue/v-bind-style": ["error", "longform"],
    //밑에 두개 안넣으니까 자꾸 Expected 1 line break 오류남 
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
  }
}