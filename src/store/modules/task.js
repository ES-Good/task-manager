import { sendTask } from "@/service/setTask";

export default ({
    state: {
      tasks: {}
    },
    getters: {
      allTasks(state){
        return state.tasks
      }
    },
    mutations: {
      updateTasks(state, dataTasks){
        state.tasks = dataTasks
      }
    },
    actions: {
      async fetchTasks(ctx){
          const res = await fetch('https://task-manager-76ccb-default-rtdb.firebaseio.com//tasks.json');
          const tasks = await res.json()

          ctx.commit('updateTasks',tasks) 
      },

      
      async addTaskBD(ctx, task){
        await sendTask(task.name, task.path)
        const res = await fetch('https://task-manager-76ccb-default-rtdb.firebaseio.com//tasks.json');
        const tasks = await res.json()

        ctx.commit('updateTasks',tasks) 
      }
    }
  })
  