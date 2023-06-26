import { sendTask } from "@/service/setTask";

export default ({
    state: {
      subtasks: {},
      MainTitle: 'Задачи'
    },
    getters: {
      allSubtask(state){
        return state.subtasks.subtasks
      },
      mainTaskInfo(state){
        let task = {
          id: state.subtasks.id,
          name: state.subtasks.name
        }
        return task
      },
      title(state){
        return state.MainTitle
      }
    },
    mutations: {
      updateSubtasks(state, dataTasks){
        state.subtasks = dataTasks
      },

      renameMainTitle(state, title){
        state.MainTitle = title
      }
    },
    actions: {
      async fetchSubTasks(ctx, taskKey){
          const res = await fetch(`https://task-manager-76ccb-default-rtdb.firebaseio.com//tasks/${taskKey}.json`);
          const subtasks = await res.json()
          ctx.commit('updateSubtasks',subtasks) 
      },

      async addSubTaskBD(ctx, task){
        await sendTask(task.name, task.path)

        const res = await fetch(`https://task-manager-76ccb-default-rtdb.firebaseio.com//tasks/${task.mainTaskId}.json`);
        const tasks = await res.json()

        ctx.commit('updateSubtasks',tasks) 
      }
    }
  })
  