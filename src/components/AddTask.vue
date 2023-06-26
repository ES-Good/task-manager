<template>
  <form class="block-add-task" :class="{'block-add-task_active': activeBtn}">
    <input type="text" class="input block-add-task__input" v-model="nameTask" placeholder="Введите название задачи">
    <div class="block-add-task__btn-box">
        <button class="block-add-task__btn" @click.prevent="activeBlock">Добавить</button>
        <button class="block-add-task__btn-close" @click.prevent="closeBlock">Close</button>
    </div>
</form>
</template>

<script>
export default {
    name: 'AddTask',
    data(){
        return{
            activeBtn: false,
            nameTask: ''
        }
    },
    props:{
        path: String
    },
    emits:['addTask'],
    methods:{

        activeBlock(){
            if (!this.activeBtn) {
                this.activeBtn = true
                return
            }

            if (!this.nameTask.length) return;

            let task = {
                name: this.nameTask,
                path: this.path
            }

            this.$emit('addTask', task)

            this.closeBlock()
        },

        closeBlock(){
            this.activeBtn = false
            this.nameTask = ''
        }
    }
}
</script>

<style>
.block-add-task{
    position: fixed;
    left: 10px;
    top: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 320px;
    background-color: #3F51B5;
    padding: 10px;
    border-radius: 10px;
}

.block-add-task__btn{
    background-color: rgba(0,0,0, 0.5);
    color: #fff;
    padding: 5px 10px;
    border: none;
    margin: 4px 0;
    cursor: pointer;
}

.block-add-task__input,
.block-add-task__btn-close{
    display: none;
}

.block-add-task__btn-close{
    cursor: pointer;
    font-size: 0;
    width: 20px;
    height: 20px;
    position: relative;
    z-index: 0;
    background-color: transparent;
    border: none;
    margin-left: 10px;
}

.block-add-task__btn-close::after,
.block-add-task__btn-close::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #000;
    z-index: 1;
    left: 50%;
    top: 50%;
}

.block-add-task__btn-close::after{
    transform: translate(-50%, -50%) rotate(-45deg);
}

.block-add-task__btn-close::before{
    transform: translate(-50%, -50%) rotate(45deg);
}

.block-add-task_active .block-add-task__input{
    display: block;
}

.block-add-task_active .block-add-task__btn-close{
    display: block;
}
.block-add-task__btn-box{
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

</style>