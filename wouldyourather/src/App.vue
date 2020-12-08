<template>
  <div id="app">

    <h1>Would you rather...</h1>

    <would-you-rather v-for="wyr in questions"
                      v-bind:id="wyr.id"
                      v-bind:question="wyr.question"
                      v-bind:answer1="wyr.answer1"
                      v-bind:answer2="wyr.answer2"
                      v-on:answer-change="answerChange">
    </would-you-rather>

    <h1>So you would rather...</h1>
    <ul>
      <li class="choices" v-for="answer in answers">
        <h3>{{answer.userChoice}}</h3>
      </li>
    </ul>

  </div>
</template>

<script>
import WouldYouRather from './components/WouldYouRather.vue'

export default {
  name: 'App',
  components: {
    WouldYouRather
  },
  data() {
    return{
      questions: [
        {
          id: 1,
          question: 'Would you rather be an incredibly fast runner or an incredibly fast swimmer?',
          answer1: 'Be a fast Swimmer',
          answer2: 'Be a fast Runner'
        },
        {
          id: 2,
          question: 'Would you rather watch the original Star Wars trilogy but it slows down everytime someone says the force ' +
              'or watch the Lord of the Rings trilogy but it speeds up everytime Sam says potato?',
          answer1: 'Watch slowed down Star Wars',
          answer2: 'Watch sped up Lord of the Rings'
        },
        {
          id: 3,
          question:'Would you rather have the ability to speak to animals or the ability to read people\'s minds?',
          answer1:' Be able to speak to Animals',
          answer2: 'Be able to read Minds'
        }
      ],
      answers:[],

    }
  },
  methods: {
    // add answer to display list
    answerChange(choice){
      this.answers.push(choice)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border: solid black 3px ;
  border-radius: 15px;
  padding: 5px;

}
body{
  background: lightskyblue;
}

</style>
