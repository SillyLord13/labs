<template>
  <div class="">
    <!-- uses vue to display errors from input-->
    <div class="alert alert-danger" v-show="errors.length > 0">
      <ul>
        <li v-for="error in errors" v-bind:key="error"> {{error}}</li>
      </ul>
    </div>

    <div class="card add-student m-2 p-2">
      <h4 class="card-title">Add new student</h4>

      <div class="form-group">
        <label for="name">Name</label>
        <!--get new student name and add to vue model, trims out whitespace-->
        <input id="name" class="form-control" v-model.trim="newStudentName">
      </div>
      <div class="form-group">
        <label for="starID">Star ID</label>
        <!--get new student starId and add to vue model, trims out white space-->
        <input id="starID" class="form-control" v-model.trim="newStarId">
      </div>
      <!-- v-on:click event handler -->
      <button class="btn btn-primary" v-on:click="addStudent">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewStudentForm',
  data(){
    return{
      newStudentName: '',
      newStarId: '',
      errors: []
    }
  },
  methods: {
    addStudent() {
      this.errors = []
      if (this.newStudentName && this.newStarId){
        let student = {name:this.newStudentName,starID:this.newStarId, present: false}
        //emits message with payload of the created student object ot the parent
        this.$emit('student-added',student)
        this.newStudentName = ''
        this.newStarId = ''
      } else {
        this.errors.push('Name and StarID are required')
      }
    }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
