<template>
  <div>
    <AddTask @addTask="updateTask" :path="`/tasks/${mainTaskInfo.id}/subtasks`"/>
    <div class="task-nav">
      <CardSubTask v-for="task in allSubtask" :key="task.id" :subTask="task"/>
    </div>
  </div>

</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import AddTask from '@/components/AddTask.vue';
import CardSubTask from '@/components/CardSubTask.vue';

export default {
    name: "TasksView",
    components: { AddTask, CardSubTask },
    computed: {
        ...mapGetters(["allSubtask", "titleSubtasks", "mainTaskInfo"]),
    },
    methods: {
        ...mapActions(["fetchSubTasks", "addSubTaskBD"]),
        ...mapMutations(["renameMainTitle"]),

        updateTask(task){
          task.mainTaskId = this.mainTaskInfo.id

          this.addSubTaskBD(task)
        }
    },
    mounted() {
        this.fetchSubTasks(this.$route.params.id);
    },
    updated(){
      this.renameMainTitle(this.mainTaskInfo.name)
    }
}
</script>

<style>

</style>