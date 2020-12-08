<!--components dont store values, but they store types. this way a companent can be re-used in-->
<!--different places for an app.-->
<template>
  <div class="wyr">

      <h2>Please make your choice </h2>

      <h3>{{question}}</h3>
    <input type="radio" v-model="choice"  v-bind:value="answer1" v-on:change="choiceMade">
    <label>{{answer1}}</label>
    <input type="radio" v-model="choice" v-bind:value="answer2" v-on:change="choiceMade">
    <label>{{answer2}}</label>
  </div>
</template>

<script>
export default {
  name: 'WouldYouRather',
  // data provided by parent and sent to child component
  //NEVER MODIFY A PROP
  props: {
    //stores type rather than value
    question: String,
    answer1: String,
    answer2: String,
    id: Number,
    answers: Array,
  },
  data(){
    return{
      choice: ''
    }
  },
  methods: {
    choiceMade (){
      //$emit sends an event or a message to the parent
      this.$emit('answer-change',this.choice)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.wyr{

  border-radius: 25px;
  padding-bottom: 15px;
  box-shadow: 2px 2px 2px 1px;
  background: white;
  padding-bottom: 5px;
}

</style>
