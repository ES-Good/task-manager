<template>
  <div class="card-task">
    <div v-if="!edit" class="card-task__content-box">
        <div class="card-task__header">
            <WriteAndDelete 
            @editTask="editText"
            @deleteEvent="fetchSubTasks(mainTaskInfo.id)"
            :deleteTask="subTask.id" 
            :pathTask=" `/tasks/${mainTaskInfo.id}/subtasks/${subTask.id}` "/>
        </div>
        <div class="task-link">
            {{ subTask.name }}
        </div>
    </div>
    <div v-else class="card-task__input-box">
        <button @click="saveEdit">Сохранить</button>
        <button @click="cancel">Отменить</button>
        <textarea v-model="inputUser" name="" id="" cols="30" rows="10"></textarea>
    </div>
  </div>
</template>

<script>
import WriteAndDelete from './WriteAndDelete.vue';
import { updateTask } from '../service/editTask'
import { mapActions, mapGetters } from 'vuex';

export default {
    name:'CardSubTask',
    props:{
        subTask: Object
    },
    components: { WriteAndDelete },
    data(){
        return{
            inputUser: '',
            edit: false
        }
    },
    computed:{
        ...mapGetters(['mainTaskInfo'])
    },
    methods:{
        ...mapActions(['fetchSubTasks']),
        editText(){
            this.edit = true
            this.inputUser = this.subTask.name;
        },

        cancel(){
            this.edit = false
        },

        test(){
            console.log('+++')
        },

        async saveEdit(){
            if (!this.inputUser) {
                return
            }
            await updateTask(this.inputUser, `/tasks/${this.mainTaskInfo.id}/subtasks/${this.subTask.id}/name`);
            await this.fetchSubTasks(this.$route.params.id)
            this.edit = false
        }
    }
}
</script>

<style>

</style>