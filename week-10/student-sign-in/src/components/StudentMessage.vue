<template>
  <div>
    <div v-show="student.name">
      <div v-if="student.present" class="alert alert-success">
        Welcome, {{student.name}}
      </div>
      <div v-else class="alert alert-info">
        Good bye, {{student.name}}
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "StudentMessage",
  props:{
    student: Object
  },
  methods:{

  }
}
</script>

<style scoped>

</style>