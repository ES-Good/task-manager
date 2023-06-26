<template>
  <div class="redactor-box">
    <button class="redactor-box__btn" @click="$emit('editTask')">&#9998;</button>
    <button class="redactor-box__btn" @click="deleteItem">&#10006;</button>
  </div>
</template>

<script>
import { deleteMainTask } from '@/service/deleteTask';

export default {
  name: 'WriteAndDelete',
  props: {
    pathTask: String
  },
  emit:['editTask', 'deleteEvent'],
  methods:{
    async deleteItem(){
      await deleteMainTask(this.pathTask)
      this.$emit('deleteEvent')
    }
  }
}
</script>

<style>

.redactor-box__btn{
  background-color: #3f51b5;
  color: #fff;
  padding: 5px 8px;
  border: none;
  margin-right: 4px;
  cursor: pointer;
  border: 2px solid #1f285a;
}

.redactor-box__btn:last-child{
  margin-right: 0;
}

</style>