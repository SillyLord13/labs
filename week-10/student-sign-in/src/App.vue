<template>
  <div id="app">
    <NewStudentForm v-on:student-added="newStudentAdded"></NewStudentForm>
    <StudentTable v-bind:students="students"
                  v-on:student-arrived-or-left="studentArrivedOrLeft"
                  v-on:delete-student="deleteStudent"></StudentTable>
    <StudentMessage v-bind:student="mostRecentStudent"></StudentMessage>
  </div>
</template>

<script>
import NewStudentForm from './components/NewStudentForm.vue'
import StudentMessage from "./components/StudentMessage"
import StudentTable from "./components/StudentTable"

export default {
  name: 'App',
  components: {
    NewStudentForm,
    StudentMessage,
    StudentTable
  },
  data(){
    return{
      students: [],
      mostRecentStudent: {}
    }
  },
  methods:{
    newStudentAdded(student){
      this.students.push(student)
      this.students.sort(function (s1,s2){
        return s1.name.toLowerCase() > s2.name.toLowerCase() ? 1:-1
      })
    },
    studentArrivedOrLeft(student,present){
      let updateStudent = this.students.find(function (s){
        if (s.name === student.name && s.starID === student.starID){
          return true
        }
      })
      if (updateStudent){
        updateStudent.present = present
        this.mostRecentStudent = student
      }
    },
    deleteStudent(student){
      //filter returns new array of all students for whom the function returns true
      //basically creates a new array while filtering out the exact student we want to get rid of
      this.students = this.students.filter(function(s){
        if (s != student){
          return true
        }
      })
      //clears exit/sign in message
      this.mostRecentStudent = {}
    }
  }
}
</script>

<style>

</style>
