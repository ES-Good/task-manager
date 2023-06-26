<template>
  <div class="home">
    <AddTask @addTask="updateTask" path="/tasks" />
    <nav class="task-nav">
      <CardTask v-for="task in allTasks" :key="task.id" :task="task" />
    </nav>
  </div>
</template>

<script>
import AddTask from '@/components/AddTask.vue';
import CardTask from '@/components/CardTask.vue';
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'HomeView',
  components: { AddTask, CardTask },
  computed:{
    ...mapGetters(['allTasks'])
  },
  methods:{
    ...mapActions(['fetchTasks', 'addTaskBD']),
    ...mapMutations(["renameMainTitle"]),

    updateTask(task){
      this.addTaskBD(task)
    }
  },
  mounted(){
    this.fetchTasks()
  },

  updated(){
      this.renameMainTitle('Задачи')
  }
}
</script>

<style>
.task-nav{
  display: flex;
  flex-wrap: wrap;
}
</style>