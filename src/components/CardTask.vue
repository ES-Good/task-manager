<template>
    <div class="card-task">
        <div v-if="!edit" class="card-task__content-box">
            <div class="card-task__header">
                <WriteAndDelete 
                @editTask="editText"
                @deleteEvent="fetchTasks"
                :deleteTask="task.id" 
                :pathTask=" `/tasks/${task.id}` "/>
            </div>
            <router-link class="task-link"
            :to="{ name: 'tasks', params:{ id: task.id}}">
                {{ task.name }}
            </router-link>
        </div>
        <div v-else class="card-task__input-box">
            <div class="card-task__header">
                <button class="redactor-box__btn" @click="saveEdit">&#10004;</button>
                <button class="redactor-box__btn" @click="cancel">&#10006;</button>
            </div>
            
            <textarea v-model="inputUser" rows="5" class="card-task__input-user"></textarea>
        </div>
    </div>    

</template>

<script>
import WriteAndDelete from './WriteAndDelete.vue';

import { updateTask } from '../service/editTask'
import { mapActions } from 'vuex';

export default {
    name: "CardTask",
    props: {
        task: Object
    },
    components: { WriteAndDelete },
    data(){
        return{
            inputUser: '',
            edit: false
        }
    },
    methods:{
        ...mapActions(['fetchTasks']),
        editText(){
            this.edit = true
            this.inputUser = this.task.name
        },

        cancel(){
            this.edit = false
        },

        async saveEdit(){
            if (!this.inputUser) {
                return
            }
            await updateTask(this.inputUser, `/tasks/${this.task.id}/name`);
            this.fetchTasks()
            this.edit = false
        }
    }
}
</script>

<style>
.card-task{
    border: 4px solid #1f285a;
    margin: 10px;
    padding: 10px;
    width: calc(100% / 4 - 20px);
    border-radius: 10px;
    overflow: hidden;
    min-height: 160px;
    animation-name: showCard;
    animation-duration: 0.5s;
}

.card-task__header{
    display: flex;
    justify-content: flex-end;
    padding: 6px 10px;
    margin: 0 -10px;
    margin-top: -10px;
    background-color: rgba(63, 81, 181, .5);
    margin-bottom: 4px;
}

.task-link{
    display: block;
    width: 100%;
}

.card-task__input-user{
    resize: none;
    padding: 4px;
    outline: none;
    width: 100%;
    height: 100%;
}

@keyframes showCard {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

@media screen and (max-width: 992px){
    .card-task{
        width: calc(100% / 3 - 20px);
    }
}

@media screen and (max-width: 768px){
    .card-task{
        width: calc(100% / 2 - 20px);
    }
}

@media screen and (max-width: 768px){
    .card-task{
        width: 100%;
    }
}
</style>